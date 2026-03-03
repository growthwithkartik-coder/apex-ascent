import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import membershipImg from '@/assets/membership.jpg';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
  {
    title: 'Benefits',
    content: 'Access to exclusive global events, VIP concierge services, priority reservations at partner venues, complimentary luxury transfers, and personalized event curation by our world-class team.',
  },
  {
    title: 'Enrollment',
    content: 'Membership is by invitation only. Prospective members undergo a discreet vetting process ensuring alignment with our community values of excellence, discretion, and distinction.',
  },
  {
    title: 'Membership Tiers',
    content: 'Choose from Gold, Platinum, and Black tiers — each unlocking progressively elevated privileges, from backstage access at premier events to private jet transfers and bespoke experiences.',
  },
  {
    title: 'Standards',
    content: 'We uphold the highest standards of service, privacy, and exclusivity. Every touchpoint is designed to exceed expectations, from the first interaction to every event thereafter.',
  },
];

const MembershipAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      }
    );

    // Image slow zoom
    if (imageRef.current) {
      const img = imageRef.current.querySelector('img');
      if (img) {
        gsap.to(img, {
          scale: 1.1,
          duration: 15,
          ease: 'none',
          repeat: -1,
          yoyo: true,
        });
      }
    }
  }, []);

  const toggleItem = (index: number) => {
    const newIndex = openIndex === index ? -1 : index;
    setOpenIndex(newIndex);

    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (i === newIndex) {
        gsap.to(ref, { height: 'auto', opacity: 1, duration: 0.6, ease: 'power3.out' });
      } else {
        gsap.to(ref, { height: 0, opacity: 0, duration: 0.4, ease: 'power3.inOut' });
      }
    });
  };

  return (
    <section ref={sectionRef} id="membership" className="section-padding">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Accordion */}
        <div className="w-full lg:w-1/2 space-y-0">
          <h2 className="heading-lg text-foreground mb-10">Membership</h2>
          {accordionData.map((item, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => toggleItem(i)}
                className={`w-full flex items-center justify-between py-6 text-left transition-colors duration-300 ${
                  openIndex === i ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                <span className="font-display text-xl font-medium">{item.title}</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                ref={el => { contentRefs.current[i] = el; }}
                className="overflow-hidden"
                style={{ height: i === 0 ? 'auto' : 0, opacity: i === 0 ? 1 : 0 }}
              >
                <p className="body-lg pb-6">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div ref={imageRef} className="w-full lg:w-1/2 overflow-hidden glow-gold">
          <img
            src={membershipImg}
            alt="Premium membership"
            className="w-full h-[400px] lg:h-[550px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MembershipAccordion;
