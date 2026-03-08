import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import hero1 from '@/assets/brand-association.jpg';
import hero2 from '@/assets/brand-association.jpg';
import hero3 from '@/assets/brand-association.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: hero1,
    headline: 'CAR-O-BAR –\nPowered by Demigod House',
    subheading: 'A premier ultra-luxury car exhibition for global manufacturers, high-net-worth collectors, farming solutions, sustainable technologies, and the future of agri-business, all in one place.',
  },
  {
    image: hero2,
    headline: 'Entrepreneurship Forum 2025 –\nPowered by Demigod House',
    subheading: 'Demigod House is proud to host the upcoming Entrepreneurship Forum – a platform for innovators, dreamers, and future leaders.',
  },
  {
    image: hero3,
    headline: 'Agro Tech 2025 –\nPowered by Demigod House',
    subheading: 'Demigod House brings you Agro Tech 2025 — a celebration of innovation in agriculture. Discover smart farming solutions, sustainable technologies, and the future of agri-business, all in one place.',
  },
  {
    image: hero3,
    headline: 'Demigod Fighting Cub (DFC) –\nRise of the Celestial Beast',
    subheading: 'Enter a mythical arena where divine power meets primal fury. In DFC, train your cub, master ancient powers, and battle to become a true demigod.',
  },
];

const EventGallery = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const isAnimating = useRef(false);

  const animateSlide = useCallback((index: number) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => { isAnimating.current = false; },
    });

    // Fade out all slides
    slideRefs.current.forEach((slide, i) => {
      if (i !== index && slide) {
        tl.to(slide, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 0);
      }
    });

    const activeSlide = slideRefs.current[index];
    const activeText = textRefs.current[index];

    if (activeSlide) {
      // Background zoom-out effect
      const img = activeSlide.querySelector('img');
      if (img) {
        gsap.set(img, { scale: 1.2 });
        tl.to(img, { scale: 1, duration: 6, ease: 'power1.out' }, 0);
      }
      tl.to(activeSlide, { opacity: 1, duration: 1, ease: 'power2.inOut' }, 0);
    }

    if (activeText) {
      const heading = activeText.querySelector('h1');
      const sub = activeText.querySelector('p');
      const btn = activeText.querySelector('.hero-btn');

      if (heading) {
        // SplitText-like stagger on words
        const words = heading.querySelectorAll('.word');
        tl.fromTo(
          words,
          { y: 80, opacity: 0, rotateX: 20 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.12, ease: 'power3.out' },
          0.3
        );
      }
      if (sub) {
        tl.fromTo(sub, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.8);
      }
      if (btn) {
        tl.fromTo(btn, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 1.1);
      }
    }
  }, []);

  useEffect(() => {
    animateSlide(0);
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length;
        return next;
      });
    }, 7000);
    return () => clearInterval(timerRef.current);
  }, [animateSlide]);

  useEffect(() => {
    animateSlide(current);
  }, [current, animateSlide]);

  const goTo = (dir: number) => {
    if (isAnimating.current) return;
    clearInterval(timerRef.current);
    setCurrent(prev => (prev + dir + slides.length) % slides.length);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 7000);
  };

  const renderWords = (text: string) =>
    text.split('\n').map((line, li) => (
      <span key={li} className="block">
        {line.split(' ').map((word, wi) => (
          <span key={wi} className="word inline-block mr-[0.3em]" style={{ perspective: '600px' }}>
            {word}
          </span>
        ))}
      </span>
    ));

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Floating particles */}
      <Particles />

      {slides.map((slide, i) => (
        <div
          key={i}
          ref={el => { slideRefs.current[i] = el; }}
          className="absolute inset-0"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={`Hero slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
      ))}

      {/* Text content */}
      {slides.map((slide, i) => (
        <div
          key={`text-${i}`}
          ref={el => { textRefs.current[i] = el; }}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10 ${
            i === current ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <h1 className="heading-xl text-foreground mb-6">
            {renderWords(slide.headline)}
          </h1>
          <p className="body-lg max-w-xl mb-10 opacity-0">{slide.subheading}</p>
          <div className="hero-btn opacity-0">
            <button className="btn-primary">Explore Events</button>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={() => goTo(-1)}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-primary/30 text-primary/60 hover:text-primary hover:border-primary transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => goTo(1)}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center border border-primary/30 text-primary/60 hover:text-primary hover:border-primary transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              clearInterval(timerRef.current);
              setCurrent(i);
            }}
            className={`h-[2px] transition-all duration-500 ${
              i === current ? 'w-10 bg-primary' : 'w-6 bg-foreground/20'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// Floating particles component
const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(42, 78%, 55%, ${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[5] pointer-events-none" />;
};

export default EventGallery;
