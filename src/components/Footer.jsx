import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = ({ setPage }) => (
  <footer className="relative bg-slate-950 text-white pt-20 pb-8 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 dark:via-sky-500/50 to-transparent"></div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 dark:bg-sky-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/3 dark:bg-sky-500/3 rounded-full blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <div>
          <div className="flex items-center mb-6 group cursor-pointer" onClick={() => setPage('home')}>
            <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg">
              <span className="text-white font-black text-sm">M</span>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight">D.A.MARVEL</span>
              <span className="block text-[9px] font-medium tracking-[0.25em] uppercase text-amber-500 dark:text-sky-400">Enterprise</span>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed italic text-sm border-l-2 border-amber-500/30 dark:border-sky-500/30 pl-4">
            "A roof over your head on our shoulders."
          </p>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed">
            Trusted manufacturer of precision-engineered galvanized false ceiling components.
          </p>
        </div>
        

        <div>
          <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-slate-300">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Company' },
              { id: 'products', label: 'Our Products' },
              { id: 'contact', label: 'Get In Touch' }
            ].map((link) => (
              <li key={link.id}>
                <button onClick={() => setPage(link.id)} className="text-slate-400 hover:text-amber-500 dark:hover:text-sky-400 transition-all text-sm flex items-center gap-2 group">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-slate-300">Products</h4>
          <ul className="space-y-3">
            {['MARVEL X Series', 'Signature Alpha', 'Sigma Framing', 'PVC Panels'].map((name) => (
              <li key={name}>
                <button onClick={() => setPage('products')} className="text-slate-400 hover:text-amber-500 dark:hover:text-sky-400 transition-all text-sm flex items-center gap-2 group">
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-slate-300">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin size={16} className="text-amber-500 dark:text-sky-400 mt-0.5 flex-shrink-0" />
              <span>Plot No 12/B, Industrial Zone Phase-II, Surat, Gujarat - 395001</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Phone size={16} className="text-amber-500 dark:text-sky-400 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <Mail size={16} className="text-amber-500 dark:text-sky-400 flex-shrink-0" />
              <span>sales@damarvel.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs">© {new Date().getFullYear()} D.A. MARVEL Enterprise. All rights reserved.</p>
        <p className="text-slate-600 text-xs">Precision · Quality · Trust</p>
      </div>
    </div>
  </footer>
);

export default Footer;
