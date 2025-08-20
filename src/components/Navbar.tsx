import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { AuthModal } from "./AuthModal";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.insights'), href: '#insights' },
    { label: t('nav.roadmap'), href: '#roadmap' },
    { label: t('nav.support'), href: '#support' },
  ];

  const NavContent = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          onClick={() => {
            setMobileMenuOpen(false);
            document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
        >
          {item.label}
        </Button>
      ))}
      
      <div className="flex items-center gap-3">
        <LanguageSelector 
          currentLanguage={language} 
          onLanguageChange={setLanguage} 
        />
        <Button
          variant="ghost"
          onClick={() => openAuth('signin')}
          className="text-foreground hover:text-primary hover:bg-accent/10"
        >
          {t('nav.signin')}
        </Button>
        <Button
          onClick={() => openAuth('signup')}
          className="btn-hero"
        >
          {t('nav.createAccount')}
        </Button>
      </div>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-manrope font-bold text-primary">
                ORA IA
              </h1>
              <span className="hidden sm:block ml-2 text-sm text-muted-foreground">
                Asistente de Inteligencia ORA
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <NavContent />
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass-card border-border/40 w-80">
                <div className="flex flex-col gap-4 mt-8">
                  <NavContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <AuthModal
        open={authModalOpen}
        onOpenChange={setAuthModalOpen}
        mode={authMode}
        onModeChange={setAuthMode}

      />
    </>
  );
};