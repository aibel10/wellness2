import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  HeartPulse,
  Leaf,
  Mail,
  Menu,
  MessageCircle,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Phone,
  MapPin,
} from "lucide-react";
import { MobileNav } from "./MobileNav";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Results", href: "/#results" },
  { label: "Transformations", href: "/success-stories" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/#contact" },
];

const trustItems = [
  { label: "International Lifestyle Trainer", icon: Award },
  { label: "Eat Right Food Awareness", icon: Leaf },
  { label: "Mission 444 Community", icon: Users },
  { label: "Circadian & Energy Training", icon: Sparkles },
];

const programCards = [
  {
    icon: Leaf,
    title: "Eat Right Food Awareness",
    audience: "For individuals seeking a sustainable nutrition model and lifestyle reset.",
    includes: "Personalized nutrition tracking, metabolic balance, daily food rhythm mapping",
    outcome: "Proper food choices, less lifestyle stress, and natural energy reset.",
  },
  {
    icon: HeartPulse,
    title: "Lifestyle & Energy Reset",
    audience: "For high-performers struggling with fatigue, stress, and irregular schedules.",
    includes: "Sleep optimization, somatic breathing techniques, stress boundary playbook",
    outcome: "Steady physical energy, mental clarity, and restored daily alertness.",
  },
  {
    icon: Users,
    title: "Mission 444 Community",
    audience: "For people who want step-by-step guidance and group support.",
    includes: "Weekly virtual meetups, 24/7 WhatsApp community, direct trainer guidance",
    outcome: "A thriving wellness network focused on health, wealth, and life-changing growth.",
  },
];

const testimonials = [
  {
    quote: "Thanks to Asuhar B's food awareness program, I completely changed how I look at meals. I lost 12kg and finally feel energetic throughout the day.",
    name: "Suresh Kumar",
    detail: "Mission 444 Community Member",
  },
  {
    quote: "The guidance was incredibly practical. 'Health is not an option, it's mandatory' stuck with me. My sleep is deeper and my work focus is at its peak.",
    name: "Renjith R.",
    detail: "Lifestyle Reset Client",
  },
  {
    quote: "Joining the Mission 444 community was the best decision. I didn't just regain my health, I also learned how to build wealth and support others in their journey.",
    name: "Divya Nair",
    detail: "Transformation Graduate",
  },
  {
    quote: "Under Asuhar's training, I reset my metabolic health. I no longer feel lethargic after lunch. It really is Eat Right, Live Right!",
    name: "Abhilash J.",
    detail: "Corporate Executive",
  },
  {
    quote: "Truly life-changing guidance. The focus on immune health and daily rhythms has helped me stay active and stress-free even during busy travel schedules.",
    name: "Meera Krishnan",
    detail: "Entrepreneur",
  },
];

const resources = [
  {
    title: "Why Health is Mandatory for Normal Living: Rethinking Daily Rhythms",
    tag: "Lifestyle",
    excerpt: "Explore the core philosophy of Asuhar B on why physical vitality is the foundation for all personal and professional success.",
  },
  {
    title: "Eat Right, Live Right: A Guide to Food Awareness without Rigid Calorie Counting",
    tag: "Nutrition",
    excerpt: "Simple habits to reset your plate, optimize metabolism, and choose foods that fuel stable, long-lasting energy.",
  },
  {
    title: "How to Build Immune Health and Combat Burnout in Under 10 Minutes a Day",
    tag: "Immunity",
    excerpt: "Circadian rhythm tips, somatic breathing, and easy routine shifts that protect your nervous system from daily stress.",
  },
];

