import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../travaio_nobg.png'

export default function Home(){
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section
        className="min-h-screen flex items-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(42, 157, 143, 0.9) 0%, rgba(38, 70, 83, 0.8) 100%), url('https://readdy.ai/api/search-image?query=peaceful%20mountain%20landscape%20with%20winding%20roads%20through%20scenic%20valleys%2C%20soft%20morning%20light%2C%20minimalist%20travel%20photography%2C%20serene%20atmosphere%2C%20natural%20beauty%2C%20clean%20composition%2C%20professional%20travel%20destination&width=1920&height=1080&seq=hero1&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-[slideIn_0.8s_ease-out]">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Travel Safe,
                <br />
                <span className="text-yellow-300">Sleep Sound</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Advanced route monitoring and smart location-based alarms ensure your solo journeys are secure and stress-free. Never miss your destination or worry about unexpected route changes again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="bg-yellow-400 text-gray-900 px-8 py-4 text-lg font-semibold hover:bg-yellow-300 transition-colors rounded-lg">
                  Get Started Free
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 animate-[float_6s_ease-in-out_infinite]">
              <div className="backdrop-blur rounded-2xl shadow-xl p-6" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ background: '#2A9D8F' }}>
                    <i className="ri-route-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Real-time Route Monitoring</h3>
                </div>
                <p className="text-gray-600">Get instant alerts when your vehicle deviates from the expected route. Emergency contacts are automatically notified if you don't respond.</p>
              </div>
              <div className="backdrop-blur rounded-2xl shadow-xl p-6" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ background: '#264653' }}>
                    <i className="ri-alarm-line text-white text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Smart Location-based Alarm</h3>
                </div>
                <p className="text-gray-600">Never oversleep your destination again. Set location-based reminders that adapt to your actual travel speed and route progress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Travaio Works */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Travaio Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three simple steps to ensure your safety and peace of mind during solo travel</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6" style={{ background: '#2A9D8F' }}>
                  <i className="ri-shield-check-line text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Route Safety Monitor</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Our advanced GPS tracking system continuously monitors your route and compares it with your planned journey. The moment your vehicle takes an unexpected turn, you'll receive an instant notification.
              </p>
              <div className="space-y-4">
                <div className="flex items-center"><i className="ri-check-line text-xl mr-3" style={{ color: '#2A9D8F' }}></i><span className="text-gray-700">Real-time route deviation alerts</span></div>
                <div className="flex items-center"><i className="ri-check-line text-xl mr-3" style={{ color: '#2A9D8F' }}></i><span className="text-gray-700">Automatic emergency contact notification</span></div>
                <div className="flex items-center"><i className="ri-check-line text-xl mr-3" style={{ color: '#2A9D8F' }}></i><span className="text-gray-700">Customizable response time settings</span></div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <img src="https://readdy.ai/api/search-image?query=modern%20smartphone%20displaying%20GPS%20navigation%20app%20with%20route%20tracking%2C%20clean%20interface%20design%2C%20travel%20safety%20technology%2C%20mobile%20application%20mockup%2C%20professional%20product%20photography%2C%20minimalist%20background&width=600&height=400&seq=route1&orientation=landscape" alt="Route monitoring interface" className="w-full h-80 object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-50 p-8 rounded-2xl order-2 lg:order-1">
              <img src="https://readdy.ai/api/search-image?query=smart%20alarm%20clock%20interface%20on%20mobile%20device%2C%20location-based%20notification%20system%2C%20travel%20app%20design%2C%20modern%20UI%20elements%2C%20wake-up%20reminder%20technology%2C%20clean%20digital%20interface&width=600&height=400&seq=alarm1&orientation=landscape" alt="Smart alarm interface" className="w-full h-80 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-6" style={{ background: '#264653' }}>
                  <i className="ri-time-line text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Smart Travel Alarm</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">Set location-based alarms that adapt to your actual travel progress. No more guessing arrival times or missing your stop because you fell asleep during long journeys.</p>
              <div className="space-y-4">
                <div className="flex items-center"><i className="ri-check-line text-xl mr-3" style={{ color: '#2A9D8F' }}></i><span className="text-gray-700">GPS-based proximity alerts</span></div>
                <div className="flex items-center"><i className="ri-check-line text-xl mr-3" style={{ color: '#2A9D8F' }}></i><span className="text-gray-700">Speed-adaptive time calculations</span></div>
                <div className="flex items-center"><i className="ri-check-line text-xl mr-3" style={{ color: '#2A9D8F' }}></i><span className="text-gray-700">Backup alarm system for signal loss</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section id="safety" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Safety Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive protection for every aspect of your solo travel experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#2A9D8F' }}>
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Tracking</h3>
              <p className="text-gray-600">Continuous GPS monitoring with live location sharing to your trusted contacts</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#264653' }}>
                <i className="ri-notification-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Alerts</h3>
              <p className="text-gray-600">Instant notifications to emergency contacts when unusual activity is detected</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#2A9D8F' }}>
                <i className="ri-road-map-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Route Deviation</h3>
              <p className="text-gray-600">Smart detection of unexpected route changes with immediate alert system</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#264653' }}>
                <i className="ri-contacts-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Management</h3>
              <p className="text-gray-600">Easy setup and management of emergency contacts with priority levels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">User Dashboard Preview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experience the intuitive interface designed for effortless travel safety management</p>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Current Journey</h3>
                    <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-green-500 rounded-full"></div><span className="text-green-600 font-semibold">Active</span></div>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 mb-6 flex items-center justify-center">
                    <img src="https://images.shiksha.com/mediadata/images/listingGoogle/listingLocationlive119433.jpg" alt="Interactive map" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg"><p className="text-sm text-blue-600 font-semibold">Current Location</p><p className="text-gray-900 font-bold">GLA University, Chaumuhan</p></div>
                    <div className="bg-green-50 p-4 rounded-lg"><p className="text-sm text-green-600 font-semibold">ETA to Destination</p><p className="text-gray-900 font-bold">1h 15m</p></div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Safety Settings</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between"><span className="text-gray-700">Route Monitoring</span><label className="relative inline-block w-[60px] h-[34px]"><input type="checkbox" defaultChecked className="sr-only peer" /><span className="absolute inset-0 rounded-[34px] bg-gray-300 peer-checked:bg-[#2A9D8F] transition-all"></span><span className="absolute left-1 top-1 w-[26px] h-[26px] rounded-full bg-white peer-checked:translate-x-[26px] transition-transform"></span></label></div>
                    <div className="flex items-center justify-between"><span className="text-gray-700">Emergency Alerts</span><label className="relative inline-block w-[60px] h-[34px]"><input type="checkbox" defaultChecked className="sr-only peer" /><span className="absolute inset-0 rounded-[34px] bg-gray-300 peer-checked:bg-[#2A9D8F] transition-all"></span><span className="absolute left-1 top-1 w-[26px] h-[26px] rounded-full bg-white peer-checked:translate-x-[26px] transition-transform"></span></label></div>
                    <div className="flex items-center justify-between"><span className="text-gray-700">Location Sharing</span><label className="relative inline-block w-[60px] h-[34px]"><input type="checkbox" defaultChecked className="sr-only peer" /><span className="absolute inset-0 rounded-[34px] bg-gray-300 peer-checked:bg-[#2A9D8F] transition-all"></span><span className="absolute left-1 top-1 w-[26px] h-[26px] rounded-full bg-white peer-checked:translate-x-[26px] transition-transform"></span></label></div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Emergency Contacts</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3"><div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#2A9D8F' }}><i className="ri-user-line text-white"></i></div><div><p className="font-semibold text-gray-900">Ananya Jaiswal</p><p className="text-sm text-gray-600">Primary Contact</p></div></div>
                    <div className="flex items-center space-x-3"><div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#264653' }}><i className="ri-user-line text-white"></i></div><div><p className="font-semibold text-gray-900">Khushi Thakur</p><p className="text-sm text-gray-600">Secondary Contact</p></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#2A9D8F', color: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Travel with Confidence?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">Join thousands of solo travelers who trust Travaio for their safety and peace of mind. Start your journey today!</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/signup" className="bg-white text-[#2A9D8F] px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors rounded-lg">Start Free Trial</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div><div className="text-3xl font-bold mb-2">1,000+</div><div className="text-blue-100">Safe Journeys Completed</div></div>
            <div><div className="text-3xl font-bold mb-2">99.9%</div><div className="text-blue-100">Alert Accuracy Rate</div></div>
            <div><div className="text-3xl font-bold mb-2">24/7</div><div className="text-blue-100">Monitoring & Support</div></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2A9D8F 0%, #264653 100%)' }}>
                  <img src={LogoImg} alt="Travaio" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl">Travaio</h3>
                  <p className="text-gray-400 text-sm">Because Peace of Mind Should Travel Too</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering solo travelers with advanced safety technology and intelligent monitoring systems for worry-free journeys around the world.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#2A9D8F] transition-colors cursor-pointer">
                  <i className="ri-facebook-line"></i>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#2A9D8F] transition-colors cursor-pointer">
                  <i className="ri-twitter-line"></i>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#2A9D8F] transition-colors cursor-pointer">
                  <i className="ri-instagram-line"></i>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-[#2A9D8F] transition-colors cursor-pointer">
                  <i className="ri-linkedin-line"></i>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#safety" className="text-gray-400 hover:text-white transition-colors">Safety Features</a></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            <div></div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Travaio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
