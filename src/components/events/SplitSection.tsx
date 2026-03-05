import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface SplitSectionProps {
  media: string;
  heading: string;
  description: string;
  cta: string;
  reverse?: boolean;
  id?: string;
  badge?: string;
  highlights?: string[];
}

const SplitSection = ({ media, heading, description, cta, reverse = false, id, badge, highlights }: SplitSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const isVideo = /\.(mp4|webm|ogg)$/i.test(media);

  useEffect(() => {
    const section = sectionRef.current;
    const mediaEl = mediaRef.current;
    const textEl = textRef.current;
    if (!section || !mediaEl || !textEl) return;

    const inner = mediaEl.querySelector('img') || mediaEl.querySelector('video');
    if (inner) {
      gsap.to(inner, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Media container reveal
    gsap.fromTo(
      mediaEl,
      { scale: 1.08, opacity: 0, x: reverse ? 60 : -60 },
      {
        scale: 1,
        opacity: 1,
        x: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Text reveal
    const headingEl = textEl.querySelector('h2');
    const desc = textEl.querySelector('.split-desc');
    const btn = textEl.querySelector('.split-cta');
    const badgeEl = textEl.querySelector('.split-badge');
    const highlightEls = textEl.querySelectorAll('.split-highlight');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    if (badgeEl) {
      tl.fromTo(badgeEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, 0);
    }
    if (headingEl) {
      const words = headingEl.querySelectorAll('.word');
      tl.fromTo(
        words,
        { y: 60, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.9, stagger: 0.06, ease: 'power3.out' },
        0.15
      );
    }
    if (desc) {
      tl.fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0.5);
    }
    if (highlightEls.length) {
      tl.fromTo(
        highlightEls,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
        0.7
      );
    }
    if (btn) {
      tl.fromTo(btn, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, 0.9);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [reverse]);

  const renderWords = (text: string) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em]" style={{ perspective: '600px' }}>{word}</span>
    ));

  return (
    <section ref={sectionRef} id={id} className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 ${reverse ? 'right-0' : 'left-0'} w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[100px]`}
          style={{ background: 'var(--ev-gradient)' }}
        />
        <div
          className={`absolute bottom-0 ${reverse ? 'left-1/4' : 'right-1/4'} w-[300px] h-[300px] rounded-full opacity-[0.03] blur-[80px]`}
          style={{ background: 'hsl(var(--gold))' }}
        />
      </div>

      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center max-w-7xl mx-auto relative z-10`}>
        {/* Media */}
        <div ref={mediaRef} className="w-full lg:w-1/2 relative group">
          {/* Glowing border frame */}
          <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'var(--ev-gradient)' }} />
          <div className="relative rounded-2xl overflow-hidden bg-background">
            {isVideo ? (
              <video
                src={media}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <img
                src={media}
                alt={heading}
                className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

            {/* Play icon for video */}
            {isVideo && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20" style={{ background: 'hsl(260 85% 65% / 0.4)' }}>
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Floating accent line */}
          <div
            className={`absolute ${reverse ? '-left-4' : '-right-4'} top-8 w-1 h-24 rounded-full`}
            style={{ background: 'var(--ev-gradient)' }}
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="w-full lg:w-1/2 space-y-6">
          {badge && (
            <span className="split-badge inline-block px-4 py-1.5 text-xs font-body font-semibold tracking-[0.2em] uppercase rounded-full border" style={{ borderColor: 'hsl(260 85% 65% / 0.4)', color: 'hsl(260 85% 65%)' }}>
              {badge}
            </span>
          )}

          <h2 className="heading-lg text-foreground leading-tight">
            {renderWords(heading)}
          </h2>

          <p className="split-desc body-lg max-w-lg">{description}</p>

          {highlights && highlights.length > 0 && (
            <div className="space-y-3 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="split-highlight flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--ev-gradient)' }} />
                  <span className="text-sm font-body text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          )}

          <motion.button
            className="split-cta inline-flex items-center gap-3 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] rounded-xl text-white transition-all duration-500"
            style={{ background: 'var(--ev-gradient)' }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px hsl(260 85% 65% / 0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            {cta}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
