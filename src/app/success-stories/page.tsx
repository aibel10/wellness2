import Image from "next/image";
import { Leaf, CalendarCheck, Menu, Star, Quote, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { MobileNav } from "../MobileNav";
import { ThemeToggle } from "../ThemeToggle";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/#programs" },
  { label: "Results", href: "/#results" },
  { label: "Transformations", href: "/success-stories" },
  { label: "Resources", href: "/#resources" },
  { label: "Contact", href: "/#contact" },
];

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      name: "Incredible Weight Loss Transformation",
      category: "Weight Loss & Confidence",
      quote: "The personalized food awareness guidance completely transformed my approach to nutrition. I went from feeling constantly exhausted to shedding excess weight naturally and gaining immense vitality.",
      img: "/results/1.jpg",
    },
    {
      id: 2,
      name: "Reclaiming Vitality & Health",
      category: "Sustainable Weight Loss",
      quote: "I never thought I could see such incredible changes without extreme dieting. The sustainable habits I learned from Asuhar B have helped me reclaim my health and build long-term immunity.",
      img: "/results/2.jpg",
    },
    {
      id: 3,
      name: "Metabolic Health Success",
      category: "Vitality & Wellness",
      quote: "This program was a turning point. The holistic approach and circadian alignment helped me restore my metabolism, lose weight, and feel more vibrant than I have in a decade.",
      img: "/results/3.jpg",
    },
    {
      id: 4,
      name: "Glowing Skin & Wellness",
      category: "Skin Health & Inner Balance",
      quote: "True health starts from within. By balancing my nutrition and understanding daily food rhythm, my body reset entirely. I finally have the energy and skin clarity I wanted.",
      img: "/results/4.jpg",
    },
    {
      id: 5,
      name: "Life-Changing Routine Reset",
      category: "Total Lifestyle Reset",
      quote: "The mind-body transformation has been unreal. I've built consistent wellness routines, restored sleep patterns, and gained a completely new perspective on healthy living.",
      img: "/results/5.jpg",
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#FFFDF8] text-slate-800">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/wellness-bg.png" 
          alt="Success Stories Background" 
          fill 
          className="object-cover blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-[#FFFDF8]/92 dark:bg-[#060B15]/92 backdrop-blur-[2px]" />
      </div>
      <Header />
      
      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-marigold/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-moss/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-clay/5 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></div>

      <div className="relative z-10 flex flex-col flex-1 pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Header Section */}
        <section className="mx-auto max-w-4xl px-6 mb-16 md:mb-24 text-center">
          <p className="mb-3 text-xs font-bold uppercase text-moss tracking-widest">Real Transformations</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6">
            Client Success Stories
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            Witness the inspiring journeys of individuals who committed to Eat Right food principles, reclaimed their daily vitality, and changed their lives.
          </p>
        </section>

        {/* Stories Grid */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-16 md:gap-24">
            {stories.map((story, index) => (
              <article 
                key={story.id}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-square sm:aspect-square md:aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-black/10 bg-mist/30 backdrop-blur-md group">
                    <Image 
                      src={story.img} 
                      alt={`Client transformation ${story.id}`} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center space-x-1 text-marigold mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {story.name}
                  </h3>
                  <p className="text-xs font-bold uppercase text-moss tracking-widest mb-6">
                    {story.category}
                  </p>
                  <div className="bg-mist/80 backdrop-blur-xl border border-black/10 p-6 md:p-8 rounded-[1.5rem] relative shadow-md transition-all hover:bg-mist/90 hover:border-moss/30">
                    <Quote className="absolute top-6 left-6 w-8 h-8 text-moss/20" />
                    <p className="text-slate-800 text-lg font-semibold leading-relaxed italic relative z-10 pl-8">
                      &quot;{story.quote}&quot;
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="mx-auto max-w-4xl px-6 mt-24 text-center">
           <div className="bg-mist border border-black/10 rounded-[2rem] p-10 md:p-16 text-slate-800 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-moss/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-marigold/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-black relative z-10">Ready for Your Own Transformation?</h2>
              <p className="text-slate-700 text-lg mb-8 relative z-10 font-semibold">Join the Eat Right community today and take the first step to sustainable wellness.</p>
              <a href="https://wa.me/919809745714?text=Hi%20Asuhar%20B,%20I'm%20interested%20in%20joining%20the%20wellness%20program." target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-moss px-8 font-bold text-white shadow-md hover:scale-105 relative z-10">
                Book a Free Consultation
              </a>
           </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/80 text-black backdrop-blur-xl shadow-soft">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="focus-ring flex items-center gap-2 rounded-md group" href="/" aria-label="Asuhar B home">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-moss text-white overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(46,125,50,0.6)]">
            <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out z-10" />
            <Leaf aria-hidden="true" size={20} className="transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 z-0" />
          </span>
          <span className="text-lg font-bold tracking-tight transition-all duration-500 group-hover:tracking-wide">
            ASUHAR B
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 border border-transparent hover:text-black hover:bg-black/5 hover:backdrop-blur-md hover:border-black/10"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-moss px-4 text-sm font-bold text-white shadow-md transition hover:bg-black hover:text-white"
            href="https://wa.me/919809745714"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CalendarCheck aria-hidden="true" size={18} />
            Consult
          </a>
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
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
