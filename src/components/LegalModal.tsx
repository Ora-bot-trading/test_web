import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle, Circle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'privacy' | 'disclaimer' | 'fundOrigin' | null;
  onAccept: (type: 'privacy' | 'disclaimer' | 'fundOrigin') => void;
  isAccepted?: boolean;
}

export const LegalModal = ({ open, onOpenChange, type, onAccept, isAccepted = false }: LegalModalProps) => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [ctaText, setCtaText] = useState("");

  // Detectar overflow cuando se abre el modal o cambia el contenido
  useEffect(() => {
    if (open && type && contentRef.current && scrollRef.current) {
      const checkOverflow = () => {
        const content = contentRef.current;
        const scrollContainer = scrollRef.current;
        
        if (content && scrollContainer) {
          const contentElement = scrollContainer.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement;
          if (contentElement) {
            const hasVerticalOverflow = content.scrollHeight > contentElement.clientHeight;
            setHasOverflow(hasVerticalOverflow);
            setHasScrolledToEnd(!hasVerticalOverflow);
            
            // Configurar texto del CTA inicial
            if (isAccepted) {
              setCtaText(t('common.close'));
            } else if (!hasVerticalOverflow) {
              // Sin overflow: mostrar directamente "Aceptar..."
              setCtaText(getAcceptText());
            } else {
              // Con overflow: mostrar "Continuar leyendo"
              setCtaText(t('legal.continueReading'));
            }
          }
        }
      };

      // Usar setTimeout para asegurar que el DOM esté completamente renderizado
      const timer = setTimeout(checkOverflow, 100);
      return () => clearTimeout(timer);
    }
  }, [open, type, isAccepted, t]);

  // Reset estado cuando se abre/cierra el modal
  useEffect(() => {
    if (open && type) {
      setScrollProgress(0);
      setHasScrolledToEnd(false);
    }
  }, [open, type]);

  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const contentElement = scrollContainer.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement;
    if (!contentElement) return;

    const { scrollTop, scrollHeight, clientHeight } = contentElement;
    const progress = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 1;
    setScrollProgress(progress);

    // Detectar si llegó al final (umbral de 30px desde el final)
    const nearBottom = (scrollHeight - scrollTop - clientHeight) <= 30;
    if (nearBottom && !hasScrolledToEnd) {
      setHasScrolledToEnd(true);
      if (!isAccepted) {
        setCtaText(getAcceptText());
      }
    }
  };

  const getAcceptText = () => {
    if (type === 'privacy') {
      return t('legal.dataPolicy.ctaAccept');
    } else if (type === 'disclaimer') {
      return t('legal.volatility.ctaAccept');
    } else if (type === 'fundOrigin') {
      return t('legal.fundsOrigin.ctaAccept');
    }
    return t('legal.accept');
  };

  const handleCTAClick = () => {
    if (isAccepted) {
      // Si ya está aceptado, solo cerrar
      onOpenChange(false);
      return;
    }

    if (hasOverflow && !hasScrolledToEnd) {
      // Si hay overflow y no ha llegado al final, hacer scroll
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        const contentElement = scrollContainer.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement;
        if (contentElement && contentRef.current) {
          contentElement.scrollTo({
            top: contentRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }
    } else {
      // Si no hay overflow o ya llegó al final, aceptar
      if (type) {
        onAccept(type);
      }
      onOpenChange(false);
    }
  };

  const getContent = () => {
    if (type === 'privacy') {
      return t('legal.dataPolicyText');
    } else if (type === 'disclaimer') {
      return t('legal.volatilityText');
    } else if (type === 'fundOrigin') {
      return t('legal.fundsOriginText');
    }
    return '';
  };

  const getTitle = () => {
    if (type === 'privacy') {
      return t('legal.dataPolicy.title');
    } else if (type === 'disclaimer') {
      return t('legal.volatility.title');
    } else if (type === 'fundOrigin') {
      return t('legal.fundsOrigin.title');
    }
    return '';
  };

  if (!type) return null;

  const content = getContent();
  const title = getTitle();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border/40 max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl font-manrope text-center flex items-center justify-center gap-2">
            {isAccepted ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : hasScrolledToEnd ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Progress Bar - solo mostrar si hay overflow */}
          {hasOverflow && (
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          )}

          {/* Content */}
          <ScrollArea 
            className="h-96 custom-scrollbar" 
            ref={scrollRef}
            onScrollCapture={handleScroll}
          >
            <div 
              ref={contentRef}
              className="pr-4 text-sm leading-relaxed whitespace-pre-line"
            >
              {content}
            </div>
          </ScrollArea>

          {/* Scroll Requirement Message - solo mostrar si hay overflow y no ha llegado al final */}
          {hasOverflow && !hasScrolledToEnd && !isAccepted && (
            <div className="text-center text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg">
              {t('legal.scrollRequired')}
            </div>
          )}

          {/* CTA Button */}
          <Button
            onClick={handleCTAClick}
            className="w-full"
            variant={isAccepted || hasScrolledToEnd ? "default" : "outline"}
          >
            {ctaText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};