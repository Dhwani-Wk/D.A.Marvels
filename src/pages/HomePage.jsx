import React from 'react';
import { 
  ShieldCheck, Hammer, Award, ArrowRight, ChevronRight,
  CheckCircle, Layers, LayoutGrid, Users, Building2, Factory, Sparkles
} from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';
import { useTheme } from '../context/ThemeContext';

const HomePage = ({ setPage }) => {
  const { isDark } = useTheme();

  return (
    <div>


      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 z-10 ${
            isDark 
              ? 'bg-gradient-to-br from-slate-950/98 via-slate-950/90 to-sky-950/40'
              : 'bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-amber-900/30'
          }`}></div>
          <img src="https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=2000" alt="Architecture" className="w-full h-full object-cover scale-105" />
        </div>


        <div className={`absolute top-32 right-20 w-72 h-72 border rounded-full hidden lg:block z-[5] ${isDark ? 'border-sky-500/20' : 'border-amber-500/20'}`} style={{ animation: 'rotate-slow 25s linear infinite' }}></div>
        <div className={`absolute top-48 right-36 w-48 h-48 border rounded-full hidden lg:block z-[5] ${isDark ? 'border-sky-500/10' : 'border-amber-500/10'}`} style={{ animation: 'counter-rotate 20s linear infinite' }}></div>


        <div className="absolute top-24 right-16 w-56 h-36 rounded-2xl overflow-hidden shadow-2xl hidden lg:block z-[5] animate-float opacity-40 border border-white/10">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600" alt="Construction" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-40 right-48 w-48 h-32 rounded-2xl overflow-hidden shadow-2xl hidden lg:block z-[5] animate-float-slow opacity-30 border border-white/10">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600" alt="Steel" className="w-full h-full object-cover" />
        </div>


        <div className="absolute inset-0 z-[4] hidden lg:block">
          {[
            { top: '25%', left: '25%', size: 'w-1 h-1', delay: '0s' },
            { top: '33%', left: '75%', size: 'w-1.5 h-1.5', delay: '1s' },
            { top: '66%', left: '50%', size: 'w-1 h-1', delay: '2s' },
            { top: '75%', left: '25%', size: 'w-2 h-2', delay: '0.5s' }
          ].map((p, i) => (
            <div key={i} className={`absolute ${p.size} rounded-full animate-pulse ${isDark ? 'bg-sky-400/50' : 'bg-amber-500/50'}`} style={{ top: p.top, left: p.left, animationDelay: p.delay }}></div>
          ))}
        </div>
        

        <div className="relative z-20 max-w-7xl mx-auto px-4 pt-24">
          <div className="animate-fade-up">
            <div className={`inline-flex items-center gap-2 px-5 py-2 glass rounded-full mb-8 ${isDark ? 'dark-border-glow' : ''}`}>
              <Sparkles size={14} className={isDark ? 'text-sky-400' : 'text-amber-400'} />
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>Trusted Manufacturer</span>
            </div>
          </div>

          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] text-white">
            A Roof Over<br />Your Head
            <span className={`block mt-2 gradient-text-accent text-6xl md:text-7xl lg:text-8xl italic ${isDark ? 'dark-glow-text' : ''}`}>
              On Our Shoulders
            </span>
          </h1>

          <p className="animate-fade-up delay-300 mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Premium Galvanized False Ceiling Components & Metal Framing — engineered for durability, safety, and structural excellence.
          </p>

          <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4">
            <button 
              onClick={() => setPage('products')}
              className={`group px-8 py-4 gradient-accent text-white font-bold rounded-xl transition-all flex items-center gap-3 hover:scale-105 btn-shine ${
                isDark ? 'shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50' : 'shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50'
              }`}
            >
              Explore Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => setPage('about')} className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/15 transition-all">
              Our Mission
            </button>
          </div>

          <div className="animate-fade-up delay-600 mt-20 flex flex-wrap gap-16 pb-8">
            {[
              { value: '3+', label: 'Product Series' },
              { value: '500+', label: 'Projects Supported' },
              { value: '100%', label: 'Quality Tested' }
            ].map((stat, i) => (
              <div key={i} className="relative">
                <p className={`text-4xl font-black gradient-text-accent ${isDark ? 'dark-glow-text' : ''}`}>{stat.value}</p>
                <p className="text-slate-400 text-sm mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-slate-500 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border-2 border-slate-500/50 rounded-full flex justify-center pt-1.5">
            <div className={`w-1 h-2 rounded-full animate-bounce ${isDark ? 'bg-sky-400' : 'bg-amber-500'}`}></div>
          </div>
        </div>
      </section>


      <section className="py-28 bg-white dark:bg-slate-950 relative transition-colors duration-500">
        <div className={`absolute top-0 w-full h-px bg-gradient-to-r from-transparent ${isDark ? 'via-sky-500/20' : 'via-amber-500/20'} to-transparent`}></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border ${isDark ? 'bg-sky-500/10 border-sky-500/20' : 'bg-amber-50 border-amber-200'}`}>
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">Built on a Foundation of <span className="gradient-text-accent">Excellence</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Structural Integrity', desc: 'Every frame provides peace of mind, ensuring long-term structural stability and safety.' },
              { icon: Hammer, title: 'Precision Engineering', desc: 'Cold-rolled pre-forming processes that work-harden base material for superior strength.' },
              { icon: Award, title: 'Trusted Quality', desc: 'Preferred by architects and contractors across India for unmatched reliability.' }
            ].map((item, i) => (
              <div key={i} className={`reveal card-3d card-neon p-10 rounded-3xl group ${isDark ? 'bg-slate-900/80 border border-slate-800' : 'bg-gradient-to-br from-slate-50 to-white border border-slate-100'}`} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 gradient-accent-glow`}>
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={`py-28 relative overflow-hidden noise transition-colors duration-500 ${isDark ? 'bg-slate-900' : 'bg-slate-950'}`}>
        <div className={`absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2 ${isDark ? 'bg-sky-500/10' : 'bg-amber-500/10'}`}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-6 reveal">
            <div>
              <div className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full mb-5 gradient-accent-glow text-white`}>METAL FRAMING</div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Our Premium Metal<br /><span className="gradient-text-accent">Framing Systems</span></h2>
            </div>
            <button onClick={() => setPage('products')} className={`group font-bold flex items-center gap-2 hover:gap-4 transition-all mt-4 md:mt-8 ${isDark ? 'text-sky-400 hover:text-sky-300' : 'text-amber-400 hover:text-amber-300'}`}>
              View All Products <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCT_DATA.metalFraming.map((series, i) => (
              <div key={series.id} className={`reveal glass card-neon rounded-3xl p-8 hover:bg-white/12 transition-all duration-500 group cursor-pointer`} style={{ transitionDelay: `${i * 0.15}s` }} onClick={() => setPage('products')}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 transition-all duration-500 group-hover:scale-110 ${isDark ? 'bg-sky-500/20 group-hover:bg-sky-500' : 'bg-amber-500/20 group-hover:bg-amber-500'}`}>
                  <Layers size={28} className={`${isDark ? 'text-sky-400' : 'text-amber-400'} group-hover:text-white transition-colors`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 uppercase tracking-tight transition-colors ${isDark ? 'group-hover:text-sky-400' : 'group-hover:text-amber-400'}`}>{series.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">{series.description.substring(0, 150)}...</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {series.series.map((item, idx) => (
                    <span key={idx} className="text-[10px] bg-white/8 backdrop-blur-sm px-3 py-1 rounded-full text-slate-300 uppercase font-medium border border-white/10">
                      {item.title} · {item.thickness}
                    </span>
                  ))}
                </div>
                <span className={`text-sm font-bold flex items-center gap-1 group-hover:gap-3 transition-all ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>
                  Explore <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Engineering in <span className="gradient-text-accent">Action</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">From raw steel to precision-crafted framing — every component meets the highest standards.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600', alt: 'Construction' },
              { src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600', alt: 'Steel' },
              { src: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=600', alt: 'Metal' },
              { src: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=600', alt: 'Ceiling' }
            ].map((img, i) => (
              <div key={i} className={`reveal-scale img-zoom rounded-2xl aspect-square relative group ${isDark ? 'ring-1 ring-slate-800' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover rounded-2xl" />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl ${isDark ? 'bg-gradient-to-t from-sky-900/60 to-transparent' : 'bg-gradient-to-t from-slate-900/60 to-transparent'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-28 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-500">
        <div className={`absolute top-0 w-full h-px bg-gradient-to-r from-transparent ${isDark ? 'via-sky-500/20' : 'via-slate-300'} to-transparent`}></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between mb-20 gap-6 reveal">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border ${isDark ? 'bg-sky-500/10 border-sky-500/20' : 'bg-amber-50 border-amber-200'}`}>
                <LayoutGrid size={14} className={isDark ? 'text-sky-400' : 'text-amber-600'} />
                <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>PVC Panels</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">Decorative PVC<br /><span className="gradient-text-accent">Ceiling & Wall Panels</span></h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-xl mt-4">Waterproof, termite-proof, and built for hassle-free installation.</p>
            </div>
            <button onClick={() => setPage('products')} className={`group font-bold flex items-center gap-2 hover:gap-4 transition-all mt-4 md:mt-8 ${isDark ? 'text-sky-400' : 'text-amber-600'}`}>
              View Full Catalog <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {PRODUCT_DATA.pvcPanels.slice(0, 8).map((pvc, idx) => (
              <div key={idx} className={`reveal card-lift card-neon p-6 rounded-2xl group cursor-pointer ${isDark ? 'bg-slate-800/60 border border-slate-700 hover:border-sky-500/50' : 'bg-white border border-slate-200 hover:border-amber-400'}`} style={{ transitionDelay: `${idx * 0.08}s` }} onClick={() => setPage('products')}>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${isDark ? 'bg-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white' : 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'}`}>
                  <LayoutGrid size={22} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{pvc.name}</h3>
                <p className={`text-xs font-semibold mb-1 ${isDark ? 'text-sky-400' : 'text-amber-600'}`}>{pvc.type}</p>
                <p className="text-slate-400 text-[11px]">{pvc.width} × {pvc.thickness}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className={`py-28 overflow-hidden relative noise text-white transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-slate-950'}`}>
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? 'bg-sky-500/8' : 'bg-amber-500/8'}`}></div>
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl ${isDark ? 'bg-sky-500/5' : 'bg-amber-500/5'}`}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 reveal-left">
            <div className="inline-block px-4 py-1.5 gradient-accent text-xs font-bold rounded-full mb-6 shadow-lg text-white">WHY D.A. MARVEL?</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Excellence in every<br /><span className="gradient-text-accent">frame we manufacture.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              D.A. Marvel Enterprise is a trusted manufacturer and supplier of high-quality galvanized false ceiling components 
              that form the backbone of durable, precise, and long-lasting ceiling structures.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              At D.A. Marvel, we believe a ceiling is not just a surface—it's a structure that must perform silently for years.
            </p>
            <button onClick={() => setPage('about')} className={`group font-bold flex items-center gap-2 hover:gap-4 transition-all text-lg ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>
              Our Story <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="w-full md:w-1/2 relative reveal-right">
            <div className={`relative z-10 rounded-3xl overflow-hidden shadow-2xl border ${isDark ? 'border-sky-500/20 shadow-sky-500/10' : 'border-white/10 shadow-amber-500/10'}`}>
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" alt="Manufacturing" className="w-full object-cover" />
            </div>
            <div className={`absolute -bottom-8 -right-8 w-56 h-56 rounded-full blur-3xl animate-pulse-glow ${isDark ? 'bg-sky-500/20' : 'bg-amber-500/20'}`}></div>
            <div className={`absolute -bottom-4 -left-4 glass-dark rounded-2xl p-4 z-20 animate-float-slow ${isDark ? 'dark-border-glow' : ''}`}>
              <p className={`text-2xl font-black ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>100%</p>
              <p className="text-slate-400 text-xs">Quality Assured</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-28 bg-white dark:bg-slate-950 relative transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Who We <span className="gradient-text-accent">Serve</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Trusted by professionals across the construction industry.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: 'Architects', desc: 'Designing structures that demand precision and reliable framing.' },
              { icon: Users, title: 'Interior Designers', desc: 'Beautiful ceiling finishes backed by robust metal framing.' },
              { icon: Hammer, title: 'Contractors', desc: 'On-time project execution with dependable components.' },
              { icon: Factory, title: 'Homeowners', desc: 'Quality ceiling infrastructure built to last a lifetime.' }
            ].map((item, i) => (
              <div key={i} className={`reveal text-center p-10 rounded-3xl card-3d card-neon transition-all duration-500 group ${
                isDark ? 'bg-slate-900/80 border border-slate-800 hover:border-sky-500/30' : 'bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-amber-300'
              }`} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center mx-auto mb-7 group-hover:scale-110 transition-all duration-500 ${
                  isDark ? 'bg-sky-500/10 group-hover:bg-sky-500' : 'bg-amber-100 group-hover:bg-amber-500'
                }`}>
                  <item.icon size={34} className={`${isDark ? 'text-sky-400' : 'text-amber-600'} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 z-10 ${isDark ? 'bg-gradient-to-br from-sky-600/95 via-sky-500/90 to-blue-600/95' : 'bg-gradient-to-br from-amber-600/95 via-amber-500/90 to-orange-600/95'}`}></div>
          <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=2000" alt="Metal" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white reveal-scale">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to Build with<br />Excellence?</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Whether you need metal framing for commercial projects or PVC panels for residential makeovers, D.A. Marvel has the right solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setPage('contact')} className={`group px-10 py-4 font-bold rounded-xl hover:scale-105 transition-all shadow-xl flex items-center gap-2 ${isDark ? 'bg-white text-sky-600' : 'bg-white text-amber-600'}`}>
              Contact Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => setPage('products')} className="px-10 py-4 bg-transparent border-2 border-white/80 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Browse Catalog
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
