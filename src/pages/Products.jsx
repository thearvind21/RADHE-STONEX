import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Products() {
  const navigate = useNavigate();

  const handleGetQuote = (productName) => {
    const message = encodeURIComponent(`I am interested in ${productName}`);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${message}`, '_blank');
  };

  const handleViewDetails = (productName) => {
    navigate(`/product/${productName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <main className="pt-[88px] pb-24 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
      {/* Editorial Header */}
      <motion.header 
        initial="hidden" animate="visible" variants={fadeUp}
        className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-l border-primary/20 pl-8"
      >
        <div className="max-w-2xl">
          <p className="font-label text-primary text-[10px] uppercase tracking-[0.4em] mb-4">A Legacy of Earth's Artistry</p>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none text-on-surface">
            Curated <span className="italic text-primary">Dimensions.</span>
          </h1>
        </div>
        <div className="md:text-right">
          <p className="font-body text-secondary text-sm max-w-xs leading-relaxed opacity-80">
            Sourced from the heart of tectonic shifts, our stones represent the pinnacle of geological luxury.
          </p>
        </div>
      </motion.header>

      {/* Category: Italian Marble */}
      <section className="mb-24 md:mb-32">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface">Italian Marble</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-outline-variant/40 to-transparent"></div>
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">Series 01</span>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product Card 01 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="group relative flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
              <img className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Statuario Imperial" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXtwJS6FuPR0meViY_FJhiMPTbFmzS2pPLe6KQp2v3V3Tl7Ntfd2ZO4RkpLqUbB4xrazNaMW1mELZldwDWc6Rj3JgeKc6r-Z7oH3dWaKrCkbuAoE4SKg7dEp7lKFWs-dvFgQxSJZuXxwTmA6LtL71E4u79d3BK6S0WiB7LPVX5Lp-E7zpXfVKDfb7AQfk01J6X-_4_k88l2P3L3yfcpk-g9V-uhJS1JgST8GQKA8jZeip5UUKKIcR-rT0ZWW2gFA32dF-2G9Klkarw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="glass-card p-6 rounded-lg -mt-20 mx-4 shadow-2xl relative z-10 border border-white/5 group-hover:border-primary/20 transition-colors">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Heritage Selection</p>
              <h3 className="font-headline text-2xl text-on-surface mb-1">Statuario Imperial</h3>
              <p className="font-label text-[11px] text-secondary tracking-widest uppercase mb-6">Polished / Honed Finish</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleViewDetails('Statuario Imperial')}
                  className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface border border-outline-variant/30 rounded-lg active:scale-95 transition-all hover:bg-surface-bright"
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleGetQuote('Statuario Imperial')}
                  className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary bg-primary rounded-lg active:scale-95 transition-all hover:bg-primary-fixed-dim shadow-lg shadow-primary/10"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product Card 02 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="group relative flex flex-col sm:pt-12"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
              <img className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Botticino Royal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRzNIyOnPTOZctm3Fk4csZuUt9DzRR7bA4tfILc4jxX_8TD-jzhXl2ZwpFHbanr3KhBw9ARBpbFls_bcBdesaYWvddmThCbMCcLjT2eHGEjyXL8WefQqA04emkfn8Kjwld6-BCXOKNdGoMMyqtzxKFrnDU-DvXaSVkrz82DRpAex6F6RF7YFiPbeyZOKmV_dOCJFbQLt5CZhz2uRqqh3wWysyPNHbwzxyh-Is7b_3Z7w1F6vidzbcl9JLAcUcA789C4y644e9_qk90"/>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="glass-card p-6 rounded-lg -mt-20 mx-4 shadow-2xl relative z-10 border border-white/5 group-hover:border-primary/20 transition-colors">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Classic Reserve</p>
              <h3 className="font-headline text-2xl text-on-surface mb-1">Botticino Royal</h3>
              <p className="font-label text-[11px] text-secondary tracking-widest uppercase mb-6">Polished / Satin Finish</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleViewDetails('Botticino Royal')}
                  className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface border border-outline-variant/30 rounded-lg active:scale-95 transition-all hover:bg-surface-bright"
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleGetQuote('Botticino Royal')}
                  className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary bg-primary rounded-lg active:scale-95 transition-all hover:bg-primary-fixed-dim shadow-lg shadow-primary/10"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>

          {/* Product Card 03 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="group relative flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
              <img className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Calacatta Oro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzSUPMnh93i1eOfCHK2k-a3LRHuMitdKIJcdv8WfLPT4RQO7MuoJSuU7CZAS-01L8riB-uXQZjtTu-XVkTewbdJZpnzVIz0ZNM7J31bEDMnsfI9zHoqxTGUQxLiOVHjNXjmvWz1Dmv-h8O3WUyEZCJY497Q4MlfgIukkysIC_jEPLtykyw-LvHx93e8wzSYpntdNxCC5F2X7BjqdlpEHeZP3oLPuqvMDAxPQv2WnwClmdygqGc70XweCm1lsERn0Q9bzZ6wqLUl9Fz"/>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-40"></div>
            </div>
            <div className="glass-card p-6 rounded-lg -mt-20 mx-4 shadow-2xl relative z-10 border border-white/5 group-hover:border-primary/20 transition-colors">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Masterpiece</p>
              <h3 className="font-headline text-2xl text-on-surface mb-1">Calacatta Oro</h3>
              <p className="font-label text-[11px] text-secondary tracking-widest uppercase mb-6">Polished High Gloss</p>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleViewDetails('Calacatta Oro')}
                  className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface border border-outline-variant/30 rounded-lg active:scale-95 transition-all hover:bg-surface-bright"
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleGetQuote('Calacatta Oro')}
                  className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary bg-primary rounded-lg active:scale-95 transition-all hover:bg-primary-fixed-dim shadow-lg shadow-primary/10"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category: Imported Marble */}
      <section className="mb-24 md:mb-32">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="font-headline text-2xl md:text-3xl text-on-surface">Imported Stone</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-outline-variant/40 to-transparent"></div>
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">Series 02</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-video overflow-hidden rounded-lg bg-surface-container relative">
              <img className="w-full h-full object-cover grayscale-0" alt="Brazilian Quartzite" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3wioCRiT82xd4qfuJdWwKhtwp8dpxbRL4Uss2Lc427pJQ1fExhibz-yjxgFZrwTfujdNkfb3LGRebE4mzBXwsLxyBW3cVgmNiuL4rmhjn_mnBqcDYSexSRKF3svP1ORK9nr8tgZUHYaa-DYqzkppDgfuoEznbGj0mtDu1C4nyrpfVOAuqg9kmglg7IWb-XrS4r3MmactkZhGE7Rjaymgm6RpLR8jGuQxtqkgBTsTz4gyCz6AvKHn8kJizvsGZuWUJZ41cnwHQxPsd"/>
              <div className="absolute inset-0 bg-zinc-950/10"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 glass-card p-6 sm:p-8 rounded-lg max-w-[200px] sm:max-w-xs shadow-2xl border border-primary/10">
              <h3 className="font-headline text-xl sm:text-3xl text-primary mb-2">Brazilian Quartzite</h3>
              <p className="font-body text-secondary text-xs sm:text-sm leading-relaxed mb-4">Unmatched durability meets ethereal aesthetics.</p>
              <p className="font-label text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-on-surface">Available in Leather Finish</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="lg:pl-12 order-1 lg:order-2"
          >
            <div className="group relative flex flex-col max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low mb-6 relative">
                <img className="w-full h-full object-cover grayscale-0" alt="Turkish Travertine" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABebTfZ5E-U8Jj-wlwB1lRCzbsxwSleI7Ta9kO_sMFdTfqTI1BMb6nOiAfBVzqq9JOEZCpcSr9NKG_912Mi3fpuRVMM0gwhWxnKCuy3rEQ3Nfe3LMbsXi9u61ZZ-NkocIxRISVlQStmMbOUhLiLncv-HwDaiWuj-9KwLrXjLzjZp2UJOhKMAzwOdDbbDtsg8UiwIRJuLyweSwUjMGCUMhG9OIFVPHWPqWJdp32u0gRwb5BSCfMkI6RWO2rw-_1tPFkz87L7b1lrNDA"/>
              </div>
              <div className="glass-card p-6 rounded-lg -mt-20 mx-4 shadow-2xl relative z-10 border border-white/5 transition-all group-hover:shadow-primary/5">
                <h3 className="font-headline text-2xl text-on-surface mb-1">Turkish Travertine</h3>
                <p className="font-label text-[11px] text-secondary tracking-widest uppercase mb-6">Cross Cut / Vein Cut</p>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => handleViewDetails('Turkish Travertine')}
                    className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface border border-outline-variant/30 rounded-lg active:scale-95 transition-all hover:bg-surface-bright"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleGetQuote('Turkish Travertine')}
                    className="w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary bg-primary rounded-lg active:scale-95 transition-all hover:bg-primary-fixed-dim shadow-lg shadow-primary/10"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category: Granite */}
      <section>
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="font-headline text-3xl text-on-surface">Granite</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-outline-variant/40 to-transparent"></div>
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">Series 03</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Black Galaxy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="relative group h-[500px] overflow-hidden rounded-lg"
          >
            <img className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000" alt="Black Galaxy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAMtiCRKA4iTccVd1LDg3AV_i0t2wSjAFWcBnzjhi4LknFLNLLYABU-WgmA9N_gNwMDWbjozcGC_SmuByXO6aIEW6teTeAxZjPjv7QnV4H5C1UWc1H4JADJEHbbcF2zNDQN1u8-56l7Oa4LLFR3M_QYFpUQWtRaoWIPp_g6FC3hRPQIeDx4_YuUiYAbtCS4tJ8P7yWOGXlH4z7ov91OfyGWQ-D7bc6eS6Fdz1UuL9vFmTI9e7GFERXpRuwk3X0LHFpp0mHEp8NZj_v"/>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent p-12 flex flex-col justify-end">
              <p className="font-label text-[10px] uppercase tracking-[0.5em] text-primary mb-4">The Obsidian Series</p>
              <h3 className="font-headline text-4xl text-on-surface mb-2">Black Galaxy</h3>
              <p className="font-body text-secondary mb-6 max-w-sm">Deep obsidian depths speckled with molten gold copper flakes. Pure resilience.</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => handleViewDetails('Black Galaxy')}
                  className="px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary bg-primary rounded-lg"
                >
                  Explore
                </button>
                <button 
                  onClick={() => handleGetQuote('Black Galaxy')}
                  className="px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Samples
                </button>
              </div>
            </div>
          </motion.div>

          {/* Absolute White */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="relative group h-[500px] overflow-hidden rounded-lg"
          >
            <img className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000" alt="Absolute White" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuUlYs8l3zMFvocQ0G3Xqlej0pMv7emY6lo9b3Mgzbkj3zwMDPvl-okm2sWmTVMm0p9XbnuHbLMievY1V3lISAXgRE7oNN_VYV5Hqf7Y7Sl_-zO66CgL4WALYwgYY9qSBZBiNiYQhmOmjL8wP7neywenayBKuAnPxVkJ6riL5YvOMwQzcIl2YHBsBlmzsE8LBstiNr_5J5frp51XVIzyVsIf-KdvHFKtLEe9mxjpf1EGANA7BSN_-AR-4qJ8eYJqYc-w_m7B9zo2kr"/>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent p-12 flex flex-col justify-end">
              <p className="font-label text-[10px] uppercase tracking-[0.5em] text-primary mb-4">Monochrome Edition</p>
              <h3 className="font-headline text-4xl text-on-surface mb-2">Absolute White</h3>
              <p className="font-body text-secondary mb-6 max-w-sm">A monolithic presence of pure alpine brilliance. Perfect for minimalist canvases.</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => handleViewDetails('Absolute White')}
                  className="px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary bg-primary rounded-lg"
                >
                  Explore
                </button>
                <button 
                  onClick={() => handleGetQuote('Absolute White')}
                  className="px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                >
                  Samples
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
