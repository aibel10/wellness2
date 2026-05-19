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

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Results", href: "/#results" },
  { label: "Transformations", href: "/success-stories" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/#contact" },
];

const trustItems = [
  { label: "NBHWC-aligned methods", icon: Award },
  { label: "Trauma-aware coaching", icon: HeartPulse },
  { label: "Private client portal", icon: ShieldCheck },
  { label: "Flexible online sessions", icon: CalendarCheck },
];

const programCards = [
  {
    icon: Leaf,
    title: "Nourish Reset",
    audience: "For busy clients who want calmer meals without rigid rules.",
    includes: "4 private sessions, pantry map, simple meal rhythm, check-ins",
    outcome: "Less decision fatigue and a repeatable weekly food flow.",
  },
  {
    icon: HeartPulse,
    title: "Energy Foundations",
    audience: "For high-achievers running on stress, caffeine, and late nights.",
    includes: "6 private sessions, sleep audit, movement plan, stress toolkit",
    outcome: "More stable energy, better boundaries, and sustainable routines.",
  },
  {
    icon: Sparkles,
    title: "Seasonal Support",
    audience: "For returning clients who want gentle accountability.",
    includes: "Monthly coaching, habit review, resource library, voice notes",
    outcome: "A steady rhythm that evolves with real life.",
  },
];

const signatureModules = [
  "Body rhythm audit and baseline goals",
  "Nourishment plan built around real schedules",
  "Stress, sleep, and energy repair routines",
  "Maintenance strategy for busy seasons",
];

const testimonials = [
  {
    quote:
      "I stopped treating wellness like another job. The plan felt doable from week one, and my energy is finally consistent.",
    name: "Anika R.",
    detail: "Energy Foundations client",
  },
  {
    quote:
      "The coaching was warm, specific, and practical. I have meals I actually repeat and boundaries that hold up on workdays.",
    name: "Maya T.",
    detail: "Nourish Reset client",
  },
  {
    quote:
      "The signature program helped me understand my patterns instead of fighting them. I feel clear, calm, and supported.",
    name: "Elena B.",
    detail: "12-week program graduate",
  },
  {
    quote:
      "Working with my coach changed my mindset completely. I finally feel in control of my well-being instead of constantly reacting to stress.",
    name: "Sarah Jenkins",
    detail: "Creative Director",
  },
  {
    quote:
      "I feel healthier, calmer, and more confident than ever. The 30-day reset program gave me my energy back.",
    name: "Michael Chen",
    detail: "Software Engineer",
  },
  {
    quote:
      "The mindfulness sessions have given me a new sense of peace and creativity. Highly recommend for anyone feeling overwhelmed.",
    name: "Chloe Dubois",
    detail: "Art Director",
  },
  {
    quote:
      "Finding balance between a high-pressure job and my personal health seemed impossible until I met my coach. An absolute game-changer.",
    name: "Daniel Roberts",
    detail: "Sales Executive",
  },
];

const resources = [
  {
    title: "How to Reset Your Energy Without Starting Over",
    tag: "Energy",
    excerpt:
      "A practical guide to choosing one sleep, food, and movement anchor for a steadier week.",
  },
  {
    title: "Five Questions to Ask Before Hiring a Wellness Coach",
    tag: "Coaching",
    excerpt:
      "Use these prompts to find a coach whose method, values, and support style fit your life.",
  },
  {
    title: "A Gentle Grocery List for Stressful Seasons",
    tag: "Nourishment",
    excerpt:
      "Simple staples that make nourishing meals easier when your calendar gets crowded.",
  },
];

