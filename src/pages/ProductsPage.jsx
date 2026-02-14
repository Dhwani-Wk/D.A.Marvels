import React from 'react';
import { LayoutGrid, Package, Ruler, Weight, Layers, Sparkles } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';
import { useTheme } from '../context/ThemeContext';

const ProductsPage = () => {
  const { isDark } = useTheme();

  return (
    <div>


      <div className="relative bg-slate-950 pt-40 pb-28 overflow-hidden noise">
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-950/95 to-sky-950/30' : 'bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30'}`}></div>
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-sky-500/10' : 'bg-amber-500/10'}`}></div>
        <div className={`absolute bottom-0 left-20 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-sky-500/5' : 'bg-amber-500/5'}`}></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-up">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 ${isDark ? 'dark-border-glow' : ''}`}>
              <Sparkles size={14} className={isDark ? 'text-sky-400' : 'text-amber-400'} />
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-400'}`}>Product Catalog</span>
            </div>
          </div>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-black text-white tracking-tight">Our <span className="gradient-text-accent">Products</span></h1>
          <p className="animate-fade-up delay-200 text-slate-400 max-w-2xl mx-auto text-lg mt-6 italic">
            High-performance metal framing systems and decorative PVC panels for every architectural need.
          </p>
        </div>
      </div>


      <section className="py-28 bg-white dark:bg-slate-950 relative transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border ${isDark ? 'bg-sky-500/10 border-sky-500/20' : 'bg-amber-50 border-amber-200'}`}>
              <Layers size={14} className={isDark ? 'text-sky-400' : 'text-amber-600'} />
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>Metal Framing</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Metal Framing <span className="gradient-text-accent">Systems</span></h2>
          </div>
          
          <div className="space-y-32">
            {PRODUCT_DATA.metalFraming.map((category, catIdx) => (
              <div key={category.id} className="reveal" style={{ transitionDelay: `${catIdx * 0.1}s` }}>
                <div className="mb-12">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">{category.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.series.map((item, idx) => (
                    <div key={idx} className={`card-3d card-neon rounded-2xl overflow-hidden group ${isDark ? 'bg-slate-900/80 border border-slate-800 hover:border-sky-500/40' : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-amber-400'}`}>
                      <div className={`h-1.5 gradient-accent`}></div>
                      <div className="p-7">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                          <span className="text-xs gradient-accent text-white px-3 py-1 rounded-full font-bold shadow-sm">{item.thickness}</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">{item.desc}</p>
                        <div className="space-y-4 text-sm">
                          <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                            <p className="text-slate-400 uppercase text-[10px] font-bold tracking-widest mb-1">Application</p>
                            <p className="text-slate-700 dark:text-slate-300 leading-snug">{item.app}</p>
                          </div>
                          <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                            <p className="text-slate-400 uppercase text-[10px] font-bold tracking-widest mb-1">Dimensions (MM)</p>
                            <p className="text-slate-900 dark:text-slate-200 font-mono text-xs">{item.dims}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-28 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-500">
        <div className={`absolute top-0 w-full h-px bg-gradient-to-r from-transparent ${isDark ? 'via-sky-500/20' : 'via-amber-500/20'} to-transparent`}></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border ${isDark ? 'bg-sky-500/10 border-sky-500/20' : 'bg-amber-50 border-amber-200'}`}>
              <LayoutGrid size={14} className={isDark ? 'text-sky-400' : 'text-amber-600'} />
              <span className={`text-xs font-bold uppercase tracking-[0.2em] ${isDark ? 'text-sky-400' : 'text-amber-700'}`}>PVC Panels</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2">PVC <span className="gradient-text-accent">Panels</span></h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed mt-4">
              Premium PVC ceiling and wall panels. Waterproof, termite-proof, and built for hassle-free installation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_DATA.pvcPanels.map((pvc, idx) => (
              <div key={idx} className={`reveal card-3d card-neon p-7 rounded-2xl group ${isDark ? 'bg-slate-800/60 border border-slate-700 hover:border-sky-500/40' : 'bg-white border border-slate-200 hover:border-amber-400'}`} style={{ transitionDelay: `${idx * 0.08}s` }}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300 ${isDark ? 'bg-sky-500/20 text-sky-400 group-hover:bg-sky-500 group-hover:text-white' : 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'}`}>
                  <LayoutGrid size={24} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{pvc.name}</h3>
                <p className={`text-xs font-bold mb-4 ${isDark ? 'text-sky-400' : 'text-amber-600'}`}>{pvc.type}</p>
                <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2"><Ruler size={12} className="text-slate-400" /><span>{pvc.width} × {pvc.length}</span></div>
                  <div className="flex items-center gap-2"><Layers size={12} className="text-slate-400" /><span>Thickness: {pvc.thickness}</span></div>
                  <div className="flex items-center gap-2"><Weight size={12} className="text-slate-400" /><span>{pvc.weight}</span></div>
                  <div className="flex items-center gap-2"><Package size={12} className="text-slate-400" /><span>{pvc.packing}</span></div>
                </div>
                <p className={`text-[11px] leading-relaxed border-t pt-3 ${isDark ? 'text-slate-500 border-slate-700' : 'text-slate-400 border-slate-100'}`}>{pvc.features}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="reveal">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Installation <span className="gradient-text-accent">Accessories</span></h2>
            <div className="w-16 h-1 gradient-accent rounded-full mb-8"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {PRODUCT_DATA.pvcAccessories.map((acc, idx) => (
              <div key={idx} className={`reveal card-lift flex items-start gap-4 p-6 rounded-2xl ${isDark ? 'bg-slate-900/80 border border-slate-800' : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200'}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-11 h-11 gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Package size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{acc.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{acc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