const faqs = [
  {
    question: "What is Mission 444 Wellness World?",
    answer: "Mission 444 Wellness World is a comprehensive wellness and lifestyle platform founded by Asuhar B. We focus on three core pillars: Building Wellness, Creating Wealth, and Changing Lives.",
  },
  {
    question: "Who is Asuhar B?",
    answer: "Asuhar B is an International Lifestyle Trainer, Wellness & Lifestyle Builder, and the founder of Mission 444 Wellness World. He helps people master food awareness, metabolic health, and lifestyle habits.",
  },
  {
    question: "What is 'Eat Right Food Awareness'?",
    answer: "It is our signature program and regular community event focused on helping you understand how food affects your body, metabolic health, and mental peace, leading to sustainable weight loss and vitality.",
  },
  {
    question: "How do I get started?",
    answer: "You can book a free clarity call, contact us directly via WhatsApp, or call +91 9809745714. We will help you identify the best next step for your health journey.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Asuhar B | Mission 444 Wellness World",
      url: "https://mission444.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://mission444.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Asuhar B | Mission 444 Wellness World",
      url: "https://mission444.com",
      image: "/asuhar-b-profile.png",
      description: "Professional wellness and lifestyle training by Asuhar B. Eat Right Food Awareness, health transformation, wealth creation, and community building.",
      telephone: "+919809745714",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mannarakonam, Vattiyoorkavu",
        addressLocality: "Trivandrum",
        addressRegion: "Kerala",
        addressCountry: "IN"
      },
      areaServed: "Global / Trivandrum",
      priceRange: "$$",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <TrustStrip />
      <Intro />
      <FeaturedEvent />
      <About />
      <Programs />
      <Testimonials />
      <LeadMagnet />
      <Resources />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 text-black shadow-soft">
      {/* Background blur layer - prevents establishing containing block on header */}
      <div className="absolute inset-0 -z-10 bg-white/80 backdrop-blur-xl" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="focus-ring flex items-center gap-2 rounded-md group" href="/" aria-label="Asuhar B home">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-marigold text-black overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.6)]">
            <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-10" />
            <Leaf aria-hidden="true" size={20} className="transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 z-0" />
          </span>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight transition-all duration-500 group-hover:text-marigold leading-none">
              ASUHAR B
            </span>
            <span className="text-[9px] text-black/50 font-bold uppercase tracking-widest leading-none mt-0.5">
              Mission 444
            </span>
          </div>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-slate-800 transition-all duration-300 border border-transparent hover:text-black hover:bg-black/5 hover:backdrop-blur-md hover:border-black/10 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] active:bg-black/10 active:backdrop-blur-2xl active:border-black/20 active:scale-90 active:shadow-[inset_0_4px_20px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.05)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-moss px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-black hover:text-white"
            href="#contact"
          >
            <CalendarCheck aria-hidden="true" size={18} />
            Book Call
          </a>
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-image relative min-h-[85vh] pt-16 text-black flex items-center">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-moss/30 bg-moss/10 px-3.5 py-2 text-sm font-bold uppercase text-moss backdrop-blur-sm shadow-sm">
            <Sparkles aria-hidden="true" size={16} />
            MISSION 444 WELLNESS WORLD
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-extrabold leading-none tracking-tight text-black sm:text-6xl lg:text-7xl">
            Eat Right.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-moss to-marigold">Live Right.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-700 sm:text-xl font-medium">
            Building Wellness. Creating Wealth. Changing Lives.<br/>
            Holistic lifestyle training under the guidance of International Trainer Asuhar B to help you build sustainable health.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-moss px-6 text-base font-bold text-white transition hover:bg-black hover:text-white"
              href="https://wa.me/919809745714?text=Hi%20Asuhar%20B,%20I'm%20interested%20in%20joining%20the%20Mission%20444%20community."
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Community
              <ArrowRight aria-hidden="true" size={19} />
            </a>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-black/20 bg-black/5 px-6 text-base font-semibold text-black backdrop-blur-sm transition hover:bg-black hover:text-white"
              href="#programs"
            >
              Our Programs
              <ChevronRight aria-hidden="true" size={19} />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-700">
            <div className="rounded-md border border-black/10 bg-mist/60 p-3.5 backdrop-blur-sm">
              <strong className="block text-2xl text-moss font-bold">Eat Right</strong>
              Food Awareness Focus
            </div>
            <div className="rounded-md border border-black/10 bg-mist/60 p-3.5 backdrop-blur-sm">
              <strong className="block text-2xl text-marigold font-bold">100%</strong>
              Community Supported
            </div>
            <div className="rounded-md border border-black/10 bg-mist/60 p-3.5 backdrop-blur-sm">
              <strong className="block text-2xl text-moss font-bold">Trivandrum</strong>
              Mission 444 Center
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FFFDF8] to-transparent" aria-hidden="true" />
    </section>
  );
}

