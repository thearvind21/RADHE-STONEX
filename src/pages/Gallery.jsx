import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Gallery() {
  return (
    <main className="pt-0 pb-24 md:pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[795px] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Marble Hallway" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOALZ9nWUm6kgptEu14ivZ11Lctikq5BzaQQ0KGZ7mx-TLckefOT8qw5G4GfYBWqzRIfAOmAARFHRLmsiKUGq9ULEW-0YDhu2YVQD7QOsa6A8DpO1rqBW97X-OBpmIYPK03RaKDWPPXgE9pTxZ3Y4D_ygpERnbcRkDj76yKaRGC4KSMAPinWdriozOinQ5bMP6Y0hFcRG9kk9xiB_nx8upPSCr_ukAjbksO4Kr9C3t-oRKwcAw30kQS8lAGE7TTRXnmG_HcnF0VAv-"
          />
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-[2]"></div>
        </div>
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="relative z-10 text-center max-w-5xl"
        >
          <p className="font-label text-primary uppercase tracking-[0.5em] mb-4 text-[10px] md:text-sm">Radhe Stonex Curator Edition</p>
          <h1 className="font-headline text-5xl sm:text-6xl md:text-[8rem] leading-none tracking-tight text-on-surface mb-8">
            The Living <br/>
            <span className="italic font-normal text-primary pr-4 md:pr-0">Canvas</span>
          </h1>
          <div className="flex justify-center">
            <motion.div 
              initial={{ height: 0 }} animate={{ height: 60 }} md={{ height: 96 }} transition={{ duration: 1, delay: 0.5 }}
              className="w-px bg-gradient-to-b from-primary to-transparent"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Residential Masterpieces */}
      <section className="py-20 md:py-32 px-6 md:px-24 bg-surface max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <span className="font-label text-primary uppercase tracking-widest text-xs">Section 01 / Residential</span>
            <h2 className="font-headline text-4xl md:text-5xl mt-4 mb-6 leading-tight">Residential <br/>Masterpieces</h2>
            <p className="text-on-surface-variant max-w-md text-sm md:text-base">Transforming private sanctuaries into architectural statements through rare minerals and expert masonry.</p>
          </div>
          <div className="hidden lg:block h-px flex-1 bg-outline-variant/20 mx-12"></div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
            </button>
          </div>
        </motion.div>

        {/* Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[1060px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-8 group relative overflow-hidden rounded-lg bg-surface-container-low shadow-2xl min-h-[400px]"
          >
            <img alt="Modern Living Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADkigC9EY3lwdG8qIb_0zwetkiELG242a0bHMau0A21snhQODYZ8S8XojEpIacukE-iE-YgXYTCSCqyZ_HR6NZFjMmdDqBLPvvXB30zjxyxLFwn7ID8BmhymrC0ClQJWpQVt6XmYX7IZ3vEXq9GwatDaCrZPMcPv0gFvQ_AL3tsfUpWJrmR7C99eErOu5OKGUoRxqg63RrCtgZvj6Pa3FM8aGBjlcJvxvM0lJ3g6Qq9h78Xc0PGGmwramvoL8fYyJtRLl6n8qGDWOY"/>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
              <p className="font-headline text-xl sm:text-2xl text-shadow-premium">The Penthouse Suite</p>
              <p className="font-label text-[10px] tracking-widest text-primary uppercase mt-1">Calacatta Borghini</p>
            </div>
          </motion.div>
          
          <div className="col-span-1 md:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden rounded-lg bg-surface-container-low shadow-2xl min-h-[300px]"
            >
              <img alt="Luxury Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC61G1BN5MfluHZNRsd_qh-lhpAcWrOSWT9DvkpzM1xUGPD7TR6wdOHoHepZdVOFivs0AvidtWqQtQGIRupz8Xv-1hmPR98aWATJXwSFiUzL8W9XmRCxZaZZUwpC0yZIqZi-G7EVAMvZa0niUT_4uLIErVqIQVZ-KBPgMRjEKNX-OhOq8MzAG_a73nBA62fEhjHnaW2NEGQsyOfGzw2WBZBzft0pVHyEWEb2-r0lD9jdQayi-VWrg-UjLZJZaJiKnZu0C2aFopkVTpU"/>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <p className="font-headline text-lg sm:text-xl text-shadow-premium">Culinary Sanctuary</p>
                <p className="font-label text-[10px] tracking-widest text-primary uppercase mt-1">Nero Marquina</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative overflow-hidden rounded-lg bg-surface-container-low shadow-2xl min-h-[300px]"
            >
              <img alt="Bathroom Marble" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5gd6Jcw2wicnsK_HK4brs3MGbH49mKgf3JFLD3tr5zEA8Qfwb0aEwElGFhtwxIoPIQLoQSYvobo-gWIwDPCjaElHq0U6CGzwgn2kR01vdI0foKXrawQBvC4mQVTkCwl31kQxTVTC5xxT6uik3hWwZX6vBjbPpTgL9zvm-pzMVojj9psVx9KKlB7XbeUbsRXw5B47yVB-tHHPAEXJA7NDVGgHCR0YFkwjyoqTx0i5oHpgky8Nos09TMtJShrYXDAPTeEz9DtTYeaZM"/>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <p className="font-headline text-lg sm:text-xl text-shadow-premium">The Spa Retreat</p>
                <p className="font-label text-[10px] tracking-widest text-primary uppercase mt-1">Statuario Extra</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Transformation Section (Before & After) */}
      <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1440px]">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="font-label text-primary uppercase tracking-[0.3em] text-[10px] md:text-xs">Evolution of Space</span>
            <h2 className="font-headline text-3xl md:text-5xl mt-4">The Transformation</h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto group"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-surface-container-high rounded-xl overflow-hidden shadow-2xl">
              {/* Before */}
              <div className="relative h-[300px] md:h-[500px]">
                <img 
                  alt="Before Renovation" 
                  className="w-full h-full object-cover grayscale brightness-90 contrast-95 opacity-90" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpOKP62_Y8nEJnUN87tsv62lfaPHJMaeLOQZeR1rjQr_WBwR2OUK2gU1gKPbQ6UlwTe9DgIchGKbh4FM5sgfZ3DkPujkvM1DU45Js7WCaU6VHyilHj79x3bxRm6Kzio-G-PWlPHthLoGE8FFtSwseB2K3mdmoT_rN1K2-AGImckMCL8wtaoRc_deS5UA0TvwF5gjH6cnxR1lSZF2fEnlO5ZB8pAXdhvtP2BdX6hJ1J0xpkY5i8Hk5Q7sox2u3-AtF42vhyEMas5aCw"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                  <span className="font-label text-[9px] md:text-[10px] tracking-widest text-stone-300 uppercase">BEFORE: RAW SPACE</span>
                </div>
              </div>
              {/* After */}
              <div className="relative h-[300px] md:h-[500px] group/after overflow-hidden">
                <img 
                  alt="After Renovation" 
                  className="w-full h-full object-cover brightness-[1.15] contrast-[1.2] transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpww38gLMFoJL-Uy5sfH8dh23wG5ynE9vhlYKitH_Jhbq6sHbQa9negF4rZwXMswht_uLWqZo0vykwwAoATKnww8rENNi-6RGYRolFL1XBeH2hQM_FtK6ijVvty73M09RSE0-cIquAC0wDgfSuPSxnqLmjBl2qKNJO4TlrdXkpnZYgb9YMTJMigOBVG0tSx_xj6CTQFqzAKzPMPrmbvpwk_AuyapuHOZnAjr_NXaaLM9vFn4pIqiufvDEo0iBuc2ZflW6jdsNFNIDX"
                />
                
                {/* Precision Exposure Correction (Window Center) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.12)_0%,transparent_60%)] pointer-events-none mix-blend-multiply opacity-50"></div>
                
                {/* Subtle Luxury Vignette & Depth */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.1)_100%)] pointer-events-none"></div>

                {/* Floor Reflection Enhancement Layer */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none mix-blend-overlay"></div>

                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-primary px-5 py-2.5 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_20px_rgba(233,195,73,0.3)] border border-white/20">
                  <span className="font-label text-[9px] md:text-[10px] tracking-widest text-on-primary font-extrabold uppercase drop-shadow-md">AFTER: RADHE STONEX</span>
                </div>
              </div>
            </div>
            {/* Decorative Overlay Text */}
            <div className="absolute -bottom-10 -left-10 hidden lg:block">
              <span className="font-headline text-9xl text-white opacity-[0.03] select-none pointer-events-none">METAMORPHOSIS</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex flex-col md:flex-row justify-between max-w-6xl mx-auto items-center gap-8 border-t border-outline-variant/10 pt-12"
          >
            <div className="flex items-center gap-12">
              <div>
                <p className="text-3xl font-headline text-primary">140+</p>
                <p className="font-label text-[10px] tracking-widest opacity-60">PROJECTS COMPLETED</p>
              </div>
              <div>
                <p className="text-3xl font-headline text-primary">2,400</p>
                <p className="font-label text-[10px] tracking-widest opacity-60">SQ METERS INSTALLED</p>
              </div>
            </div>
            <button className="px-10 py-4 bg-primary text-on-primary font-label text-[10px] tracking-[0.2em] rounded-lg hover:bg-primary-container transition-all flex items-center gap-4">
              VIEW ALL CASE STUDIES
              <span className="material-symbols-outlined text-sm">north_east</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Grand Hospitality Section */}
      <section className="py-32 px-6 md:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden z-10 shadow-2xl">
              <img alt="Luxury Hotel Lobby" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzAP7dNrNmzD9um17-fvWCo-SKKDSGiceGswYhG3okT39kf4hZLZm86d6a9ZTHc-MXEfqMTWMo8LR_1EraSGzE4XERLizx51tn6ke3IgcvLQxTekhzgxrPeNk8Lbr7fu84Tipwlg2RhJPP9acrHqw8UhU8vw7Irsi0Uj7XOlEo5T1z4pc9XDkWIBElQIw24Ea-4Wz0okFsjKmvAqhHBQ5kBgSPatO_tpgxybxFnJ3RP601nkODzlX8JIDQhq4oY30-IWGDt3DGK-Fn"/>
            </div>
            {/* Overlapping Decorative Element */}
            <div className="absolute -top-12 -right-12 w-64 h-80 border border-primary/20 -z-0 hidden md:block"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="font-label text-primary uppercase tracking-widest text-xs">Section 02 / Commercial</span>
            <h2 className="font-headline text-5xl md:text-7xl mt-6 mb-8 leading-[1.1]">Grand <br/>Hospitality</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">Defining the world's most prestigious landmarks. From the grandeur of six-star hotel lobbies to the intimate sophistication of boutique lounges, our stone defines the essence of luxury hospitality.</p>
            <div className="space-y-6">
              {[
                { num: "01", title: "The Ritz Lobby Restoration", desc: "Dubai, UAE — 2023" },
                { num: "02", title: "Aman Resort Façade", desc: "Kyoto, Japan — 2022" },
                { num: "03", title: "Marriott Imperial Ballroom", desc: "London, UK — 2024" }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-start gap-6 group cursor-pointer mb-6">
                    <span className="font-headline text-primary text-2xl mt-1">{item.num}</span>
                    <div>
                      <h4 className="font-headline text-xl group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="font-label text-xs tracking-wide opacity-50 mt-1 uppercase">{item.desc}</p>
                    </div>
                  </div>
                  {idx < 2 && <div className="w-full h-px bg-outline-variant/10 mb-6"></div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-stone-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img alt="Stone Texture Background" className="w-full h-full object-cover grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7VBKYW8My_Go8dRzzgHywl9kikCVgPAoreMXbsvXjxOVfn4Kf7y0HuUAA747ZMEdonkfDdhWSq0JcBmXg29cJrITxDxXZyiP4vFgKjQGOvpQcyL-xt8uIlMoXcFb88LqqcsGriowbBj1WW1JGQkOihctvPQkSU_nPddLBSRoxRwahfPFijcdXyFL3c25wpqxvJp6RFXmB4PJEeIONRVwC23FSUlnX9rs95wf2GIWr9CApfN7KVmWW5Lood1JD1NO1wY1w_-iiyvdY"/>
        </div>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="relative z-10 px-6"
        >
          <h3 className="font-headline text-4xl md:text-6xl mb-8">Ready to carve your legacy?</h3>
          <p className="font-label text-xs tracking-[0.4em] uppercase mb-12 text-stone-400">CONSULT WITH OUR LEAD CURATORS</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/91XXXXXXXXXX?text=I%20would%20like%20to%20book%20a%20private%20showing', '_blank')}
              className="px-12 py-5 bg-primary text-on-primary font-bold rounded-lg hover:scale-105 transition-all shadow-xl"
            >
              BOOK A PRIVATE SHOWING
            </button>
            <button className="px-12 py-5 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all">
              DOWNLOAD PORTFOLIO
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