const faqs = [
  {
    question: "Do I need to follow a strict diet?",
    answer:
      "No. LumaWell focuses on flexible habits, body cues, and routines you can repeat without perfection.",
  },
  {
    question: "Can coaching work with a busy schedule?",
    answer:
      "Yes. Sessions, check-ins, and action steps are designed around your calendar, energy, and existing responsibilities.",
  },
  {
    question: "Is this medical care?",
    answer:
      "No. Wellness coaching is educational and supportive, and it pairs well with care from licensed medical professionals when needed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "LumaWell Wellness Coaching",
      url: "https://lumawell.example.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://lumawell.example.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "LumaWell Wellness Coaching",
      url: "https://lumawell.example.com",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=82",
      description:
        "Holistic wellness coaching for sustainable energy, nourishment, stress support, and habit change.",
      areaServed: "Online",
      priceRange: "$$",
      sameAs: [
        "https://www.instagram.com/lumawell",
        "https://www.linkedin.com/company/lumawell",
      ],
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
    <main className="min-h-screen overflow-hidden bg-[#FFFDF8] text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <TrustStrip />
      <Intro />
      <About />
      <Programs />
      <SignatureProgram />
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/30 text-white backdrop-blur-xl shadow-soft">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="focus-ring flex items-center gap-2 rounded-md group" href="/" aria-label="LumaWell home">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-marigold text-ink overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(233,180,76,0.6)]">
            <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-10" />
            <Leaf aria-hidden="true" size={20} className="transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 z-0" />
          </span>
          <span className="text-lg font-semibold tracking-tight transition-all duration-500 group-hover:tracking-wide group-hover:text-marigold">
            LumaWell
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 border border-transparent hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border-white/20 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] active:bg-white/30 active:backdrop-blur-2xl active:border-white/50 active:scale-90 active:shadow-[inset_0_4px_20px_rgba(255,255,255,0.6),0_8px_32px_rgba(255,255,255,0.2)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-ink shadow-sm transition hover:bg-marigold"
            href="#contact"
          >
            <CalendarCheck aria-hidden="true" size={18} />
            Book
          </a>
          <details className="relative md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/25 bg-white/12 text-white [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden="true" size={21} />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 grid w-56 gap-1 rounded-md bg-white p-2 text-ink shadow-soft"
            >
              {navItems.map((item) => (
                <a
                  className="focus-ring rounded-md px-3 py-3 text-sm font-semibold hover:bg-mist"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-image relative min-h-[92vh] pt-16 text-white">
      <div className="mx-auto flex min-h-[calc(92vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/12 px-3 py-2 text-sm font-semibold uppercase text-white backdrop-blur-sm">
            <ShieldCheck aria-hidden="true" size={16} />
            Certified holistic wellness coaching
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
            LumaWell Wellness Coaching
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/88 sm:text-xl">
            Whole-person coaching for women who want steadier energy, calmer routines,
            and nourishment that fits a real life.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-marigold px-6 text-base font-bold text-ink transition hover:bg-white"
              href="#contact"
            >
              Book a Free Clarity Call
              <ArrowRight aria-hidden="true" size={19} />
            </a>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/40 bg-white/12 px-6 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-ink"
              href="#programs"
            >
              View Programs
              <ChevronRight aria-hidden="true" size={19} />
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 text-sm text-white/82">
            <div className="rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <strong className="block text-2xl text-white">12+</strong>
              weeks of support
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <strong className="block text-2xl text-white">1:1</strong>
              coaching format
            </div>
            <div className="rounded-md border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <strong className="block text-2xl text-white">Online</strong>
              worldwide access
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FFFDF8]" aria-hidden="true" />
    </section>
  );
}

function TrustStrip() {
  return (
    <section aria-label="Credentials and trust markers" className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-md bg-white p-4 shadow-soft md:grid-cols-4">
        {trustItems.map(({ label, icon: Icon }) => (
          <div className="flex min-h-20 items-center gap-3 rounded-md bg-mist p-4" key={label}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-moss text-white">
              <Icon aria-hidden="true" size={19} />
            </span>
            <span className="text-sm font-semibold text-ink">{label}</span>
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
      <p className="mb-3 text-sm font-bold uppercase text-clay">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-ink/70">{text}</p>
    </div>
  );
}

function Intro() {
  return (
    <section className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-clay">A calmer path in</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Your health does not need another all-or-nothing plan.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "You want food choices that do not require constant tracking.",
            "You need routines that survive travel, caregiving, and workdays.",
            "You are ready for support that feels practical, not performative.",
            "You want your body, schedule, and values in the same conversation.",
          ].map((item) => (
            <div className="flex gap-3 rounded-md border border-ink/10 bg-white p-5" key={item}>
              <CheckCircle2 className="mt-1 shrink-0 text-moss" aria-hidden="true" size={20} />
              <p className="leading-7 text-ink/76">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const coaches = [
    {
      name: "Dr. Evelyn Harper",
      role: "FOUNDER & LEAD HOLISTIC COACH",
      desc: "Dr. Evelyn specializes in metabolic health, intuitive nutrition, and hormone balance. She helps high-performing professionals optimize energy levels naturally.",
      tags: ["Metabolic Health", "Nutrition", "Hormones"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Marcus Vance",
      role: "MINDFULNESS & NERVOUS SYSTEM COACH",
      desc: "Marcus teaches evidence-based breathwork and neuro-association protocols to reduce anxiety, combat burnout, and establish emotional resilience.",
      tags: ["Breathwork", "Burnout Recovery", "Resilience"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Clara Thorne",
      role: "MOVEMENT THERAPY & SOMATIC COACH",
      desc: "Clara focuses on somatic experiencing and flow-state movement programs that heal physical tension, correct posture, and encourage fluid muscle recovery.",
      tags: ["Somatic Healing", "Movement Therapy", "Posture"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Dr. Adrian Sterling",
      role: "SLEEP SCIENCE & REST EXPERT",
      desc: "Dr. Adrian uses chronobiology and circadian optimization models to restore natural sleep patterns, enabling sustainable daily alertness.",
      tags: ["Sleep Science", "Chronobiology", "Rest"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  return (
    <section id="about" className="section-pad bg-[#FFFDF8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EXPERT GUIDANCE"
          title="Meet Our Wellness Coaches"
          text="Our multidisciplinary team of certified specialists is dedicated to guiding you back to your natural state of physical and mental vitality."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {coaches.map((coach) => (
            <div 
              key={coach.name}
              className="flex flex-col sm:flex-row gap-6 rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md hover:border-moss/30 group"
            >
              <div className="shrink-0 mx-auto sm:mx-0">
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-mist shadow-inner group-hover:border-moss/20 transition-colors">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-fern mb-2">
                  {coach.role}
                </p>
                <h3 className="text-2xl font-semibold font-serif text-ink mb-3">
                  {coach.name}
                </h3>
                <p className="text-ink/70 leading-relaxed mb-6 text-sm">
                  {coach.desc}
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {coach.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center rounded-full border border-ink/10 bg-mist px-3 py-1 text-xs font-medium text-ink/80"
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
    <section id="programs" className="section-pad relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-mist to-moss/10">
      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-marigold/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-moss/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-clay/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60"></div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Services"
          title="Choose support that matches your season."
          text="Each offer is clear about who it serves, what is included, and the next step, so visitors never have to hunt for the path forward."
        />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {programCards.map((program) => {
            const Icon = program.icon;
            return (
              <article 
                className="rounded-2xl border border-white/50 bg-white/30 backdrop-blur-xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/40 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.08)]" 
                key={program.title}
              >
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-moss to-ink text-white shadow-md">
                  <Icon aria-hidden="true" size={26} />
                </span>
                <h3 className="text-2xl font-bold text-ink">{program.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/80 font-medium">{program.audience}</p>
                
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-ink/10 via-ink/10 to-transparent"></div>
                
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-clay">Includes</dt>
                    <dd className="mt-1 leading-relaxed text-ink/80">{program.includes}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-clay">Expected result</dt>
                    <dd className="mt-1 leading-relaxed text-ink/80">{program.outcome}</dd>
                  </div>
                </dl>
                <a
                  className="focus-ring mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white/50 border border-white/60 backdrop-blur-md px-4 text-sm font-bold text-ink shadow-sm transition-all hover:bg-moss hover:border-moss hover:text-white"
                  href="#contact"
                >
                  Book a Call
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

function SignatureProgram() {
  return (
    <section className="section-pad bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-marigold">Signature program</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            The 12-week LumaWell Method for steadier energy and self-trust.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/75">
            This dedicated sales-page section gives the full picture: the problem,
            the structure, the outcomes, social proof, pricing, and next steps.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {signatureModules.map((module) => (
              <div className="flex gap-3 rounded-md border border-white/12 bg-white/7 p-4" key={module}>
                <CheckCircle2 className="mt-1 shrink-0 text-marigold" aria-hidden="true" size={19} />
                <span className="leading-7 text-white/82">{module}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-marigold px-6 text-base font-bold text-ink transition hover:bg-white"
              href="#contact"
            >
              Apply for the Program
              <ArrowRight aria-hidden="true" size={19} />
            </a>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 px-6 text-base font-semibold text-white transition hover:bg-white hover:text-ink"
              href="#faq"
            >
              Read FAQs
              <BookOpen aria-hidden="true" size={19} />
            </a>
          </div>
        </div>
        <aside className="rounded-md bg-white p-6 text-ink shadow-soft">
          <p className="text-sm font-bold uppercase text-clay">Program details</p>
          <h3 className="mt-3 text-2xl font-semibold">Private coaching package</h3>
          <div className="mt-6 space-y-4">
            {[
              "Six 60-minute private coaching sessions",
              "Personal habit map and weekly action steps",
              "Client portal with worksheets and replay notes",
              "Voice-note support between sessions",
              "Bonus grocery guide and energy reset plan",
            ].map((item) => (
              <div className="flex gap-3" key={item}>
                <CheckCircle2 className="mt-1 shrink-0 text-moss" aria-hidden="true" size={18} />
                <span className="leading-7 text-ink/76">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-md bg-linen p-5">
            <p className="text-sm font-bold uppercase text-clay">Investment</p>
            <p className="mt-2 text-4xl font-semibold">$1,200</p>
            <p className="mt-2 leading-7 text-ink/68">Payment plans available after the clarity call.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="results" className="section-pad relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-linen to-mist">
      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-moss/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-clay/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Client results"
          title="Social proof that makes the next step feel safer."
          text="Testimonials are placed near offers and booking so visitors can see real outcomes before deciding."
        />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          {/* Explicit w-max and flex-nowrap fixes the marquee width issue */}
          <div className="flex w-full overflow-hidden [--gap:1.25rem] gap-5 group flex-nowrap">
            {/* Added animate-[marquee_40s_linear_infinite] just in case tailwind.config wasn't picking it up properly */}
            <div className="flex w-max min-w-full shrink-0 animate-[marquee_40s_linear_infinite] flex-nowrap items-stretch gap-5 group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial) => (
                <figure className="w-[350px] shrink-0 rounded-2xl border border-white/50 bg-white/30 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] flex flex-col transition-all hover:bg-white/40 hover:-translate-y-1" key={testimonial.name}>
                  <Quote className="mb-5 text-clay" aria-hidden="true" size={30} />
                  <blockquote className="text-lg leading-relaxed text-ink/80 flex-1 font-medium">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-ink/10 pt-5">
                    <strong className="block text-lg text-ink font-bold">{testimonial.name}</strong>
                    <span className="text-sm font-semibold text-moss uppercase tracking-wider">{testimonial.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="flex w-max min-w-full shrink-0 animate-[marquee_40s_linear_infinite] flex-nowrap items-stretch gap-5 group-hover:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((testimonial) => (
                <figure className="w-[350px] shrink-0 rounded-2xl border border-white/50 bg-white/30 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] flex flex-col transition-all hover:bg-white/40 hover:-translate-y-1" key={`copy-${testimonial.name}`}>
                  <Quote className="mb-5 text-clay" aria-hidden="true" size={30} />
                  <blockquote className="text-lg leading-relaxed text-ink/80 flex-1 font-medium">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-6 border-t border-ink/10 pt-5">
                    <strong className="block text-lg text-ink font-bold">{testimonial.name}</strong>
                    <span className="text-sm font-semibold text-moss uppercase tracking-wider">{testimonial.detail}</span>
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
    <section className="bg-moss px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-marigold">Free guide</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Download the 5-Day Energy Reset Plan.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/80">
            A simple lead magnet for visitors who are curious, not ready to book yet,
            and still worth nurturing.
          </p>
        </div>
        <form className="grid gap-3 rounded-md bg-white p-4 shadow-soft sm:grid-cols-[1fr_1fr_auto]" action="#contact">
          <label className="sr-only" htmlFor="first-name">
            First name
          </label>
          <input
            className="focus-ring min-h-12 rounded-md border border-ink/12 px-4 text-ink"
            id="first-name"
            name="first-name"
            placeholder="First name"
            type="text"
          />
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            className="focus-ring min-h-12 rounded-md border border-ink/12 px-4 text-ink"
            id="email"
            name="email"
            placeholder="Email address"
            type="email"
          />
          <button
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 font-bold text-white transition hover:bg-clay"
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
    <section id="resources" className="section-pad relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-linen to-mist/30">
      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-0 right-1/4 w-[35rem] h-[35rem] bg-moss/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-clay/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-marigold/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Resource center"
          title="Search-friendly articles that answer real client questions."
          text="A blog or resource hub builds trust, gives search engines useful content, and helps visitors learn your approach before a call."
        />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3 px-4 sm:px-6 lg:px-8">
          {resources.map((resource) => (
            <article 
              className="rounded-2xl border border-white/50 bg-white/30 backdrop-blur-xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:bg-white/40 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.08)] flex flex-col h-full" 
              key={resource.title}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="rounded-xl border border-white/60 bg-white/50 backdrop-blur-md px-3 py-2 text-xs font-bold uppercase tracking-wider text-moss shadow-sm">{resource.tag}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-clay/20 to-clay/5 text-clay backdrop-blur-sm shadow-sm border border-white/40">
                  <Search aria-hidden="true" size={18} />
                </span>
              </div>
              <h3 className="text-balance text-2xl font-bold text-ink mb-4">{resource.title}</h3>
              <p className="leading-relaxed text-ink/70 font-medium flex-1">{resource.excerpt}</p>
              
              <div className="mt-6 pt-6 border-t border-ink/10">
                <a
                  className="focus-ring inline-flex items-center gap-2 font-bold text-moss group transition-colors hover:text-ink"
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
    <section id="faq" className="section-pad relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-mist/50 to-moss/10">
      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-1/4 left-1/4 w-[25rem] h-[25rem] bg-clay/15 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-marigold/15 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Questions"
          title="Clear answers before the clarity call."
          text="The FAQ helps ease objections around fit, timing, and expectations."
        />
        <div className="space-y-5">
          {faqs.map((faq) => (
            <details className="group rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:bg-white/50" key={faq.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-bold text-ink">
                {faq.question}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 border border-white/60 shadow-sm transition-transform duration-300 group-open:rotate-90">
                  <ChevronRight
                    className="shrink-0 text-clay"
                    aria-hidden="true"
                    size={20}
                  />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-ink/10">
                <p className="leading-relaxed text-ink/80 text-lg font-medium">{faq.answer}</p>
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
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-bold uppercase text-clay">Booking and contact</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to feel supported by your routines?
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/72">
            Send a note or book a free 20-minute clarity call. You will leave with
            a next step, whether or not coaching is the right fit.
          </p>
          <div className="mt-8 space-y-4">
            <a
              className="focus-ring flex min-h-14 items-center justify-between gap-4 rounded-md bg-ink px-5 font-bold text-white transition hover:bg-moss"
              href="mailto:hello@lumawell.co"
            >
              hello@lumawell.co
              <Mail aria-hidden="true" size={20} />
            </a>
            <a
              className="focus-ring flex min-h-14 items-center justify-between gap-4 rounded-md border border-ink/12 px-5 font-bold text-ink transition hover:border-moss hover:text-moss"
              href="#programs"
            >
              Compare programs
              <Users aria-hidden="true" size={20} />
            </a>
          </div>
        </div>
        <form className="rounded-md bg-white p-5 shadow-soft" action="mailto:hello@lumawell.co" method="post">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-ink/78" htmlFor="contact-name">
                Name
              </label>
              <input
                className="focus-ring min-h-12 w-full rounded-md border border-ink/12 px-4"
                id="contact-name"
                name="name"
                type="text"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-bold text-ink/78" htmlFor="contact-email">
                Email
              </label>
              <input
                className="focus-ring min-h-12 w-full rounded-md border border-ink/12 px-4"
                id="contact-email"
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-bold text-ink/78" htmlFor="interest">
              What would you like support with?
            </label>
            <select className="focus-ring min-h-12 w-full rounded-md border border-ink/12 px-4" id="interest" name="interest">
              <option>Energy and sleep</option>
              <option>Nutrition routines</option>
              <option>Stress support</option>
              <option>Signature program</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-bold text-ink/78" htmlFor="message">
              Message
            </label>
            <textarea
              className="focus-ring min-h-36 w-full rounded-md border border-ink/12 px-4 py-3"
              id="message"
              name="message"
            />
          </div>
          <button
            className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-clay px-6 font-bold text-white transition hover:bg-ink"
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
    <footer className="bg-[#FFFDF8] pt-16 pb-8 border-t border-ink/10 text-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Quote */}
          <div className="space-y-6">
            <a href="/" className="inline-block">
              <h2 className="text-3xl tracking-tight">
                <span className="font-bold text-ink">Luma</span>
                <span className="italic text-moss font-serif">Well</span>
              </h2>
            </a>
            <blockquote className="border-l-2 border-ink/20 pl-4 text-ink/70 italic leading-relaxed">
              "Helping busy professionals achieve balance, energy, confidence, and sustainable wellness."
            </blockquote>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink mb-6">Explore</h3>
            <ul className="space-y-4 text-ink/70">
              <li><a href="/#about" className="hover:text-moss transition-colors">About Me</a></li>
              <li><a href="/#programs" className="hover:text-moss transition-colors">Services</a></li>
              <li><a href="/#resources" className="hover:text-moss transition-colors">Blog</a></li>
              <li><a href="/success-stories" className="hover:text-moss transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink mb-6">Contact</h3>
            <ul className="space-y-4 text-ink/70 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-moss" />
                <a href="mailto:hello@lumawell.com" className="hover:text-moss transition-colors">hello@lumawell.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-moss" />
                <a href="tel:+15551234567" className="hover:text-moss transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-moss mt-0.5" />
                <span>123 Serenity Lane,<br/>Mindful City, CA 90210</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink mb-6">Newsletter</h3>
            <p className="text-ink/70 mb-4 text-sm">
              Subscribe for weekly mindfulness and wellness tips.
            </p>
            <form className="flex mb-6 shadow-sm rounded-md overflow-hidden border border-ink/10 focus-within:ring-1 focus-within:ring-moss">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-white px-4 py-2 text-sm outline-none border-none"
                required
              />
              <button 
                type="submit"
                className="bg-fern hover:bg-moss text-white px-4 py-2 text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-mist flex items-center justify-center text-ink/70 hover:bg-moss hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-mist flex items-center justify-center text-ink/70 hover:bg-moss hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-mist flex items-center justify-center text-ink/70 hover:bg-moss hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ink/10 text-center text-sm text-ink/50">
          © {new Date().getFullYear()} LumaWell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