function TrustStrip() {
  return (
    <section aria-label="Credentials and trust markers" className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-2xl bg-white/90 border border-black/10 p-4 shadow-soft md:grid-cols-4 backdrop-blur-xl">
        {trustItems.map(({ label, icon: Icon }) => (
          <div className="flex min-h-20 items-center gap-3 rounded-xl bg-[#FFFDF8] p-4 border border-black/5" key={label}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-moss text-white">
              <Icon aria-hidden="true" size={19} />
            </span>
            <span className="text-sm font-semibold text-slate-800">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-moss">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-bold leading-tight text-black sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-600 font-medium">{text}</p>
    </div>
  );
}

function Intro() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#FFFDF8]">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/nature-bg.png" 
          alt="Intro Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/92 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-moss">OUR VISION</p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-black sm:text-4xl">
            HEALTH IS NOT AN OPTION, ITS MANDATORY FOR NORMAL LIVING
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "You want food choices that do not require constant tracking.",
            "You need routines that survive travel, caregiving, and workdays.",
            "You are ready for support that feels practical, not performative.",
            "You want your body, schedule, and values in the same conversation.",
          ].map((item) => (
            <div className="flex gap-3 rounded-2xl border border-black/10 bg-mist/60 backdrop-blur-xl p-5" key={item}>
              <CheckCircle2 className="mt-1 shrink-0 text-moss" aria-hidden="true" size={20} />
              <p className="leading-relaxed text-slate-700 text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedEvent() {
  return (
    <section className="section-pad relative overflow-hidden bg-linen">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/nature-bg.png" 
          alt="Event Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFF8EF]/92 backdrop-blur-[2px]" />
      </div>
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-moss/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-marigold/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-moss/30 bg-moss/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-moss shadow-sm">
            <CalendarCheck className="w-4 h-4" /> Featured Event
          </span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
            Eat Right Food Awareness
          </h2>
          <p className="mt-2 text-lg text-moss font-bold uppercase tracking-widest">
            BTC & New Visitors Recognition
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-black/10 bg-mist/60 backdrop-blur-xl p-8 sm:p-10 shadow-lg">
            <div>
              <blockquote className="border-l-4 border-moss pl-4 text-xl font-medium italic text-slate-800 mb-8">
                &quot;HEALTH IS NOT AN OPTION, ITS MANDATORY FOR NORMAL LIVING&quot;
              </blockquote>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-moss/20 text-moss border border-moss/30 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Date & Day</h4>
                    <p className="text-lg font-bold text-black mt-1">17 MAY 2026 (SUNDAY)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-moss/20 text-moss border border-moss/30 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Timing</h4>
                    <p className="text-lg font-bold text-black mt-1">8:00 AM - 9:00 AM <span className="text-moss font-bold">(IST)</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-moss/20 text-moss border border-moss/30 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">Location</h4>
                    <p className="text-lg font-bold text-black mt-1">MISSION 444 WELLNESS WORLD</p>
                    <p className="text-sm text-slate-600">Mannarakonam, Vattiyoorkavu, Trivandrum, Kerala</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap gap-4 items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Building Wellness</span>
                <span className="text-sm font-bold text-moss">ASUHAR B Wellness Builder</span>
              </div>
              <div className="flex items-center gap-1 text-marigold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Slogan and Action Column */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-black/10 bg-gradient-to-b from-white to-mist backdrop-blur-xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
            {/* Background Orange Accent curve */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-moss/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-moss">Community Slogan</h3>
              <p className="text-2xl font-extrabold text-black mt-2 leading-tight">
                No More Excuses For Your Health & Wellness
              </p>
              
              <div className="mt-6 p-5 rounded-2xl bg-white border border-black/5">
                <p className="text-base font-semibold text-moss leading-relaxed italic">
                  &quot;You Can Have 1000 Problems In Life, Until You Have A Problem In Health&quot;
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">What You Will Gain:</h4>
                <ul className="space-y-2">
                  {[
                    "Eat Right, Live Right",
                    "Better Health, Better Life",
                    "Mental Peace & Clarity",
                    "Strong Immunity Everyday",
                    "Energy Today, Success Tomorrow"
                  ].map((gain, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-800 font-semibold">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-moss/20 text-moss text-xs font-bold border border-moss/30">✓</span>
                      {gain}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 relative z-10 space-y-3">
              <a
                href="https://wa.me/919809745714?text=Hi%20Asuhar%20B,%20I'm%20interested%20in%20joining%20the%20Eat%20Right%20Food%20Awareness%20community."
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-moss px-6 font-bold text-white shadow-md transition-all hover:bg-moss/80 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle size={19} />
                Join Our Community
              </a>
              <a
                href="tel:+919809745714"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-black/5 px-6 font-bold text-black transition-all hover:bg-black/10 hover:scale-[1.02] active:scale-95"
              >
                <Phone size={18} />
                Call +91 9809745714
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const coaches = [
    {
      name: "Asuhar B",
      role: "FOUNDER & INTERNATIONAL LIFESTYLE TRAINER",
      desc: "Asuhar B is a leading lifestyle builder and health coach. He guides individuals globally on food awareness, metabolic health, and building sustainable vitality, under his signature mission: Building Wellness, Creating Wealth, Changing Lives.",
      tags: ["Lifestyle Training", "Food Awareness", "Wealth & Wellness"],
      image: "/asuhar-b-profile.png",
    },
    {
      name: "Dr. Evelyn Harper",
      role: "LEAD HOLISTIC NUTRITION SPECIALIST",
      desc: "Dr. Evelyn specializes in metabolic health, intuitive nutrition, and hormone balance, aligning perfectly with Asuhar's Eat Right food principles.",
      tags: ["Metabolic Health", "Nutrition", "Hormones"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Marcus Vance",
      role: "MINDFULNESS & NERVOUS SYSTEM SPECIALIST",
      desc: "Marcus teaches breathwork and stress recovery protocols, helping clients achieve the mental peace and clarity essential for normal living.",
      tags: ["Breathwork", "Burnout Recovery", "Mental Clarity"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Clara Thorne",
      role: "MOVEMENT THERAPY & SOMATIC COACH",
      desc: "Clara focuses on somatic experiencing and posture correction flow programs to release daily physical tension.",
      tags: ["Somatic Healing", "Movement Therapy", "Circadian Rest"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[#FFFDF8]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/coaches-bg.png" 
          alt="Wellness Coaches Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/92 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EXPERT GUIDANCE"
          title="Meet Our Wellness Team"
          text="Led by founder Asuhar B, our multidisciplinary team of specialists is dedicated to guiding you back to your natural state of physical and mental vitality."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {coaches.map((coach) => (
            <div 
              key={coach.name}
              className="flex flex-col sm:flex-row gap-6 rounded-3xl border border-black/10 bg-mist/80 p-6 sm:p-8 shadow-lg transition-all hover:shadow-xl hover:border-moss/40 group backdrop-blur-md"
            >
              <div className="shrink-0 mx-auto sm:mx-0">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-linen shadow-inner group-hover:border-moss/40 transition-colors">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-moss mb-2">
                  {coach.role}
                </p>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {coach.name}
                </h3>
                <p className="text-slate-700 leading-relaxed mb-6 text-sm font-semibold">
                  {coach.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {coach.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center rounded-full border border-black/5 bg-[#FFFDF8] px-3 py-1 text-xs font-bold text-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="section-pad relative overflow-hidden bg-[#FFFDF8]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/nature-bg.png" 
          alt="Programs Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/92 backdrop-blur-[2px]" />
      </div>

      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-marigold/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-moss/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-clay/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Our Programs"
          title="Choose training that matches your goals"
          text="Each offer is structured to provide step-by-step guidance on food, habits, and community to help you build stable health."
        />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {programCards.map((program) => {
            const Icon = program.icon;
            return (
              <article 
                className="rounded-2xl border border-black/10 bg-mist/60 backdrop-blur-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-mist/80 hover:border-moss/30" 
                key={program.title}
              >
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-moss to-marigold text-white shadow-sm">
                  <Icon aria-hidden="true" size={26} />
                </span>
                <h3 className="text-2xl font-bold text-black">{program.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-800 font-semibold">{program.audience}</p>
                
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-black/10 via-black/10 to-transparent"></div>
                
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-moss">Includes</dt>
                    <dd className="mt-1 leading-relaxed text-slate-700 text-sm font-semibold">{program.includes}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-moss">Expected outcome</dt>
                    <dd className="mt-1 leading-relaxed text-slate-700 text-sm font-semibold">{program.outcome}</dd>
                  </div>
                </dl>
                <a
                  className="focus-ring mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-black/5 border border-black/10 px-4 text-sm font-bold text-black shadow-sm transition-all hover:bg-moss hover:border-moss hover:text-white"
                  href="#contact"
                >
                  Book a Consultation
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="results" className="section-pad relative overflow-hidden bg-[#FFFDF8]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/wellness-bg.png" 
          alt="Client Results Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/92 backdrop-blur-[2px]" />
      </div>

      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-moss/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-clay/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="CLIENT TRANSFORMATIONS"
          title="What Our Community Says"
          text="Read the success stories of individuals who transformed their health and daily vitality with Asuhar B."
        />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Explicit w-max and flex-nowrap fixes the marquee width issue */}
          <div className="flex w-full overflow-hidden [--gap:1.25rem] gap-5 group flex-nowrap">
            {/* Using standard animate-marquee with custom variables */}
            <div className="flex w-max min-w-full shrink-0 animate-marquee [--duration:40s] flex-nowrap items-stretch gap-5 group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial) => (
                <figure className="w-[290px] sm:w-[350px] shrink-0 rounded-2xl border border-black/10 bg-mist/80 backdrop-blur-xl p-6 shadow-md flex flex-col transition-all hover:bg-mist/90 hover:-translate-y-1" key={testimonial.name}>
                  <Quote className="mb-5 text-moss" aria-hidden="true" size={30} />
                  <blockquote className="text-base leading-relaxed text-slate-800 flex-1 font-semibold">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-black/10 pt-5">
                    <strong className="block text-lg text-black font-bold">{testimonial.name}</strong>
                    <span className="text-xs font-bold text-moss uppercase tracking-wider">{testimonial.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="flex w-max min-w-full shrink-0 animate-marquee [--duration:40s] flex-nowrap items-stretch gap-5 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((testimonial) => (
                <figure className="w-[290px] sm:w-[350px] shrink-0 rounded-2xl border border-black/10 bg-mist/80 backdrop-blur-xl p-6 shadow-md flex flex-col transition-all hover:bg-mist/90 hover:-translate-y-1" key={`copy-${testimonial.name}`}>
                  <Quote className="mb-5 text-moss" aria-hidden="true" size={30} />
                  <blockquote className="text-base leading-relaxed text-slate-800 flex-1 font-semibold">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-black/10 pt-5">
                    <strong className="block text-lg text-black font-bold">{testimonial.name}</strong>
                    <span className="text-xs font-bold text-moss uppercase tracking-wider">{testimonial.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          {/* Fades on the edges to smooth the marquee entry/exit */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#FFFDF8] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#FFFDF8] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

function LeadMagnet() {
  return (
    <section className="relative px-4 py-16 text-black sm:px-6 lg:px-8 overflow-hidden bg-linen">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/wellness-bg.png" 
          alt="Lead Magnet Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFF8EF]/92 backdrop-blur-[2px]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-moss">Free community access</p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-black sm:text-4xl">
            Get Our Lifestyle Reset Guide & Recipes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-700 font-medium">
            Learn the foundational habits of Eat Right Food Awareness to reset your body rhythm and immunity. Enter your details to receive the free handbook.
          </p>
        </div>
        <form className="grid gap-3 rounded-2xl bg-white border border-black/10 p-5 shadow-md sm:grid-cols-[1fr_1fr_auto]" action="#contact">
          <label className="sr-only" htmlFor="first-name">
            First name
          </label>
          <input
            className="focus-ring min-h-12 rounded-xl border border-black/10 bg-[#FFFDF8] px-4 text-black text-sm font-semibold placeholder:text-slate-400"
            id="first-name"
            name="first-name"
            placeholder="First name"
            type="text"
            required
          />
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            className="focus-ring min-h-12 rounded-xl border border-black/10 bg-[#FFFDF8] px-4 text-black text-sm font-semibold placeholder:text-slate-400"
            id="email"
            name="email"
            placeholder="Email address"
            type="email"
            required
          />
          <button
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-moss px-5 font-bold text-white transition hover:bg-black hover:text-white"
            type="submit"
          >
            Get Guide
            <Mail aria-hidden="true" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="section-pad relative overflow-hidden bg-[#FFFDF8]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/nature-bg.png" 
          alt="Resources Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/92 backdrop-blur-[2px]" />
      </div>

      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-moss/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-clay/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-marigold/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="RESOURCE CENTER"
          title="Search-Friendly Wellness Guides"
          text="Deepen your food awareness and learn practical circadian rhythm hacks with articles written by our coaching team."
        />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {resources.map((resource) => (
            <article 
              className="rounded-2xl border border-black/10 bg-mist/60 backdrop-blur-xl p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-mist/80 hover:border-moss/30 flex flex-col h-full" 
              key={resource.title}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-xl border border-black/10 bg-black/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-moss shadow-sm">{resource.tag}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-moss border border-black/10">
                  <Search aria-hidden="true" size={18} />
                </span>
              </div>
              <h3 className="text-balance text-2xl font-bold text-black mb-4">{resource.title}</h3>
              <p className="leading-relaxed text-slate-700 font-medium flex-1 text-sm">{resource.excerpt}</p>
              
              <div className="mt-6 pt-6 border-t border-black/10">
                <a
                  className="focus-ring inline-flex items-center gap-2 font-bold text-moss group transition-colors hover:text-marigold"
                  href="#contact"
                >
                  Read the article
                  <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-pad relative overflow-hidden bg-[#FFFDF8]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/faq-bg.png" 
          alt="FAQ Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/92 backdrop-blur-[2px]" />
      </div>

      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-1/4 left-1/4 w-[25rem] h-[25rem] bg-clay/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-marigold/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Clear Answers For Your Health & Wellness"
          text="Find details about our programs, scheduling consultations, and how the Mission 444 community supports your wellness goals."
        />
        <div className="space-y-5">
          {faqs.map((faq) => (
            <details className="group rounded-2xl border border-black/10 bg-mist/60 backdrop-blur-xl p-6 shadow-md transition-all duration-300 hover:bg-mist/80" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-bold text-black select-none">
                {faq.question}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 border border-black/10 shadow-sm transition-transform duration-300 group-open:rotate-90">
                  <ChevronRight
                    className="shrink-0 text-moss"
                    aria-hidden="true"
                    size={20}
                  />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-black/10">
                <p className="leading-relaxed text-slate-700 text-base font-semibold">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden text-slate-800 bg-[#FFFDF8]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/contact-bg.png" 
          alt="Contact Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#FFFDF8]/90" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start relative z-10 px-4 sm:px-6 lg:px-8">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-moss">BOOKING AND CONTACT</p>
          <h2 className="text-balance text-4xl font-extrabold leading-tight text-black">
            Ready to live healthier and stress-free?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700 font-medium">
            Contact trainer Asuhar B directly via WhatsApp, phone, or send an email inquiry. Get started on the path to food awareness, weight transformation, and normal living today.
          </p>
          <div className="mt-8 space-y-4">
            <a
              className="focus-ring flex min-h-14 items-center justify-between gap-4 rounded-xl bg-black/5 border border-black/10 backdrop-blur-md px-5 font-bold text-black transition hover:bg-moss hover:text-white hover:border-moss"
              href="mailto:asuharmission444@gmail.com"
            >
              asuharmission444@gmail.com
              <Mail aria-hidden="true" size={20} />
            </a>
            <a
              className="focus-ring flex min-h-14 items-center justify-between gap-4 rounded-xl border border-black/10 px-5 font-bold text-black transition hover:bg-black hover:text-white"
              href="https://wa.me/919809745714"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp +91 9809745714
              <MessageCircle aria-hidden="true" size={20} />
            </a>
          </div>
        </div>
        <form 
          className="rounded-2xl bg-mist border border-black/10 p-6 sm:p-8 shadow-md text-slate-800" 
          action="mailto:asuharmission444@gmail.com" 
          method="post" 
          encType="text/plain"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="contact-name">
                Name
              </label>
              <input
                className="focus-ring min-h-12 w-full rounded-xl border border-black/10 bg-[#FFFDF8] px-4 text-black text-sm font-semibold placeholder:text-slate-400"
                id="contact-name"
                name="name"
                type="text"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="contact-email">
                Email
              </label>
              <input
                className="focus-ring min-h-12 w-full rounded-xl border border-black/10 bg-[#FFFDF8] px-4 text-black text-sm font-semibold placeholder:text-slate-400"
                id="contact-email"
                name="email"
                type="email"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="interest">
              What program are you interested in?
            </label>
            <select className="focus-ring min-h-12 w-full rounded-xl border border-black/10 bg-[#FFFDF8] px-4 text-black text-sm font-semibold appearance-none" id="interest" name="interest">
              <option>Eat Right Food Awareness</option>
              <option>Lifestyle and Energy Reset</option>
              <option>Mission 444 Community</option>
              <option>Other Wellness Inquiry</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500" htmlFor="message">
              Message
            </label>
            <textarea
              className="focus-ring min-h-32 w-full rounded-xl border border-black/10 bg-[#FFFDF8] px-4 py-3 text-black text-sm font-semibold placeholder:text-slate-400"
              id="message"
              required
            />
          </div>
          <button
            className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-moss px-6 font-bold text-white shadow-md transition hover:bg-black hover:text-white active:scale-95"
            type="submit"
          >
            Send Inquiry
            <ArrowRight aria-hidden="true" size={19} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-linen pt-16 pb-8 border-t border-black/10 text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Quote */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <h2 className="text-2xl font-bold tracking-tight">
                <span className="text-black">ASUHAR B</span>
                <span className="text-xs text-moss font-bold block uppercase tracking-widest mt-1">Mission 444 Wellness World</span>
              </h2>
            </a>
            <blockquote className="border-l-2 border-moss pl-4 text-slate-600 italic leading-relaxed text-sm">
              &quot;HEALTH IS NOT AN OPTION, ITS MANDATORY FOR NORMAL LIVING.&quot;
            </blockquote>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Explore</h3>
            <ul className="space-y-4 text-slate-700 text-sm font-semibold">
              <li><a href="/#about" className="hover:text-moss transition-colors">About Me</a></li>
              <li><a href="/#programs" className="hover:text-moss transition-colors">Services</a></li>
              <li><a href="/#resources" className="hover:text-moss transition-colors">Blog</a></li>
              <li><a href="/success-stories" className="hover:text-moss transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Contact Details</h3>
            <ul className="space-y-4 text-slate-700 text-sm font-semibold">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-moss" />
                <a href="mailto:asuharmission444@gmail.com" className="hover:text-moss transition-colors">asuharmission444@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-moss" />
                <a href="tel:+919809745714" className="hover:text-moss transition-colors">+91 9809745714</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-moss mt-0.5" />
                <span>Mannarakonam, Vattiyoorkavu,<br/>Trivandrum, Kerala, India</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Slogan & Socials */}
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Mission 444</h3>
            <p className="text-slate-700 text-sm font-medium leading-relaxed">
              Building Wellness. Creating Wealth. Changing Lives. No more excuses for your health & wellness.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/919809745714" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-slate-700 hover:bg-moss hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-black/10 text-center text-xs text-slate-500 font-bold tracking-wider">
          © {new Date().getFullYear()} MISSION 444 WELLNESS WORLD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
