import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alex Resurreccion. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Designed for excellence. Crafted with quality.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
