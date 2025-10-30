import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface CountUpProps {
  to: number;
  duration?: number;
  className?: string;
}

export default function CountUp({ to, duration = 2, className = '' }: CountUpProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startValue = 0;
    const endValue = to;
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);

      element.textContent = currentValue.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Use GSAP for more precise animation
    gsap.fromTo(element,
      { innerText: 0 },
      {
        innerText: endValue,
        duration: duration,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate: function() {
          element.textContent = Math.floor(this.targets()[0].innerText).toString();
        }
      }
    );
  }, [to, duration]);

  return <span ref={elementRef} className={className}>0</span>;
}
