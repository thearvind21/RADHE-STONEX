import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Robust Product Data Mapper
const productsData = {
  'statuario-imperial': {
    name: 'Statuario Imperial',
    category: 'Heritage Selection',
    finish: 'Polished / Honed',
    size: 'Jumbo (320x190cm)',
    origin: 'Carrara, Italy',
    thickness: '18mm / 20mm',
    desc: 'The gold standard of luxury. Statuario Imperial is characterized by its brilliant white background and distinct, bold grey veining that creates dramatic, sophisticated patterns.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXtwJS6FuPR0meViY_FJhiMPTbFmzS2pPLe6KQp2v3V3Tl7Ntfd2ZO4RkpLqUbB4xrazNaMW1mELZldwDWc6Rj3JgeKc6r-Z7oH3dWaKrCkbuAoE4SKg7dEp7lKFWs-dvFgQxSJZuXxwTmA6LtL71E4u79d3BK6S0WiB7LPVX5Lp-E7zpXfVKDfb7AQfk01J6X-_4_k88l2P3L3yfcpk-g9V-uhJS1JgST8GQKA8jZeip5UUKKIcR-rT0ZWW2gFA32dF-2G9Klkarw'
  },
  'botticino-royal': {
    name: 'Botticino Royal',
    category: 'Classic Reserve',
    finish: 'Polished / Satin',
    size: 'Large (300x160cm)',
    origin: 'Brescia, Italy',
    thickness: '20mm / 30mm',
    desc: 'An iconic beige marble with delicate white veins. Botticino Royal offers a warm, timeless aesthetic that has defined European luxury for centuries.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRzNIyOnPTOZctm3Fk4csZuUt9DzRR7bA4tfILc4jxX_8TD-jzhXl2ZwpFHbanr3KhBw9ARBpbFls_bcBdesaYWvddmThCbMCcLjT2eHGEjyXL8WefQqA04emkfn8Kjwld6-BCXOKNdGoMMyqtzxKFrnDU-DvXaSVkrz82DRpAex6F6RF7YFiPbeyZOKmV_dOCJFbQLt5CZhz2uRqqh3wWysyPNHbwzxyh-Is7b_3Z7w1F6vidzbcl9JLAcUcA789C4y644e9_qk90'
  },
  'calacatta-oro': {
    name: 'Calacatta Oro',
    category: 'Masterpiece Series',
    finish: 'High Gloss Polished',
    size: 'Jumbo (330x200cm)',
    origin: 'Apuan Alps, Italy',
    thickness: '18mm / 20mm',
    desc: 'Rare and majestic. Calacatta Oro features a milky white field with honey-gold and warm grey veining, making it a favorite for signature interior statements.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzSUPMnh93i1eOfCHK2k-a3LRHuMitdKIJcdv8WfLPT4RQO7MuoJSuU7CZAS-01L8riB-uXQZjtTu-XVkTewbdJZpnzVIz0ZNM7J31bEDMnsfI9zHoqxTGUQxLiOVHjNXjmvWz1Dmv-h8O3WUyEZCJY497Q4MlfgIukkysIC_jEPLtykyw-LvHx93e8wzSYpntdNxCC5F2X7BjqdlpEHeZP3oLPuqvMDAxPQv2WnwClmdygqGc70XweCm1lsERn0Q9bzZ6wqLUl9Fz'
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Safety logic: Check if id exists
  if (!id) {
    return (
      <main className="min-h-screen pt-32 px-6 text-center">
        <h2 className="font-headline text-3xl mb-8">Product Not Found</h2>
        <button onClick={() => navigate('/products')} className="bg-primary px-8 py-3 text-on-primary">Back to Collection</button>
      </main>
    );
  }

  // Find product or fallback to a generic object
  const product = productsData[id] || {
    name: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: 'Architectural Grade',
    finish: 'Custom Options Available',
    size: 'Standard Sizing',
    origin: 'Global Sourcing',
    thickness: '18mm / 20mm',
    desc: 'Exquisite natural stone sourced from the world\'s most prestigious quarries, offering unmatched durability and timeless beauty.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXtwJS6FuPR0meViY_FJhiMPTbFmzS2pPLe6KQp2v3V3Tl7Ntfd2ZO4RkpLqUbB4xrazNaMW1mELZldwDWc6Rj3JgeKc6r-Z7oH3dWaKrCkbuAoE4SKg7dEp7lKFWs-dvFgQxSJZuXxwTmA6LtL71E4u79d3BK6S0WiB7LPVX5Lp-E7zpXfVKDfb7AQfk01J6X-_4_k88l2P3L3yfcpk-g9V-uhJS1JgST8GQKA8jZeip5UUKKIcR-rT0ZWW2gFA32dF-2G9Klkarw'
  };

  const handleGetQuote = () => {
    const message = encodeURIComponent(`I am interested in ${product.name}`);
    window.open(`https://wa.me/919829078191?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-background text-on-surface pt-32 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Product Image Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low shadow-2xl relative">
            <img
              className="w-full h-full object-cover grayscale-0 transition-transform duration-1000"
              alt={product.name}
              src={product.img}
            />
            {/* Subtle Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
          <div className="absolute -top-4 -left-4 w-32 h-32 border-t border-l border-primary/20 -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-primary/20 -z-10"></div>
        </motion.div>

        {/* Product Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:pt-12"
        >
          <span className="font-label text-primary text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
            {product.category}
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8">
            {product.name}
          </h1>

          <div className="h-[1px] w-48 bg-primary/40 mb-10"></div>

          <p className="font-body text-secondary text-lg leading-relaxed max-w-xl font-light mb-12 opacity-90">
            {product.desc}
          </p>

          <div className="grid grid-cols-2 gap-y-10 gap-x-8 mb-16">
            <div>
              <p className="font-label text-[10px] text-stone-500 uppercase tracking-widest mb-3">Available Finishes</p>
              <p className="font-headline text-lg md:text-xl text-on-surface">{product.finish}</p>
            </div>
            <div>
              <p className="font-label text-[10px] text-stone-500 uppercase tracking-widest mb-3">Slab Dimension</p>
              <p className="font-headline text-lg md:text-xl text-on-surface">{product.size}</p>
            </div>
            <div>
              <p className="font-label text-[10px] text-stone-500 uppercase tracking-widest mb-3">Quarry Origin</p>
              <p className="font-headline text-lg md:text-xl text-on-surface">{product.origin}</p>
            </div>
            <div>
              <p className="font-label text-[10px] text-stone-500 uppercase tracking-widest mb-3">Architectural Thickness</p>
              <p className="font-headline text-lg md:text-xl text-on-surface">{product.thickness}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={handleGetQuote}
              className="bg-primary text-on-primary px-12 py-5 rounded font-label text-sm tracking-[0.2em] uppercase hover:bg-primary-fixed-dim transition-all shadow-xl shadow-primary/10 active:scale-95"
            >
              Request Quote
            </button>
            <button
              onClick={() => navigate('/products')}
              className="px-12 py-5 border border-outline-variant/30 text-on-surface rounded font-label text-sm tracking-[0.2em] uppercase hover:bg-surface-bright transition-all active:scale-95"
            >
              Back to Collection
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
