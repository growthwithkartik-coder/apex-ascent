import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PowerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    // Gold divider grows from center
    if (dividerRef.current) {
      tl.fromTo(dividerRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power3.out' }, 0);
    }
    // Heading fade up
    if (headingRef.current) {
      tl.fromTo(headingRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, 0.4);
    }
    // Button fade + glow pulse
    if (btnRef.current) {
      tl.fromTo(btnRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }, 0.8);
      // Subtle glow pulse
      gsap.to(btnRef.current, {
        boxShadow: '0 0 40px hsla(42, 78%, 55%, 0.4), 0 0 80px hsla(42, 78%, 55%, 0.1)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div ref={dividerRef} className="gold-divider w-32 mx-auto origin-center" />
        <h2 ref={headingRef} className="heading-lg text-foreground">
          The Power of<br /><span className="text-gold-gradient">Presence</span>
        </h2>
        <p className="body-lg max-w-lg mx-auto">
          In a world of noise, Empire creates silence — the kind that commands attention, inspires awe, and builds legacy.
        </p>
        <button ref={btnRef} className="btn-primary">Join The Empire</button>
      </div>
    </section>
  );
};

export default PowerSection;
