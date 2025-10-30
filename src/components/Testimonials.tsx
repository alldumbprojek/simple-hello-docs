import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pengusaha",
    text: "Rasa Nusantara adalah restoran favorit keluarga kami! Setiap kali berkunjung, kami selalu dimanjakan dengan cita rasa autentik yang luar biasa. Rendangnya juara!",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    role: "Food Blogger",
    text: "Sebagai food blogger, saya sudah mencoba banyak restoran Indonesia. Rasa Nusantara berhasil memadukan tradisi dengan presentasi modern yang memukau. Highly recommended!",
    rating: 5,
  },
  {
    name: "Andi Wijaya",
    role: "Chef Professional",
    text: "Kualitas bahan baku dan teknik memasak di sini sangat profesional. Bumbu rempahnya meresap sempurna. Tempat yang tepat untuk merasakan Indonesia yang sesungguhnya.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-0.5 bg-primary inline-block" />
            Testimoni
            <span className="w-8 h-0.5 bg-primary inline-block" />
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Kata <span className="text-gradient-gold">Mereka</span>
          </h2>
          <p className="text-muted-foreground">
            Pengalaman nyata dari pelanggan setia Rasa Nusantara
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto animate-float">
          <Card className="premium-card p-8 md:p-12 shadow-premium hover:shadow-gold-glow transition-all duration-700 border-primary/10 relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/20 text-6xl md:text-7xl font-serif animate-pulse-slow">"</div>
            <div className="absolute bottom-8 right-8 text-primary/20 text-6xl md:text-7xl font-serif rotate-180 animate-pulse-slow" style={{ animationDelay: '1s' }}>"</div>
            
            <div className="relative z-10 space-y-6">
              {/* Stars */}
              <div className="flex gap-1 justify-center animate-scale-in">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 fill-primary text-primary animate-glow hover:scale-125 transition-transform cursor-pointer" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-2xl text-center leading-relaxed text-foreground italic px-4">
                {testimonials[currentIndex].text}
              </p>

              {/* Author */}
              <div className="text-center pt-4">
                <div className="glass px-6 py-4 rounded-xl inline-block">
                  <p className="font-bold text-xl text-gradient-gold mb-1">{testimonials[currentIndex].name}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 hover:bg-primary/70 ${
                  index === currentIndex ? "w-12 bg-primary shadow-gold-glow" : "w-2 bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
