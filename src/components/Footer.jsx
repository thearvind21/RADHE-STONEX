import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-amber-200 w-full py-20 px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
      <div className="space-y-8">
        <h2 className="text-lg font-headline text-stone-100 uppercase tracking-[0.2em]">RADHE STONEX</h2>
        <p className="font-label text-[10px] tracking-[0.15em] uppercase text-stone-500 max-w-xs leading-relaxed">
          Transforming residential and commercial spaces with the world's most exquisite stones.
        </p>
        <div className="flex gap-6">
          <a className="text-stone-500 hover:text-stone-300 transition-all opacity-80 hover:opacity-100" href="#">
            <span className="material-symbols-outlined">public</span>
          </a>
          <a className="text-stone-500 hover:text-stone-300 transition-all opacity-80 hover:opacity-100" href="#">
            <span className="material-symbols-outlined">alternate_email</span>
          </a>
          <a className="text-stone-500 hover:text-stone-300 transition-all opacity-80 hover:opacity-100" href="#">
            <span className="material-symbols-outlined">call</span>
          </a>
        </div>
      </div>
      <div className="space-y-12 md:text-right">
        <nav className="flex flex-wrap md:justify-end gap-x-12 gap-y-4">
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-300 transition-all" to="/products">Collections</Link>
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-300 transition-all" to="/about">Our Quarry</Link>
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-300 transition-all" to="/about">Sustainability</Link>
          <Link className="font-label text-[10px] tracking-[0.15em] uppercase text-stone-500 hover:text-stone-300 transition-all" to="/contact">Contact</Link>
        </nav>
        <p className="font-label text-[10px] tracking-[0.15em] uppercase text-stone-500">
          © 2024 RADHE STONEX. ARCHITECTURAL PERMANENCE.
        </p>
      </div>
    </footer>
  );
}
