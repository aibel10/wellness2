import Image from "next/image";
import { Leaf, CalendarCheck, Menu, Star, Quote, Mail, Phone, MapPin } from "lucide-react";

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
      name: "Incredible Transformation",
      category: "Weight Loss & Confidence",
      quote: "The personalized coaching completely transformed my approach to health. I went from feeling constantly exhausted to having the energy and confidence to speak in front of hundreds.",
      img: "/results/1.jpg",
    },
    {
      id: 2,
      name: "Reclaiming Health",
      category: "Sustainable Weight Loss",
      quote: "I never thought I could see such incredible changes without extreme diets. The sustainable habits I learned have helped me reclaim my health and feel like myself again.",
      img: "/results/2.jpg",
    },
    {
      id: 3,
      name: "Renewed Vitality",
      category: "Vitality & Wellness",
      quote: "This program was a turning point for me. The holistic approach helped me shed the weight naturally, and I feel more vibrant and alive than I have in years.",
      img: "/results/3.jpg",
    },
    {
      id: 4,
      name: "Radiant Inside & Out",
      category: "Skin Health & Inner Balance",
      quote: "True health starts from within. By balancing my nutrition and managing stress, my skin cleared up completely. I finally have the glowing skin and inner peace I always wanted.",
      img: "/results/4.jpg",
    },
    {
      id: 5,
      name: "A New Chapter",
      category: "Total Lifestyle Reset",
      quote: "The mind-body transformation has been unreal. I've lost the weight, but more importantly, I've gained a new perspective on life, wellness, and my own potential.",
      img: "/results/5.jpg",
    }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFFDF8] via-mist to-moss/10 text-ink">
      <Header />
      
      {/* Decorative background blobs to enhance the glass effect */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-marigold/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      <div className="absolute bottom-1/4 right-0 w-[30rem] h-[30rem] bg-moss/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-clay/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></div>

      <div className="relative z-10 flex flex-col flex-1 pt-24 md:pt-32 pb-16 md:pb-24">
        {/* Header Section */}
        <section className="mx-auto max-w-4xl px-6 mb-16 md:mb-24 text-center">
          <p className="mb-3 text-sm font-bold uppercase text-clay tracking-wider">Real Results</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-ink leading-tight mb-6">
            Client Transformations
          </h1>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            Witness the incredible journeys of individuals who committed to holistic wellness, balanced nutrition, and a healthier lifestyle.
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
                  <div className="relative aspect-square sm:aspect-square md:aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-ink/5 border border-white/60 bg-white/30 backdrop-blur-md group">
                    <div className="absolute inset-0 bg-mist flex flex-col items-center justify-center text-ink/60 text-sm font-medium text-center p-4">
                      <span>Please place image as</span>
                      <span className="bg-white px-2 py-1 rounded mt-2">public/results/{story.id}.jpg</span>
                    </div>
                    <Image 
                      src={story.img} 
                      alt={`Client transformation ${story.id}`} 
                      fill 
                      className="object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
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
                  <h3 className="text-3xl md:text-4xl font-semibold text-ink mb-2">
                    {story.name}
                  </h3>
                  <p className="text-sm font-bold uppercase text-moss tracking-wide mb-6">
                    {story.category}
                  </p>
                  <div className="bg-white/40 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-[1.5rem] relative shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] transition-all hover:bg-white/50 hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.08)] hover:-translate-y-1">
                    <Quote className="absolute top-6 left-6 w-8 h-8 text-clay/30" />
                    <p className="text-ink/80 text-lg font-medium leading-relaxed italic relative z-10 pl-8">
                      "{story.quote}"
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="mx-auto max-w-4xl px-6 mt-24 text-center">
           <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-10 md:p-16 text-ink shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-moss/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-marigold/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
              
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 relative z-10">Ready for Your Own Transformation?</h2>
              <p className="text-ink/70 text-lg mb-8 relative z-10 font-medium">Start your journey today and become our next success story.</p>
              <a href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-moss to-ink px-8 font-bold text-white shadow-lg shadow-moss/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-moss/30 relative z-10">
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
            href="/#contact"
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
