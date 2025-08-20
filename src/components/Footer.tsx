import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Instagram, Twitter, MessageCircle, Mail, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/ora-ia',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram', 
      icon: Instagram,
      href: 'https://instagram.com/ora_ia',
      color: 'hover:text-pink-500'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      href: 'https://x.com/ora_ia',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      href: 'https://discord.gg/ora-ia',
      color: 'hover:text-indigo-500'
    }
  ];

  const contactInfo = [
    {
      label: 'CEO',
      email: 'jose.guevada@oraglobal.co',
      icon: User
    },
    {
      label: 'CFO', 
      email: 'Fr@oraglobal.co',
      icon: User
    },
    {
      label: t('footer.labels.support'),
      email: 'support@oraglobal.co',
      icon: Mail
    }
  ];

  return (
    <footer className="bg-card/50 border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-manrope font-bold text-primary mb-2">
                ORA IA
              </h3>
              <p className="text-sm text-muted-foreground">
                Asistente de Inteligencia ORA
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t('hero.tagline')}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    className={`text-muted-foreground transition-colors ${social.color}`}
                    onClick={() => window.open(social.href, '_blank')}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-manrope font-semibold">{t('footer.labels.contact')}</h4>
            <div className="space-y-3">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <div key={contact.email} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{contact.label}</p>
                      <Button
                        variant="link"
                        className="text-muted-foreground hover:text-primary p-0 h-auto text-sm"
                        onClick={() => window.open(`mailto:${contact.email}`, '_blank')}
                      >
                        {contact.email}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-manrope font-semibold">{t('footer.labels.legal')}</h4>
            <div className="space-y-2">
              <Button
                variant="link"
                className="text-muted-foreground hover:text-primary p-0 h-auto text-sm justify-start"
              >
                {t('legal.privacy')}
              </Button>
              <Button
                variant="link"
                className="text-muted-foreground hover:text-primary p-0 h-auto text-sm justify-start"
              >
                {t('legal.disclaimer')}
              </Button>
              <Button
                variant="link"
                className="text-muted-foreground hover:text-primary p-0 h-auto text-sm justify-start"
              >
                {t('footer.labels.termsOfService')}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/40" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 {t('footer.rights')}
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            {t('footer.techNote')}
          </p>
        </div>
      </div>
    </footer>
  );
};