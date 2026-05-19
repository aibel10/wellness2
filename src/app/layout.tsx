import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lumawell.example.com"),
  title: {
    default: "LumaWell Wellness Coaching | Holistic Health Coach Website",
    template: "%s | LumaWell Wellness Coaching",
  },
  description:
    "A strategic wellness coach website with services, testimonials, signature program details, booking, opt-in, FAQs, and SEO-friendly resources.",
  keywords: [
    "wellness coach",
    "holistic health coach",
    "wellness coaching program",
    "health coaching services",
    "stress and energy coaching",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LumaWell Wellness Coaching",
    description:
      "Build calmer energy, steadier habits, and a body rhythm that feels like yours.",
    url: "https://lumawell.example.com",
    siteName: "LumaWell Wellness Coaching",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=82",
        width: 1200,
        height: 630,
        alt: "Calm wellness coaching and movement session",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LumaWell Wellness Coaching",
    description:
      "Whole-person coaching for sustainable energy, nourishment, and routines.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=82",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SmoothScrollProvider } from "./SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed left-6 bottom-6 z-[100] flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
        >
          {/* Tooltip */}
          <span className="absolute left-full ml-4 whitespace-nowrap bg-white text-ink text-sm md:text-base font-medium px-5 py-2.5 rounded-full shadow-md border border-ink/5 opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Chat with us!
          </span>
          <div className="relative flex items-center justify-center">
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 [animation-delay:300ms]" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10 [animation-delay:600ms]" />
            
            {/* Main Button */}
            <div className="relative bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform duration-300"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </div>
          </div>
        </a>

        {/* Floating Call Button */}
        <a 
          href="tel:+1234567890" 
          className="fixed right-6 bottom-6 z-[100] flex items-center justify-center group"
          aria-label="Call Us"
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-4 whitespace-nowrap bg-white text-ink text-sm md:text-base font-medium px-5 py-2.5 rounded-full shadow-md border border-ink/5 opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Call us now!
          </span>
          <div className="relative flex items-center justify-center">
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#007AFF] animate-ping opacity-30" />
            <span className="absolute inset-0 rounded-full bg-[#007AFF] animate-ping opacity-20 [animation-delay:300ms]" />
            <span className="absolute inset-0 rounded-full bg-[#007AFF] animate-ping opacity-10 [animation-delay:600ms]" />

            {/* Main Button */}
            <div className="relative bg-[#007AFF] text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(0,122,255,0.5)] flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform duration-300"
              >
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </a>
      </body>
    </html>
  );
}
