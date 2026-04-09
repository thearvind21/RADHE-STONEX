import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import heroImage from "../assets/hero-marble.jpg";

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
            fetchpriority="high"
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

      {/* Featured Collections */}
      <section className="py-20 md:py-32 px-6 md:px-8 bg-background">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="container mx-auto mb-16 md:mb-20 text-center max-w-[1440px]"
        >
          <p className="text-primary font-label text-xs tracking-[0.4em] uppercase mb-4">The Selection</p>
          <h2 className="font-headline text-4xl md:text-6xl text-on-surface">Featured Collections</h2>
        </motion.div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1440px]">
          {[
            {
              title: "Italian Marble",
              desc: "Directly sourced from the heart of Carrara and Tuscany.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM7bN9-kODpul6rGaD8hdjvtiCf74A1kL78Jd6xZcCSgyI3idC9Qr58p_MAJizGwqTeFcPdVhzOd0BbzyBTYy5YatsKm2stncycepTkb7o7rnwTMhWgCGx0RJXw1eiePSENHRqFMyiADcN2cEKDYwRii-EGh74JZ7XtEHL_lqenjCGVSDSXkVnqwRZLRp31I0YaEv7zzAIwO5CXuGoCltpb-cKRx85lsb3_XMvuJJH1EAbrYbWk635qWhuwk2YKRTYNfqRiGfV1PZE",
              offset: false
            },
            {
              title: "Imported Marble",
              desc: "Global treasures from Brazil, Spain, and Turkey.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE79SYmdIuqzWRyzhJyjSH8HUf-UolmQm4CNvcPBP0KB_xrQUgghzZojDmQFvr7-3_G4hUEe2Jib_kcVtxqE1ZOlr4IraUq_IFbv2B58EGRWjcl4RVrNf6Kc5NvSpOpJo6ayD4QUvGY2CMlF5cu75uqOSEKYa4VHitk6p3oYjt4to38bx01dKnmk0rqWrKEyKdBI9G9PpCfp3QbTdaj_AunEAPqUGkYakBNBOC3k9Sdfg3WaHqI8CDSddoldHnwZz_r8hudE3q0cRS",
              offset: true
            },
            {
              title: "Granite",
              desc: "The pinnacle of strength and industrial elegance.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe7vFAqsABvQmNjTF8N_vWC7g2M1na4wahAvKqAyOfuI2urxSQ1b678gz6AzM9GCAov5RbPisNkAexWjNmCJBPUkXBKgKW7pKGB-dM2LWPcYtsZaLIpJGB3D8BWJa1HLl8VpWFqUe3u3QrG2Pu0vMwznmpGBcQtRcR7B55e70djeDLDIJX0t28N4lD4CyGQjlnB0IPXgxqOPwjMgbjTOMxsmnWnCsEQRRxDzAAo9m3MGitUsh39xfCjoXAQkOVLDmy2Kh5x4kkXoAI",
              offset: false
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
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-95 contrast-105" 
                alt={item.title} 
                src={item.img} 
              />
              {/* Spotlight Effect (Top) */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              {/* Depth Gradient (Bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              
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

      {/* Luxury Highlight Section */}
      <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/20 -z-10"></div>
              <img className="w-full rounded-none shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Interior designer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUGU6-xDV_kI8rkzeot8MiQ4mOKLP6IgPCNOIUBLllKBWH9739YcipvIHpTtxxCKwOCw1mXgRTq_tJTwg-lu3EEIwns_3gEN2b6U02e5-7ZftiEH5VrCLw7hPPDkj394ynEgv9VQL6ixS1zz0xSBRgjT59ZwvrUsHJ5lE8wbrNk0yRSJ_M31rz4DOtOZXmrDm1UWgvYJJpNne7sS1V94UwOSSRDkDGjFVq5MYQeC0AHpfrWMprMjgceSFNMrqxfWbaNgQZO6eubg2q" />
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="space-y-12"
            >
              <h2 className="font-headline text-4xl md:text-5xl leading-tight text-on-surface">The Anatomy of <span className="text-primary italic">Excellence</span></h2>
              <div className="space-y-10">
                {[
                  { num: "01", title: "Handpicked Global Collection", desc: "Our curators travel the globe to select slabs that possess unique character and exceptional mineral integrity." },
                  { num: "02", title: "Premium Quality Assurance", desc: "Each stone undergoes a rigorous 7-step inspection for tensile strength, veining consistency, and polish depth." },
                  { num: "03", title: "Direct from Quarry to You", desc: "By maintaining direct quarry relationships, we ensure uncompromised authenticity and competitive exclusivity." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <span className="text-primary font-headline text-4xl opacity-30 group-hover:opacity-100 transition-opacity">{item.num}</span>
                    <div>
                      <h4 className="font-headline text-xl text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="bg-surface-container-high relative overflow-hidden p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>electric_bolt</span>
                <p className="text-primary font-label text-xs tracking-[0.3em] uppercase">Limited Availability</p>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl text-on-surface">Book Your Slabs Today</h2>
              <p className="text-on-surface-variant font-light">Exclusive Italian lot arriving this week. Limited stock available.</p>
            </div>
            <div className="relative z-10">
              <button className="group/btn bg-primary text-on-primary px-12 py-5 rounded font-label text-sm tracking-[0.2em] uppercase flex items-center gap-4 hover:bg-primary-fixed-dim transition-all">
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
