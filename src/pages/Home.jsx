import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import heroImage from "../assets/hero-marble.jpg";
import italianMarbleImg from "../assets/collections/italian-marble-premium.png";
import importedMarbleImg from "../assets/collections/imported-marble-premium.png";
import graniteImg from "../assets/collections/granite-premium.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const navigate = useNavigate();
  return (
    <main>
      {/* Cinematic Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-0 bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-60 brightness-75 scale-105" 
            alt="Close-up of premium Italian Calacatta marble with dramatic grey and gold veins" 
            src={heroImage}
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-6 md:space-y-0"
          >
            <div className="inline-block mb-6 px-4 py-1 border border-primary/20 rounded-full bg-surface-container-low/70 backdrop-blur-xl">
              <p className="font-label text-[10px] tracking-[0.3em] uppercase text-primary">The Obsidian Editorial 2024</p>
            </div>
            
            <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight text-white">
              Imported Italian Marble <br/>
              <span className="italic font-normal bg-gradient-to-br from-[#e9c349] to-[#c5a12a] bg-clip-text text-transparent">That Defines Luxury Living</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
              <button
                onClick={() => navigate('/products')}
                className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label font-bold uppercase tracking-widest text-xs hover:bg-primary-container transition-all active:scale-95 shadow-xl shadow-primary/10"
              >
                Explore Collection
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-surface-container-low/40 backdrop-blur-md border border-outline-variant/30 text-on-surface px-10 py-4 rounded-lg font-label font-bold uppercase tracking-widest text-xs hover:bg-surface-container-high transition-all active:scale-95"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-12 hidden lg:flex items-center gap-4 text-on-surface-variant"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-right">Scroll to explore</span>
          <div className="w-[1px] h-24 bg-primary/30"></div>
        </motion.div>
      </section>

      {/* Trust Signals Section */}
      <section className="bg-surface-container-low py-12 md:py-20 px-6 md:px-8 relative overflow-hidden">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 max-w-[1440px]"
        >
          <div className="flex items-center gap-6">
            <div className="flex gap-1 text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div>
              <p className="font-headline text-2xl text-on-surface">5.0 Rating</p>
              <p className="font-label text-xs tracking-widest text-on-surface-variant uppercase">Customer Satisfaction</p>
            </div>
          </div>
          <div className="hidden md:block h-16 w-px bg-outline-variant/30"></div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-4xl text-primary">architecture</span>
            <div>
              <p className="font-headline text-2xl text-on-surface">Preferred Choice</p>
              <p className="font-label text-xs tracking-widest text-on-surface-variant uppercase text-balance">Trusted by Architects & Builders</p>
            </div>
          </div>
          <div className="hidden md:block h-16 w-px bg-outline-variant/30"></div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-4xl text-primary">verified</span>
            <div>
              <p className="font-headline text-2xl text-on-surface">Zero Compromise</p>
              <p className="font-label text-xs tracking-widest text-on-surface-variant uppercase">Certified Quality Stones</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-16 px-4 md:py-24 md:px-8">
        <div className="container mx-auto mb-12 md:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <div className="space-y-4">
              <p className="text-primary font-label text-xs tracking-[0.3em] uppercase">Premium Slabs</p>
              <h2 className="font-headline text-3xl md:text-6xl leading-tight text-on-surface max-w-2xl">
                Handpicked <span className="italic">Earthbound</span> Treasures
              </h2>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1440px]">
          {[
            {
              title: "Italian Marble",
              desc: "Directly sourced from the heart of Carrara and Tuscany.",
              img: italianMarbleImg,
              offset: false,
              isPremiumAsset: true
            },
            {
              title: "Imported Marble",
              desc: "Global treasures from Brazil, Spain, and Turkey.",
              img: importedMarbleImg,
              offset: true,
              isPremiumAsset: true
            },
            {
              title: "Granite",
              desc: "The pinnacle of strength and industrial elegance.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7vFAqsABvQmNjTF8N_vWC7g2M1na4wahAvKqAyOfuI2urxSQ1b678gz6AzM9GCAov5RbPisNkAexWjNmCJBPUkXBKgKW7pKGB-dM2LWPcYtsZaLIpJGB3D8BWJa1HLl8VpWFqUe3u3QrG2Pu0vMwznmpGBcQtRcR7B55e70djeDLDIJX0t28N4lD4CyGQjlnB0IPXgxqOPwjMgbjTOMxsmnWnCsEQRRxDzAAo9m3MGitUsh39xfCjoXAQkOVLDmy2Kh5x4kkXoAI",
              offset: false,
              isPremiumAsset: false
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`group relative overflow-hidden rounded-lg aspect-[3/4] ${item.offset ? 'lg:-translate-y-12' : ''}`}
            >
              {/* Layer 1: Photographic Asset */}
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={item.title} 
                src={item.img} 
              />
              
              {/* Layer 2: Legacy Lighting (Only for non-premium assets like the original Granite reference) */}
              {!item.isPremiumAsset && (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2)_0%,_transparent_65%)] mix-blend-soft-light z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent mix-blend-soft-light z-10 pointer-events-none"></div>
                </>
              )}

              {/* Layer 3: Natural Depth Gradient (Bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              
              {/* Layer 4: Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform z-20">
                <div className="bg-surface-container/60 backdrop-blur-xl p-6 sm:p-8 border border-outline-variant/20">
                  <h3 className="font-headline text-2xl sm:text-3xl text-on-surface mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant text-xs sm:text-sm mb-4 sm:mb-6 font-light">{item.desc}</p>
                  <Link className="text-primary font-label text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all" to="/products">
                    View Selection <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:py-32 md:px-8 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <h2 className="font-headline text-3xl md:text-5xl leading-tight md:leading-normal text-on-surface">
                Legacy of <span className="text-primary italic">Craftsmanship</span>
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg font-light leading-relaxed max-w-xl">
                For over three decades, Radhe Stonex has been the vanguard of luxury marble in India. Our journey began with a single vision: to bring the world's most exquisite earth-born treasures to your doorstep.
              </p>
              <img className="w-full rounded-none shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Interior designer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUGU6-xDV_kI8rkzeot8MiQ4mOKLP6IgPCNOIUBLllKBWH9739YcipvIHpTtxxCKwOCw1mXgRTq_tJTwg-lu3EEIwns_3gEN2b6U02e5-7ZftiEH5VrCLw7hPPDkj394ynEgv9VQL6ixS1zz0xSBRgjT59ZwvrUsHJ5lE8wbrNk0yRSJ_M31rz4DOtOZXmrDm1UWgvYJJpNne7sS1V94UwOSSRDkDGjFVq5MYQeC0AHpfrWMprMjgceSFNMrqxfWbaNgQZO6eubg2q" />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="space-y-8 md:space-y-12"
            >
              <div className="space-y-8 md:space-y-10">
                {[
                  { num: "01", title: "Handpicked Global Collection", desc: "Our curators travel the globe to select slabs that possess unique character and exceptional mineral integrity." },
                  { num: "02", title: "Premium Quality Assurance", desc: "Each stone undergoes a rigorous 7-step inspection for tensile strength, veining consistency, and polish depth." },
                  { num: "03", title: "Direct from Quarry to You", desc: "By maintaining direct quarry relationships, we ensure uncompromised authenticity and competitive exclusivity." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 md:gap-8 group">
                    <span className="text-primary font-headline text-3xl md:text-4xl opacity-30 group-hover:opacity-100 transition-opacity">{item.num}</span>
                    <div>
                      <h4 className="font-headline text-lg md:text-xl text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 md:py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="bg-surface-container-high relative overflow-hidden p-8 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
                <p className="text-primary font-label text-xs tracking-[0.3em] uppercase">Limited Availability</p>
              </div>
              <h2 className="font-headline text-2xl md:text-5xl leading-tight text-on-surface">Book Your Slabs Today</h2>
              <p className="text-on-surface-variant font-light text-sm md:text-base">Exclusive Italian lot arriving this week. Limited stock available.</p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
              <button className="group/btn w-full md:w-auto bg-primary text-on-primary px-8 md:px-12 py-4 md:py-5 rounded font-label text-xs md:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-4 hover:bg-primary-fixed-dim transition-all">
                Check Availability
                <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
