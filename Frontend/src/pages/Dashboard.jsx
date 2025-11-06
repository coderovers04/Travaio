import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createTrip, getTrips } from '../services/api'
import { useAuth } from '../context/AuthContext'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

export default function Dashboard(){
  const { token, user } = useAuth()
  const nav = useNavigate()

  const [trips, setTrips] = useState([])
  const [active, setActive] = useState(null)
  const [form, setForm] = useState({ origin:'', destination:'', startTime:'' })
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const mapRef = useRef(null)
  const mapElRef = useRef(null)
  const originMarkerRef = useRef(null)
  const destMarkerRef = useRef(null)
  const defaultIconRef = useRef(null)

  useEffect(() => {
    // Fix Leaflet default marker icons using local assets (works reliably with Vite)
    // @ts-ignore
    if (L.Icon?.Default) {
      L.Icon.Default.mergeOptions({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon2x,
        shadowUrl: markerShadow,
      })
    }
    defaultIconRef.current = L.icon({ iconUrl: markerIcon, iconRetinaUrl: markerIcon2x, shadowUrl: markerShadow, iconSize: [25,41], iconAnchor: [12,41], popupAnchor: [1,-34], tooltipAnchor: [16,-28], shadowSize: [41,41] })
  }, [])

  useEffect(() => {
    let destroyed = false
    async function load(){
      try {
        const list = await getTrips(token)
        if (destroyed) return
        setTrips(list)
        const act = list.find(t => t.status && String(t.status).toLowerCase() !== 'completed') || list[0] || null
        setActive(act || null)
      } catch(err){
        setMsg(err.message)
      }
    }
    load()
    return () => { destroyed = true }
  }, [token])

  useEffect(() => {
    if (mapRef.current || !mapElRef.current) return
    const map = L.map(mapElRef.current, { preferCanvas: true, zoomControl: true }).setView([20.5937, 78.9629], 5)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map)
    mapRef.current = map
    setTimeout(() => map.invalidateSize(), 100)
  }, [])

  // Geocode helper
  async function geocode(place){
    if (!place) return null
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`
    const res = await fetch(url)
    const arr = await res.json()
    if (arr && arr.length > 0) return { lat: Number(arr[0].lat), lng: Number(arr[0].lon) }
    return null
  }

  // When active trip changes, try to plot origin/destination markers
  useEffect(() => {
    async function updateMarkers(){
      const map = mapRef.current
      if (!map || !active) return
      // Clear previous trip markers
      if (originMarkerRef.current){ map.removeLayer(originMarkerRef.current); originMarkerRef.current = null }
      if (destMarkerRef.current){ map.removeLayer(destMarkerRef.current); destMarkerRef.current = null }

      const origin = await geocode(active.origin)
      const dest = await geocode(active.destination)
      const latlngs = []
      if (origin){
        originMarkerRef.current = L.marker([origin.lat, origin.lng], { title: 'Origin', icon: defaultIconRef.current }).addTo(map)
        latlngs.push([origin.lat, origin.lng])
      }
      if (dest){
        destMarkerRef.current = L.marker([dest.lat, dest.lng], { title: 'Destination', icon: defaultIconRef.current }).addTo(map)
        latlngs.push([dest.lat, dest.lng])
      }
      if (latlngs.length){
        const bounds = L.latLngBounds(latlngs)
        map.fitBounds(bounds.pad(0.2))
      }
    }
    updateMarkers()
  }, [active])

  const activeStatusColor = useMemo(() => {
    const status = String(active?.status || '').toLowerCase()
    if (status === 'active' || status === 'ongoing') return 'bg-green-600'
    if (status === 'pending') return 'bg-amber-500'
    if (status === 'completed') return 'bg-blue-500'
    return 'bg-gray-400'
  }, [active])

  async function onCreateTrip(e){
    e.preventDefault()
    setMsg('')
    setLoading(true)
    try {
      await createTrip(token, form)
      setForm({ origin:'', destination:'', startTime:'' })
      const list = await getTrips(token)
      setTrips(list)
      const act = list.find(t => t.status && String(t.status).toLowerCase() !== 'completed') || list[0] || null
      setActive(act || null)
    } catch(err){
      setMsg(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <section className="col-span-2 bg-white rounded-2xl shadow p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Current Journey</h2>
          <span className="text-gray-600 font-medium flex items-center">
            <span className={`h-2 w-2 rounded-full mr-2 ${active ? activeStatusColor : 'bg-gray-400'}`}></span>
            {active?.status || 'No Active Trip'}
          </span>
        </div>
        <div ref={mapElRef} className="rounded-xl overflow-hidden mb-4 relative aspect-video bg-gray-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg">
            <span className="block text-sm font-semibold">Origin</span>
            <span className="font-bold">{active?.origin || '—'}</span>
          </div>
          <div className="bg-green-100 text-green-900 px-4 py-2 rounded-lg">
            <span className="block text-sm font-semibold">Destination</span>
            <span className="font-bold">{active?.destination || '—'}</span>
          </div>
          <div className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg sm:col-span-2">
            <span className="block text-sm font-semibold">Start Time</span>
            <span className="font-bold">{active?.startTime ? new Date(active.startTime).toLocaleString() : '—'}</span>
          </div>
        </div>
        <div className="mt-6 text-right">
          {!!active && <button onClick={() => nav(`/monitor?tripId=${active._id}`)} className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 text-sm">Open Monitor</button>}
        </div>
      </section>

      <aside className="space-y-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Create a Trip</h3>
          <form onSubmit={onCreateTrip} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Origin</label>
              <input className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary" value={form.origin} onChange={e=>setForm({...form, origin:e.target.value})} required />
            </div>
            <div>
              <label className="block text-sm mb-1">Destination</label>
              <input className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary" value={form.destination} onChange={e=>setForm({...form, destination:e.target.value})} required />
            </div>
            <div>
              <label className="block text-sm mb-1">Start Time</label>
              <input type="datetime-local" className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary" value={form.startTime} onChange={e=>setForm({...form, startTime:e.target.value})} required />
            </div>
            {msg && <p className="text-sm text-red-600">{msg}</p>}
            <button disabled={loading} className="w-full bg-teal-600 text-white py-2 rounded-md text-sm font-medium">{loading ? 'Creating...' : 'Create Trip'}</button>
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 max-h-80 overflow-y-auto">
          <h3 className="text-xl font-bold mb-4">Your Trips</h3>
          <div className="space-y-3 text-sm text-gray-700">
            {trips.length === 0 && <div>No trips found.</div>}
            {trips.map(t => (
              <div key={t._id} className="border border-gray-200 rounded-lg p-3">
                <div className="font-semibold">{t.origin || '—'} → {t.destination || '—'}</div>
                <div className="text-xs text-gray-500">Start: {t.startTime ? new Date(t.startTime).toLocaleString() : '—'} | Status: {String(t.status || 'UNKNOWN').toUpperCase()}</div>
                <button className="mt-2 w-full bg-teal-600 text-white py-1.5 rounded-md text-xs" onClick={() => nav(`/monitor?tripId=${t._id}`)}>Monitor Trip</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Emergency Contacts</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center">K</div>
              <div>
                <div className="font-bold">Kajal Kukreja</div>
                <div className="text-gray-500">Primary Contact</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center">A</div>
              <div>
                <div className="font-bold">Anantika Agarwal</div>
                <div className="text-gray-500">Secondary Contact</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </main>
  )
}
