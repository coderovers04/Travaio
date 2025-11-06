import React, { useState } from 'react'
import { sendContact } from '../services/api'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', concern:'' })
  const [msg, setMsg] = useState('')
  const [ok, setOk] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function onSubmit(e){
    e.preventDefault()
    setMsg('')
    setOk(false)
    setLoading(true)
    try {
      await sendContact(form)
      setOk(true)
      setSuccess(true)
      setMsg('Message sent!')
      setForm({ name:'', email:'', phone:'', company:'', concern:'' })
    } catch(err){
      setMsg(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-[70vh] bg-gradient-to-br from-teal-50 to-teal-100 py-12">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-10 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: '#ccfbf1' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
              </div>
              <h2 className="text-xl font-bold text-teal-900 mb-2">Message Sent!</h2>
              <p className="text-teal-600 mb-6">Thank you for contacting us. We'll get back to you soon.</p>
              <button onClick={()=>{ setSuccess(false); setMsg(''); setOk(false); }} className="px-6 py-3 rounded-md font-semibold text-white" style={{ background: '#0d9488' }}>
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-teal-50 to-teal-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">Contact TRAVAIO</h1>
          <p className="text-lg text-teal-600 max-w-2xl mx-auto">We'd love to hear from you. Send us a message and our team will respond promptly.</p>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <div className="min-w-0">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6">
                <h2 className="text-xl font-bold">Get in Touch</h2>
              </div>
              <div className="p-6 md:p-8">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-teal-700 mb-2">Name</label>
                      <input className="w-full px-3 py-2 rounded-md border-2 focus:outline-none" style={{ borderColor: '#b2f5ea' }} value={form.name} onChange={e=>setForm({ ...form, name:e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-teal-700 mb-2">Email</label>
                      <input type="email" className="w-full px-3 py-2 rounded-md border-2 focus:outline-none" style={{ borderColor: '#b2f5ea' }} value={form.email} onChange={e=>setForm({ ...form, email:e.target.value })} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-teal-700 mb-2">Phone</label>
                      <input className="w-full px-3 py-2 rounded-md border-2 focus:outline-none" style={{ borderColor: '#b2f5ea' }} value={form.phone} onChange={e=>setForm({ ...form, phone:e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-teal-700 mb-2">Company</label>
                      <input className="w-full px-3 py-2 rounded-md border-2 focus:outline-none" style={{ borderColor: '#b2f5ea' }} value={form.company} onChange={e=>setForm({ ...form, company:e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-700 mb-2">Concern</label>
                    <textarea className="w-full px-3 py-2 rounded-md border-2 focus:outline-none min-h-[120px]" style={{ borderColor: '#b2f5ea' }} rows={5} value={form.concern} onChange={e=>setForm({ ...form, concern:e.target.value })} required />
                  </div>

                  {msg && (
                    <p className={ok ? 'text-green-600 text-sm' : 'text-red-600 text-sm'}>{msg}</p>
                  )}

                  <button disabled={loading} className="w-full text-white font-semibold py-3 rounded-md transition" style={{ backgroundImage: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' }}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6">
                <h2 className="text-xl font-bold">Company Information</h2>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#ccfbf1' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-900 mb-1">Email Us</h3>
                      <p className="text-teal-700">travaiohere04@gmail.com</p>
                      <p className="text-teal-700">contacttravaio04@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#ccfbf1' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-900 mb-1">Location</h3>
                      <p className="text-teal-700">GLA University<br/>Mathura, Uttar Pradesh<br/>India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#ccfbf1' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-900 mb-1">Call Us</h3>
                      <p className="text-teal-700">+91 9105188751</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold mb-4">Why Choose TRAVAiO?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-teal-100"><span className="w-2 h-2 rounded-full bg-white mr-3"></span>Expert Development Team</li>
                  <li className="flex items-center text-teal-100"><span className="w-2 h-2 rounded-full bg-white mr-3"></span>24/7 Support & Maintenance</li>
                  <li className="flex items-center text-teal-100"><span className="w-2 h-2 rounded-full bg-white mr-3"></span>Cutting-edge Technology</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
