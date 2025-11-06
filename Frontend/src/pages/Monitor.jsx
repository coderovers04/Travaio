import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getTrip } from '../services/api'
import { useAuth } from '../context/AuthContext'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

export default function Monitor(){
  const { token } = useAuth()
  const [params] = useSearchParams()
  const tripId = params.get('tripId')

  const mapElRef = useRef(null)
  const mapRef = useRef(null)
  const routeRef = useRef(null)
  const userMarkerRef = useRef(null)
  const routeLatLngsRef = useRef([])
  const defaultIconRef = useRef(null)

  const [label, setLabel] = useState('Loading...')
  const [status, setStatus] = useState('')

  useEffect(() => {
    // Configure Leaflet marker icons using local assets
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
    if (!tripId) { setStatus('No tripId provided'); return }
    let destroyed = false

    async function geocode(place){
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`
      const res = await fetch(url)
      const arr = await res.json()
      if (arr && arr.length > 0) return { lat: Number(arr[0].lat), lng: Number(arr[0].lon) }
      return null
    }

    async function load(){
      try {
        const t = await getTrip(token, tripId)
        if (destroyed) return
        setLabel(`${t.origin} → ${t.destination}`)
        if (!t.originCoords) t.originCoords = await geocode(t.origin)
        if (!t.destinationCoords) t.destinationCoords = await geocode(t.destination)
        initMapAndRoute(t)
      } catch(err){
        setStatus(err.message)
      }
    }

    function initMapAndRoute(trip){
      const start = trip.originCoords || { lat: 28.6139, lng: 77.2090 }
      const map = L.map(mapElRef.current).setView([start.lat, start.lng], 10)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map)
      mapRef.current = map

      if (trip.originCoords && trip.destinationCoords){
        const rc = L.Routing.control({
          waypoints: [
            L.latLng(trip.originCoords.lat, trip.originCoords.lng),
            L.latLng(trip.destinationCoords.lat, trip.destinationCoords.lng)
          ],
          routeWhileDragging: false,
          addWaypoints: false,
          draggableWaypoints: false,
          show: false,
          createMarker: (i, wp) => L.marker(wp.latLng, { icon: defaultIconRef.current })
        }).on('routesfound', (e) => {
          const coords = e.routes[0].coordinates
          routeLatLngsRef.current = coords.map(c => L.latLng(c.lat, c.lng))
          const bounds = L.latLngBounds(routeLatLngsRef.current)
          map.fitBounds(bounds.pad(0.2))
          setStatus('Route loaded.')
        }).addTo(map)
        routeRef.current = rc
      } else {
        setStatus('Missing coordinates; showing start only.')
      }

      startWatching()
    }

    const DEVIATION_THRESHOLD_METERS = 300

    function minDistanceToRoute(lat, lng){
      if (!routeLatLngsRef.current.length) return Infinity
      const cur = L.latLng(lat, lng)
      let min = Infinity
      for (let i=0;i<routeLatLngsRef.current.length;i++){
        const d = cur.distanceTo(routeLatLngsRef.current[i])
        if (d < min) min = d
      }
      return min
    }

    function startWatching(){
      if (!('geolocation' in navigator)) { setStatus('Geolocation not supported.'); return }
      navigator.geolocation.watchPosition(pos => {
        const { latitude, longitude } = pos.coords
        const map = mapRef.current
        if (!map) return
        if (!userMarkerRef.current){
          userMarkerRef.current = L.circleMarker([latitude, longitude], {
            radius: 8,
            color: '#2563eb',          // stroke color
            weight: 2,
            fillColor: '#60a5fa',      // fill color
            fillOpacity: 0.9
          }).addTo(map)
          userMarkerRef.current.bindTooltip('You', { permanent: false })
        } else {
          userMarkerRef.current.setLatLng([latitude, longitude])
        }
        const d = minDistanceToRoute(latitude, longitude)
        if (d === Infinity){ setStatus('No route loaded yet…'); return }
        if (d > DEVIATION_THRESHOLD_METERS){ setStatus('You are off your planned route!') }
        else { setStatus('On route.') }
      }, err => {
        setStatus('Location unavailable.')
        console.error(err)
      }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 })
    }

    load()
    return () => { destroyed = true }
  }, [token, tripId])

  return (
    <main className="max-w-7xl mx-auto p-4">
      <div className="flex items-center justify-between mb-2">
        <strong>Trip Monitor</strong>
        <div className="text-sm text-teal-700">{status}</div>
      </div>
      <div className="mb-2 text-sm text-gray-700">{label}</div>
      <div ref={mapElRef} className="w-full h-[70vh] rounded-xl overflow-hidden bg-gray-200" />
    </main>
  )
}
