import { Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-primary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl font-bold text-gradient-gold mb-2 hover:scale-105 transition-transform cursor-pointer">
              Rasa Nusantara
            </h3>
            <p className="text-muted-foreground text-sm">Cita Rasa Autentik Indonesia</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
          </div>

          {/* Social Media */}
          <div className="flex gap-4 animate-scale-in">
            <a
              href="https://instagram.com/rasanusantara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass hover:glass-dark flex items-center justify-center transition-all duration-500 group hover-lift shadow-card hover:shadow-gold"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary group-hover:scale-125 group-hover:animate-pulse transition-transform" />
            </a>
            <a
              href="https://facebook.com/rasanusantara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass hover:glass-dark flex items-center justify-center transition-all duration-500 group hover-lift shadow-card hover:shadow-gold"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary group-hover:scale-125 group-hover:animate-pulse transition-transform" />
            </a>
            <a
              href="https://twitter.com/rasanusantara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass hover:glass-dark flex items-center justify-center transition-all duration-500 group hover-lift shadow-card hover:shadow-gold"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-primary group-hover:scale-125 group-hover:animate-pulse transition-transform" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm animate-slide-up">
            <a href="#about" className="hover:text-primary transition-all duration-300 relative group">
              Tentang
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu" className="hover:text-primary transition-all duration-300 relative group">
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#gallery" className="hover:text-primary transition-all duration-300 relative group">
              Galeri
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-primary transition-all duration-300 relative group">
              Kontak
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground border-t border-border/30 pt-6 w-full">
            <p className="hover:text-primary transition-colors duration-300">&copy; {currentYear} Rasa Nusantara. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
