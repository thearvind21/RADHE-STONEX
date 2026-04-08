import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/919829078191" 
      target="_blank" 
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center w-14 h-14 bg-surface-container-high/80 backdrop-blur-xl border border-outline-variant/30 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      <MessageCircle size={28} className="text-amber-200 group-hover:text-primary transition-colors duration-300" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-surface-container-highest border border-outline-variant/20 rounded text-on-surface font-label text-[10px] tracking-widest uppercase opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
        Chat with us
      </div>
    </a>
  );
}
