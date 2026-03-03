import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitSectionProps {
  image: string;
  heading: string;
  description: string;
  cta: string;
  reverse?: boolean;
  id?: string;
}

const SplitSection = ({ image, heading, description, cta, reverse = false, id }: SplitSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgEl = imageRef.current;
    const textEl = textRef.current;
    if (!section || !imgEl || !textEl) return;

    // Parallax on image
    gsap.to(imgEl.querySelector('img'), {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Image zoom
    gsap.fromTo(
      imgEl,
      { scale: 1.1, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Text reveal
    const heading = textEl.querySelector('h2');
    const desc = textEl.querySelector('p');
    const btn = textEl.querySelector('button');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    if (heading) {
      const words = heading.querySelectorAll('.word');
      tl.fromTo(
        words,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' },
        0
      );
    }
    if (desc) {
      tl.fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.4);
    }
    if (btn) {
      tl.fromTo(btn, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, 0.7);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section || t.trigger === imgEl.querySelector('img')) t.kill();
      });
    };
  }, []);

  const renderWords = (text: string) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em]">{word}</span>
    ));

  return (
    <section ref={sectionRef} id={id} className="section-padding">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center max-w-7xl mx-auto`}>
        {/* Image */}
        <div ref={imageRef} className="w-full lg:w-1/2 overflow-hidden">
          <img
            src={image}
            alt={heading}
            className="w-full h-[400px] lg:h-[550px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full lg:w-1/2 space-y-6">
          <h2 className="heading-lg text-foreground">
            {renderWords(heading)}
          </h2>
          <p className="body-lg max-w-lg">{description}</p>
          <button className="btn-primary">{cta}</button>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
