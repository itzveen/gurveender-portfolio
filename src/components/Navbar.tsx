import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate?: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Tools', href: '#tools' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Direct Gmail Web Compose URL (Opens Gmail in browser with prefilled draft)
  const gmailComposeUrl =
    'https://mail.google.com/mail/?view=cm&fs=1&to=gurveenderjeetkaur@gmail.com&su=Opportunity%20%2F%20Collaboration%20Inquiry%20%E2%80%94%20Gurveender%20Jeet%20Kaur&body=Hi%20Gurveender%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%20regarding%20...%0A%0ABest%20regards%2C';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#D3C4B4]/50 py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-4 md:py-5'
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 xl:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-[#4A2525] hover:opacity-80 transition-opacity tracking-tight whitespace-nowrap"
        >
          Gurveender Jeet Kaur
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3 py-1.5 text-xs lg:text-sm font-sans font-medium text-[#654635] hover:text-[#4A2525] hover:bg-[#E6DACB]/40 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: Buka Tab Gmail Baru Langsung */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Buka compose email di Gmail"
            className="border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
          >
            Get in Touch ↗
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#4A2525] focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#D3C4B4] px-6 py-4 shadow-lg animate-fade-in-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleLinkClick(e, link.href);
                  setMobileMenuOpen(false);
                }}
                className="py-2 text-sm sm:text-base font-sans font-medium text-[#654635] hover:text-[#4A2525] border-b border-[#E6DACB]/40"
              >
                {link.name}
              </a>
            ))}
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              title="Buka compose email di Gmail"
              className="mt-3 text-center border-[1.5px] border-[#4A2525] text-[#4A2525] hover:bg-[#4A2525] hover:text-[#FAF7F2] font-sans font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all"
            >
              Get in Touch ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
