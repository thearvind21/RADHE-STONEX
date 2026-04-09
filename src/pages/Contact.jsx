import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Contact() {
  return (
    <main className="pb-16 md:pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[530px] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Dramatic interior of a high-end luxury marble showroom" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjkXPDKoK8vxboxB1ByA8gJ6HoHIJAoQfLhC-ycgA_Xlhk5nkv_I1xHP7VZ4F-leH8zJ_438OKKHR038fYdcuCesQ2X_TEspfOlFnOz-BFkHBsNJSyqvxh6zdHcXLRfXalST6LiZpvl613f8aOVQedaNByFeA6O_GHSlEQPZtnADff91yVKcOaC1F7bftfCej14ZUS7hxXi97YM9g58fYCILy6yEd-kgMf5qxRLaWqsnGYCwEB7XDEJ_e_NhQTi920cVevpKqFiouc"
          />
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/60 to-surface z-[2]"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <span className="block text-primary tracking-[0.4em] text-[10px] uppercase mb-4 font-label">Exclusivity Defined</span>
          <h2 className="text-4xl md:text-7xl font-headline tracking-tight text-on-surface mb-6">Connect with the <span className="italic text-primary-fixed-dim">Curators</span></h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed text-sm md:text-base">Radhe Stonex represents the pinnacle of architectural stone. Reach out to our consultants to source rare marble for your most ambitious projects.</p>
        </motion.div>
      </section>

      {/* Contact & Inquiry Content */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8">
        {/* Left: Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-lg border-l border-primary/20 shadow-xl"
        >
          <h3 className="font-headline text-2xl md:text-3xl mb-8">Personal Inquiry</h3>
          <form className="space-y-8">
            <div className="relative group">
              <label className="block text-[10px] tracking-widest text-primary uppercase mb-1">Full Name</label>
              <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface py-3 px-0 transition-all placeholder:text-stone-700 outline-none" placeholder="ALEXANDER VANCE" type="text" />
            </div>
            <div className="relative group">
              <label className="block text-[10px] tracking-widest text-primary uppercase mb-1">Phone Number</label>
              <input className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface py-3 px-0 transition-all placeholder:text-stone-700 outline-none" placeholder="+91 00000 00000" type="tel" />
            </div>
            <div className="relative group">
              <label className="block text-[10px] tracking-widest text-primary uppercase mb-1">Project Requirements</label>
              <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface py-3 px-0 transition-all placeholder:text-stone-700 resize-none outline-none" placeholder="DESCRIBE YOUR VISION..." rows="4"></textarea>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => window.open('https://wa.me/91XXXXXXXXXX?text=I%20would%20like%20to%20request%20a%20callback%20regarding%20my%20marble%20project.', '_blank')}
                className="w-full bg-primary text-on-primary py-4 px-8 font-label font-extrabold tracking-[0.2em] uppercase rounded-lg hover:bg-primary-fixed-dim transition-all flex items-center justify-center gap-3 active:scale-[0.98]" 
                type="button"
              >
                Request a Callback
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right: Details & Visuals */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="lg:col-span-5 flex flex-col gap-10 md:gap-12"
        >
          {/* Contact Details */}
          <div className="space-y-8 md:space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.2em] text-primary mb-2 font-bold uppercase">The Showroom</h4>
                <p className="text-on-surface-variant font-light text-base md:text-lg">RICCO Industrial Area, Kishangarh, Rajasthan, India.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
              </div>
              <div>
                <h4 className="text-[10px] tracking-[0.2em] text-primary mb-2 font-bold uppercase">Phone Assistance</h4>
                <p className="text-on-surface-variant font-light text-base md:text-lg">098290 78191</p>
              </div>
            </div>
            <div className="pt-4">
              <a className="group flex items-center justify-between p-6 bg-surface-container-high rounded-lg hover:bg-surface-bright transition-all border border-outline-variant/10 shadow-lg shadow-black/20" href="https://wa.me/919829078191">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#25D366]">chat</span>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest text-[#25D366] uppercase">Instant WhatsApp</h4>
                    <p className="text-on-surface-variant text-sm">Direct line to a concierge</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-2 transition-transform">chevron_right</span>
              </a>
            </div>
          </div>
          
          {/* Small Visual Slab */}
          <div className="relative h-64 rounded-lg overflow-hidden grayscale-0 transition-all duration-700 hidden sm:block">
            <img className="w-full h-full object-cover" alt="Extreme macro close-up of dark nero marquiana marble" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUmXcTSWReZqDkjKVExWbkFQrn7hBHbR_i2YpTW6qe6TnMOSn1G6nu-ByPX_xmFc1f9OB9mrDxqzcKGvc3tmFpKFOzciIRHXJNBW9daLGnwwYHfMylaESOvZYPY9WwUug6NZSGYspxFIhvymv9udrkJUKRETDLjVStEYryWTSYEDQ-Lis1pSd6T3-UycTSK1NjPYoq2RbuB6r_QCUBrD0KlEoi2L4g0ngjuAB6QBvughosO77kz7lqILPoqBKs0UPJbnTM7E6HyU3H"/>
            <div className="absolute inset-0 bg-stone-900/10"></div>
          </div>
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="mt-24 md:mt-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="max-w-[1440px] mx-auto"
        >
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h3 className="font-headline text-3xl md:text-4xl mb-2">Visit the Source</h3>
              <p className="text-stone-500 font-label text-[10px] md:text-xs uppercase tracking-widest">Experience the texture of luxury in person</p>
            </div>
            <div className="hidden lg:block h-[1px] flex-1 mx-12 bg-outline-variant/20 mb-4"></div>
            <span className="text-primary text-[10px] md:text-xs tracking-widest font-bold">MAPS / KISHANGARH</span>
          </div>
          <div className="w-full h-[350px] md:h-[500px] bg-surface-container-low rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center bg-stone-950/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold text-[10px] md:text-xs tracking-widest uppercase">Open Interactive Map</button>
            </div>
            {/* Map Placeholder */}
            <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12 bg-stone-900/50">
              <img className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-soft-light" alt="Map visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39mCrN4os46oo5eJO5th7XUvf6lr1Bn8ErJfGS_PHAMT2a2KCrSJM-N7CdNiOIIHF4byq23FZBYmpRw563P7Xf2Obed0xL6Auj4Jr3Stw-oufZlwGavKhJruU7EMCbkz6MyK3-c8mW32avzzNxZVKJBTi80QX2QVnYjSjkI_-oZfSXR_NuaPF8VRTEVPDKaDQYWt0v6OmKWTiWaX96OQ2sgVFTiHAPoT1_XC3GHaPaDGbAqcWLuzbSFN9wc6rveiRm52O6mg7tC4p"/>
              <span className="material-symbols-outlined text-5xl md:text-6xl text-primary/40 mb-4">map</span>
              <p className="text-stone-400 font-headline text-base md:text-lg relative z-20 text-center">RICCO Area, Kishangarh, Rajasthan</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
