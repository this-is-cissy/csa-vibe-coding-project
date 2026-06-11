import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <header className="border-b-[3px] border-black bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="text-3xl font-bold brutalist-hover inline-block p-2" data-testid="link-home-logo">
                ZIYAN LEI
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  className={`text-lg font-bold brutalist-hover py-2 px-3 border-[3px] border-transparent hover:border-black ${
                    location === link.href ? "bg-primary border-black brutalist-shadow" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 brutalist-button bg-primary"
                data-testid="button-mobile-menu"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-24 px-6 pb-6 border-b-[3px] border-black h-screen flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-3xl font-bold p-4 brutalist-border ${
                location === link.href ? "bg-primary brutalist-shadow translate-x-[3px] translate-y-[3px]" : "bg-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <main className="flex-grow max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-8">
        {children}
      </main>

      <footer className="border-t-[3px] border-black bg-white mt-auto py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-mono text-sm font-bold">
          © 2025 Ziyan Lei — Built with code and curiosity
        </div>
      </footer>
    </div>
  );
}
