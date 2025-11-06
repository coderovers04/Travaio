import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section
        className="text-white text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 0'
        }}
      >
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Redefining Solo Travel Safety</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Travaio leverages AI-powered route intelligence to protect travelers in real-time
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20" style={{ backgroundColor: '#E6F2F2' }}>
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#008080' }}>
              Our Mission
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto">
              We're building the future of intelligent travel safety - where technology acts as your guardian angel on every journey
            </p>
          </div>

          <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="bg-white rounded-xl p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#008080' }}>Safety First</h3>
              <p>Eliminate the anxiety of solo travel with our real-time deviation alerts and emergency response system</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#008080' }}>Smart Technology</h3>
              <p>Patented route prediction algorithms that learn from millions of travel patterns</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#008080' }}>Universal Access</h3>
              <p>Web-based platform means no downloads - protection for everyone, everywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-20">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#008080' }}>
              Why Travaio Exists
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto">Traditional travel safety solutions fail modern travelers</p>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>The Problem</h3>
              <p>82% of solo travelers report safety concerns, yet existing solutions require constant manual monitoring</p>
            </div>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Our Innovation</h3>
              <p>Automatic anomaly detection that works while you sleep, with multi-layer emergency protocols</p>
            </div>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Proven Impact</h3>
              <p>Beta testers reported 73% reduction in travel anxiety and 100% would recommend to friends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#008080' }}>
              Industry-Leading Features
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto">Powered by proprietary SafeRoute™ technology</p>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Real-Time Deviation Alerts</h3>
              <p>Instant notifications when your route changes unexpectedly, with danger-level assessment</p>
            </div>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Predictive Safety Scoring</h3>
              <p>AI analyzes routes for risk factors like poor lighting, high crime areas, and traffic patterns</p>
            </div>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Smart Destination Alarms</h3>
              <p>Location-aware reminders that account for actual travel speed, not just estimated time</p>
            </div>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Emergency Cascade</h3>
              <p>Automated contact escalation with live location sharing if you don't respond to alerts</p>
            </div>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Travel Companion Mode</h3>
              <p>Virtual trip monitoring that gives loved ones peace of mind without constant check-ins</p>
            </div>
            <div className="pl-5 border-l-4" style={{ borderColor: '#008080' }}>
              <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: '#006666' }}>Global Coverage</h3>
              <p>Works anywhere with GPS signal - no regional restrictions or service limitations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white text-center py-16" style={{ backgroundColor: '#008080' }}>
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Ready to Travel With Confidence?</h2>
          <p>Join thousands of smart travelers who never worry about safety</p>
          <Link
            to="/signup"
            className="inline-block mt-6 px-6 py-3 rounded-full font-semibold"
            style={{ backgroundColor: '#FFFFFF', color: '#008080' }}
          >
            Start Your Protected Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
