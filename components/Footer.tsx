import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} The Saber Scribe. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for Dad
        </div>
        
        <div className="flex gap-6">
           {/* Social links placeholder */}
           <a href="#" className="text-muted-foreground hover:text-white transition-colors">Twitter</a>
           <a href="#" className="text-muted-foreground hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

