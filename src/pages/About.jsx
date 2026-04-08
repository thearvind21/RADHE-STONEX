import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function About() {
  return (
    <main className="pt-0 overflow-hidden">
      {/* Hero: Our Heritage */}
      <section className="relative h-[600px] md:h-[751px] flex flex-col justify-end px-6 md:px-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Grand marble quarry" 
            className="w-full h-full object-cover grayscale-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtW-5C1RomSgF4kt2v30m6RQTYutbcg5QyJQvokrUxuW5qec7MQ7zoUjyzZ1P3Nhc2lKn-QlTdwXBBV0Ombp3tMxshcnL6PphJI6vg4RpshO4l0a6bhCzZKm5_2XsaVuwDi244EFslo-7_T6TX3fGM6XHptJNKZh3U6SwT4_43Oqx_IS-dVDVDKh2AYFK2vswlrlPARAG-T92sDgTEMXIcqHaZbh_RnwZt-t62P11-47TxM-_NjBckbVz-Y4gLgNoMB1Sp8dx2lZMD"
          />
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-[2]"></div>
        </div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative z-10 max-w-xl mx-auto md:mx-0"
        >
          <span className="font-label uppercase tracking-widest text-[10px] md:text-xs text-primary mb-4 block">Established in Kishangarh</span>
          <h2 className="font-headline italic text-4xl md:text-5xl tracking-tight text-white mb-6 leading-tight text-shadow-premium">Our Heritage</h2>
          <p className="font-body text-on-surface-variant leading-relaxed text-sm md:text-base mb-8 opacity-90">
            Born in the heart of India's marble industry, Radhe Stonex emerged from a vision to bring the world's most exquisite earth-born treasures to your spaces. Our journey began amidst the dust and grandeur of Kishangarh, where every slab tells a story of millions of years.
          </p>
          <div className="h-[1px] w-12 bg-primary"></div>
        </motion.div>
      </section>

      {/* Mission: The Art of Selection */}
      <section className="bg-surface-container-low py-20 md:py-24 px-6 md:px-8 relative max-w-[1440px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="mb-12 md:mb-16"
        >
          <span className="font-label uppercase tracking-widest text-xs text-primary mb-2 block">The Philosophy</span>
          <h2 className="font-headline italic text-3xl md:text-4xl tracking-tight text-white leading-tight">The Art of Selection</h2>
        </motion.div>
        
        {/* Bento-esque Grid for Mobile */}
        <div className="space-y-6 max-w-4xl mx-auto md:grid md:grid-cols-2 md:space-y-0 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}
            className="glass-panel p-6 md:p-8 rounded-lg border border-outline-variant/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>diamond</span>
              <h3 className="font-headline italic text-xl text-white">Hand-Selected Integrity</h3>
            </div>
            <p className="text-sm text-on-surface-variant font-body leading-relaxed">
              Our curators travel to remote quarries globally, personally inspecting the structural integrity and aesthetic vein patterns of every block before it enters our collection.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-panel p-6 md:p-8 rounded-lg border border-outline-variant/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>architecture</span>
              <h3 className="font-headline italic text-xl text-white">Artisan Precision</h3>
            </div>
            <p className="text-sm text-on-surface-variant font-body leading-relaxed">
              State-of-the-art Italian machinery meets generational craftsmanship. We process stone with a precision that honors its natural origin while ensuring architectural perfection.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-64 rounded-lg overflow-hidden md:col-span-2 mt-8 md:mt-0"
          >
            <img alt="Craftsman polishing marble" className="w-full h-full object-cover grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_lMHH41k5f1nc_zlOu5p3ctC4Jzwi6puCkrYJ6iNGnQXiu0uxuc3alzxOoOhuPWkS8epoySGHJCwZNU4QrH9Ypas8NosIHzkVoP2pGowiRvc6qAOYbhmu1pRgK8tni59RJFW9MfqZQ0MkHaVHawj_Kitzxih2PrwIBfanbnZ3QDEKl476MdkggHFazDheIWHhzH_RLkin5y-iim_-89WUdTUHV0jHWrTkTOwOx6ISo9vSNB_GHWWL7tiN5VWHSWr-iXffNiOmgD8o"/>
            <div className="absolute inset-0 bg-black/20 flex items-end p-6">
              <p className="font-headline italic text-white text-lg">CRAFTED BY HAND. GUIDED BY TRADITION.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-24 px-6 md:px-8 bg-surface text-center">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-md mx-auto"
        >
          <h2 className="font-headline italic text-2xl md:text-3xl text-white mb-4">Experience the Collection</h2>
          <p className="text-sm text-on-surface-variant mb-10 font-body">From the Carrara of Italy to the Statuario of our homeland, discover a world of stone.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/products" className="bg-primary text-on-primary py-4 px-8 rounded-lg font-label uppercase text-[10px] tracking-widest font-bold transition-transform active:scale-95 block w-full">
              View Collections
            </a>
            <a href="/contact" className="text-secondary py-4 px-8 rounded-lg font-label uppercase text-[10px] tracking-widest hover:text-white transition-colors block w-full border border-outline-variant/20 hover:border-primary/30">
              Contact an Artisan
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
