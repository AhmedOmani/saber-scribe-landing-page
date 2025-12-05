import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/20 rounded-lg">
                <Sparkles className="h-5 w-5 text-primary" />
            </div>
          <span className="font-bold text-xl tracking-tight">The Saber Scribe</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How it Works</Link>
          <a href="https://github.com/yourusername/the-saber-scribe" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">GitHub</a>
        </div>

        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-primary/25">
          Download Now
        </button>
      </div>
    </nav>
  );
}

