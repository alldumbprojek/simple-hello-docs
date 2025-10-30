import { Instagram, Facebook, Twitter } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.children;
      if (elements) {
        gsap.set(elements, { y: 30, opacity: 0 });
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-secondary text-secondary-foreground py-8 md:py-12 border-t border-primary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={contentRef} className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gradient-gold mb-2 hover:scale-105 transition-transform cursor-pointer">
              Rasa Nusantara
            </h3>
            <p className="text-muted-foreground text-sm">Cita Rasa Autentik Indonesia</p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
          </div>

          {/* Social Media */}
          <div className="flex gap-3 md:gap-4">
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
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
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
