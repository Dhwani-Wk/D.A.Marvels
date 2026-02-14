import React from 'react';
import { Eye, Target, CheckCircle, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AboutPage = () => {
  const { isDark } = useTheme();

  return (
    <div>


      <div className="relative bg-slate-950 pt-40 pb-28 overflow-hidden noise">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-950/95 to-sky-950/30' : 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30'}`}></div>
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-sky-500/10' : 'bg-amber-500/10'}`}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="animate-fade-up">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 ${isDark ? 'dark-border-glow' : ''}`}>
              <Sparkles size={14} className={isDark ? 'text-sky-400' : 'text-amber-400'} />
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>Our Story</span>
            </div>
          </div>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-black text-white tracking-tight">About <span className="gradient-text-accent">Us</span></h1>
          <p className="animate-fade-up delay-200 text-xl text-slate-400 max-w-2xl mt-6">Quality without compromise since our inception.</p>
        </div>
      </div>


      <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 reveal-left">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">Behind every great structure...</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                ...is a frame that was built to last. D.A.Marvel was founded on the principle that quality should never be compromised. From essential Intermediate and L-sections to specialized Gypsum board framing, our products are designed to meet the highest standards of the modern construction era.
              </p>
              <div className={`p-8 rounded-r-2xl border-l-4 ${isDark ? 'bg-sky-950/30 border-sky-500' : 'bg-gradient-to-r from-amber-50 to-orange-50 border-amber-500'}`}>
                <p className={`italic text-xl font-semibold leading-relaxed ${isDark ? 'text-sky-300' : 'text-amber-900'}`}>
                  "A roof over your head on our shoulders."
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                We live by our tagline. To us, this is more than just words—it's a commitment. We take the "weight" of your project seriously, ensuring that every frame we manufacture provides the peace of mind you deserve.
              </p>
            </div>

            <div className="reveal-right relative">
              <div className={`rounded-3xl overflow-hidden shadow-2xl border ${isDark ? 'border-sky-500/20 shadow-sky-500/10' : 'border-slate-200 shadow-slate-900/10'}`}>
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" alt="Steel Manufacturing" className="w-full object-cover" />
              </div>
              <div className={`absolute -bottom-6 -right-6 w-48 h-48 rounded-full blur-3xl ${isDark ? 'bg-sky-500/15' : 'bg-amber-500/15'}`}></div>
              <div className={`absolute -top-4 -left-4 rounded-2xl p-5 shadow-xl z-20 animate-float-slow ${isDark ? 'glass-dark dark-border-glow' : 'glass-light'}`}>
                <p className={`text-2xl font-black ${isDark ? 'text-sky-400' : 'text-amber-600'}`}>500+</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-slate-50 dark:bg-slate-900 py-24 relative transition-colors duration-500">
        <div className={`absolute top-0 w-full h-px bg-gradient-to-r from-transparent ${isDark ? 'via-sky-500/20' : 'via-amber-500/20'} to-transparent`}></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl reveal">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border ${isDark ? 'bg-sky-500/10 border-sky-500/20' : 'bg-amber-50 border-amber-200'}`}>
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>Who We Are</span>
            </div>
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                D.A. Marvel Enterprise is a trusted manufacturer and supplier of high-quality galvanized false ceiling components. We specialize in Intermediate, Section, L, Perimeter and Gypsum board that form the backbone of durable, precise, and long-lasting ceiling structures.
              </p>
              <p>
                Built on strong engineering values and consistent quality, D.A. Marvel serves interior designers, architects, contractors, and homeowners who demand reliability on every project.
              </p>
              <p className={`font-semibold text-xl pl-6 ${isDark ? 'text-sky-300 border-l-4 border-sky-500' : 'text-slate-800 border-l-4 border-amber-500'}`}>
                At D.A. Marvel, we believe a ceiling is not just a surface—it's a structure that must perform silently for years.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className={`reveal card-3d card-neon p-10 rounded-3xl ${isDark ? 'bg-slate-900/80 border border-slate-800' : 'bg-amber-50 border border-amber-200/60'}`}>
              <div className="w-14 h-14 gradient-accent rounded-2xl flex items-center justify-center mb-7 shadow-lg">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Our Mission</h3>
              <p className={`leading-relaxed italic mb-8 text-lg ${isDark ? 'text-slate-400' : 'text-amber-950'}`}>
                "To deliver dependable and precision-engineered false ceiling components that professionals can trust without hesitation."
              </p>
              <h4 className={`text-xs font-bold uppercase tracking-[0.2em] mb-5 ${isDark ? 'text-slate-500' : 'text-amber-800'}`}>We aim to:</h4>
              <ul className="space-y-4">
                {['Maintain consistent product quality and dimensions', 'Support smooth installation and long service life', 'Build long-term relationships through honesty and service', 'Continuously improve our manufacturing standards'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className={`mt-1 flex-shrink-0 ${isDark ? 'text-sky-400' : 'text-amber-600'}`} />
                    <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-800'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>


            <div className={`reveal card-3d card-neon p-10 rounded-3xl text-white ${isDark ? 'bg-slate-800/80 border border-sky-500/20' : 'bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800'}`} style={{ transitionDelay: '0.15s' }}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 ${isDark ? 'bg-sky-500/20' : 'bg-amber-500/20'}`}>
                <Eye size={28} className={isDark ? 'text-sky-400' : 'text-amber-400'} />
              </div>
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                To become a recognized and preferred brand in the false ceiling industry across India, known for quality, integrity, and innovation.
              </p>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-5">We strive to:</h4>
              <ul className="space-y-4">
                {['Set benchmarks in galvanized ceiling components', 'Expand presence while maintaining quality', 'Be the first choice for architects and contractors', 'Grow responsibly with trust and performance'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className={`mt-1 flex-shrink-0 ${isDark ? 'text-sky-400' : 'text-amber-500'}`} />
                    <span className="text-slate-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
