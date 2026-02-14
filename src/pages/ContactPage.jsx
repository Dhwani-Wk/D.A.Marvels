import React from 'react';
import { Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactPage = () => {
  const { isDark } = useTheme();

  return (
    <div>


      <div className="relative bg-slate-950 pt-40 pb-28 overflow-hidden noise">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-950/95 to-sky-950/30' : 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30'}`}></div>
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-sky-500/10' : 'bg-amber-500/10'}`}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-up">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 ${isDark ? 'dark-border-glow' : ''}`}>
              <Sparkles size={14} className={isDark ? 'text-sky-400' : 'text-amber-400'} />
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>Get In Touch</span>
            </div>
          </div>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-black text-white tracking-tight">Contact <span className="gradient-text-accent">Us</span></h1>
          <p className="animate-fade-up delay-200 text-slate-400 max-w-xl mx-auto mt-6">Have a project in mind? Reach out to our experts today.</p>
        </div>
      </div>


      <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="reveal-left">
              <h2 className="text-3xl font-black mb-10 text-slate-900 dark:text-white">Let's <span className="gradient-text-accent">Connect</span></h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, title: 'Office Address', lines: ['D.A. Marvel Enterprise', 'Plot No 12/B, Industrial Zone Phase-II,', 'Surat, Gujarat - 395001, India'] },
                  { icon: Phone, title: 'Call Us', lines: ['+91 99252 00000 (Sales)', '+91 99000 11111 (Technical Support)'] },
                  { icon: Mail, title: 'Email Support', lines: ['info@damarvel.co.in', 'orders@damarvel.co.in'] }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 ${
                      isDark 
                        ? 'bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-sky-500/20'
                        : 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-500/20'
                    }`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>


              <div className={`mt-12 rounded-3xl p-8 relative overflow-hidden noise ${isDark ? 'bg-slate-900 border border-sky-500/20 dark-border-glow' : 'gradient-dark text-white border border-slate-800'}`}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock size={20} className={isDark ? 'text-sky-400' : 'text-amber-400'} />
                    <h3 className="text-lg font-bold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { day: 'Monday – Friday', time: '09:00 AM – 07:00 PM' },
                      { day: 'Saturday', time: '10:00 AM – 04:00 PM' }
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between py-2.5 border-b border-slate-700/50">
                        <span className="text-slate-300 text-sm">{item.day}</span>
                        <span className="text-sm font-semibold text-white">{item.time}</span>
                      </div>
                    ))}
                    <div className="flex justify-between py-2.5">
                      <span className="text-slate-300 text-sm">Sunday</span>
                      <span className={`text-sm font-bold uppercase ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="reveal-right">
              <div className={`rounded-3xl overflow-hidden shadow-2xl min-h-[550px] relative ${isDark ? 'border border-sky-500/20 shadow-sky-500/10' : 'border border-slate-200 shadow-slate-900/10'}`}>
                <iframe
                  title="D.A. Marvel Enterprise Location"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Plot+No+12%2FB+Industrial+Zone+Phase+II+Surat+Gujarat+395001+India&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '550px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-center text-slate-400 text-xs mt-4">
                📍 D.A. Marvel Enterprise — Plot No 12/B, Industrial Zone Phase-II, Surat
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
