"use client";

import { useState, useEffect } from "react";
import { Menu, X, CalendarCheck, Phone, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-white/12 text-white hover:bg-white/20 transition-all md:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] md:hidden">
          {/* Backdrop blur fade-in */}
          <div 
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 z-10 transition-opacity duration-300"
            style={{ backgroundColor: "rgba(6, 11, 21, 0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
          />

          {/* Sliding Drawer */}
          <div 
            className="absolute right-0 top-0 bottom-0 z-20 w-[75%] max-w-xs border-l border-white/10 h-full shadow-2xl p-5 flex flex-col justify-between transition-transform duration-300 translate-x-0"
            style={{ backgroundColor: "#060B15", opacity: 1, zIndex: 20 }}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                <span className="text-xl font-bold text-white tracking-wide uppercase">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-moss transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    onClick={() => setIsOpen(false)}
                    className="focus-ring flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="border-t border-white/10 pt-6 mt-auto flex flex-col gap-4">
              <a
                onClick={() => setIsOpen(false)}
                className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-xl bg-moss px-6 text-base font-bold text-white shadow-sm transition hover:bg-white hover:text-black"
                href="https://wa.me/919809745714"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarCheck size={18} />
                WhatsApp Consult
              </a>
              <p className="text-center text-xs text-white/40 font-bold tracking-wider">
                © {new Date().getFullYear()} MISSION 444. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
