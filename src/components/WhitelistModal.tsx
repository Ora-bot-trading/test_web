import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LegalModal } from "./LegalModal";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { auditService } from "@/services/auditService";
import { Mail, CheckCircle } from "lucide-react";

interface WhitelistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
}

export const WhitelistModal = ({ open, onOpenChange, productId }: WhitelistModalProps) => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [step, setStep] = useState<'form' | 'success'>('form');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    language: language
  });
  
  const [legalModal, setLegalModal] = useState<'privacy' | 'disclaimer' | 'fundOrigin' | null>(null);
  const [formState, setFormState] = useState({
    acceptDataPolicy: false,
    acceptRiskDisclaimer: false,
    acceptFundsOrigin: false
  });

  const countries = [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 
    'Paraguay', 'Perú', 'Uruguay', 'Venezuela', 'México', 'España', 
    'Estados Unidos', 'Canadá', 'Francia', 'Reino Unido', 'Otro'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.acceptDataPolicy || !formState.acceptRiskDisclaimer || !formState.acceptFundsOrigin) {
      toast({
        title: "Error",
        description: t('form.submitDisabledHint'),
        variant: "destructive"
      });
      return;
    }

    // Simulate whitelist submission
    const whitelistRecord = {
      id: crypto.randomUUID(),
      productId,
      ...formData,
      timestamp: new Date().toISOString(),
      ip_address: '192.168.1.1',
      user_agent: navigator.userAgent
    };

    localStorage.setItem(`whitelist_${whitelistRecord.id}`, JSON.stringify(whitelistRecord));

    // Simulate sending congratulations email
    setTimeout(() => {
      setStep('success');
    }, 500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetAndClose = () => {
    setStep('form');
    setFormData({
      name: '',
      email: '',
      phone: '',
      country: '',
      language: language
    });
    setFormState({
      acceptDataPolicy: false,
      acceptRiskDisclaimer: false,
      acceptFundsOrigin: false
    });
    onOpenChange(false);
  };

  // Función para manejar la aceptación de términos legales
  const handleLegalAcceptance = async (type: 'privacy' | 'disclaimer' | 'fundOrigin') => {
    const userId = crypto.randomUUID(); // En producción, esto vendría del contexto de usuario
    
    // Mapear tipos a docTypes de auditoría
    const docTypeMap = {
      'privacy': 'DATA_POLICY' as const,
      'disclaimer': 'VOLATILITY_RISK' as const,
      'fundOrigin': 'FUNDS_ORIGIN' as const
    };

    try {
      // Registrar aceptación para auditoría
      const record = await auditService.createAcceptanceRecord(
        userId,
        docTypeMap[type],
        'whitelist',
        language
      );
      await auditService.recordAcceptance(record);

      // Actualizar estado del formulario
      if (type === 'privacy') {
        setFormState(s => ({ ...s, acceptDataPolicy: true }));
      } else if (type === 'disclaimer') {
        setFormState(s => ({ ...s, acceptRiskDisclaimer: true }));
      } else if (type === 'fundOrigin') {
        setFormState(s => ({ ...s, acceptFundsOrigin: true }));
      }
    } catch (error) {
      console.error('Error recording legal acceptance:', error);
      // Continuar con la actualización del estado aunque falle la auditoría
      if (type === 'privacy') {
        setFormState(s => ({ ...s, acceptDataPolicy: true }));
      } else if (type === 'disclaimer') {
        setFormState(s => ({ ...s, acceptRiskDisclaimer: true }));
      } else if (type === 'fundOrigin') {
        setFormState(s => ({ ...s, acceptFundsOrigin: true }));
      }
    }
  };

  // Validar si el formulario está completo
  const isFormValid = () => {
    return formData.name && formData.email && formData.country;
  };

  const canSubmit = isFormValid() && formState.acceptDataPolicy && formState.acceptRiskDisclaimer && formState.acceptFundsOrigin;

  if (step === 'success') {
    return (
      <Dialog open={open} onOpenChange={resetAndClose}>
        <DialogContent className="glass-card border-border/40 max-w-md text-center">
          <div className="space-y-6">
            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            
            <div>
              <DialogTitle className="text-2xl font-manrope text-green-500 mb-4">
                {t('whitelist.success')}
              </DialogTitle>
              <p className="text-muted-foreground leading-relaxed">
                {t('whitelist.emailBody')}
              </p>
            </div>

            <div className="bg-muted/20 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Mail className="h-4 w-4" />
                {t('depositsContent.emailSentTo')} {formData.email}
              </div>
              <p className="text-xs text-muted-foreground">
                {t('depositsContent.checkSpam')}
              </p>
            </div>

            <Button onClick={resetAndClose} className="btn-hero w-full">
              {t('whitelist.accessPanel')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="glass-card border-border/40 max-w-md max-h-[90vh] overflow-y-auto custom-scrollbar">
          <DialogHeader>
            <DialogTitle className="text-2xl font-manrope text-center">
              {t('cta.join')}
            </DialogTitle>
            <p className="text-center text-muted-foreground text-sm">
              {t('depositsContent.priorityAccess')}
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">{t('whitelist.formLabels.fullName')}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="glass-card border-border/40"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">{t('whitelist.formLabels.email')}</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="glass-card border-border/40"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">{t('whitelist.formLabels.phone')}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="glass-card border-border/40"
              />
            </div>

            <div>
              <Label htmlFor="country">{t('whitelist.formLabels.country')}</Label>
              <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)} required>
                <SelectTrigger className="glass-card border-border/40">
                  <SelectValue placeholder={t('placeholders.selectCountry')} />
                </SelectTrigger>
                <SelectContent className="glass-card border-border/40">
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Deposits Information */}
            <div className="bg-muted/20 p-4 rounded-lg border border-border/20">
              <h4 className="font-semibold mb-2">{t('depositsContent.depositsInfo')}</h4>
              <p className="text-sm text-muted-foreground mb-2">{t('deposits.note')}</p>
              <p className="text-xs text-destructive">{t('deposits.strict')}</p>
            </div>

            {/* Legal Checkboxes */}
            <div className="space-y-4 pt-4 border-t border-border/20">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy-whitelist"
                  checked={formState.acceptDataPolicy}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormState(s => ({ ...s, acceptDataPolicy: true }));
                    } else {
                      setFormState(s => ({ ...s, acceptDataPolicy: false }));
                    }
                  }}
                  className="mt-1"
                />
                <div className="text-sm leading-relaxed">
                  <Label htmlFor="privacy-whitelist" className="cursor-pointer">
                    {t('form.checkbox.dataPolicy')}
                    <Button
                      type="button"
                      variant="link"
                      className="text-primary underline p-0 h-auto ml-1"
                      onClick={() => setLegalModal('privacy')}
                    >
                      ({t('depositsContent.readFullText')})
                    </Button>
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="disclaimer-whitelist"
                  checked={formState.acceptRiskDisclaimer}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormState(s => ({ ...s, acceptRiskDisclaimer: true }));
                    } else {
                      setFormState(s => ({ ...s, acceptRiskDisclaimer: false }));
                    }
                  }}
                  className="mt-1"
                />
                <div className="text-sm leading-relaxed">
                  <Label htmlFor="disclaimer-whitelist" className="cursor-pointer">
                    {t('form.checkbox.volatility')}
                    <Button
                      type="button"
                      variant="link"
                      className="text-primary underline p-0 h-auto ml-1"
                      onClick={() => setLegalModal('disclaimer')}
                    >
                      ({t('depositsContent.readFullText')})
                    </Button>
                  </Label>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="fundsOrigin-whitelist"
                  checked={formState.acceptFundsOrigin}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFormState(s => ({ ...s, acceptFundsOrigin: true }));
                    } else {
                      setFormState(s => ({ ...s, acceptFundsOrigin: false }));
                    }
                  }}
                  className="mt-1"
                />
                <div className="text-sm leading-relaxed">
                  <Label htmlFor="fundsOrigin-whitelist" className="cursor-pointer">
                    {t('form.checkbox.fundsOrigin')}
                    <Button
                      type="button"
                      variant="link"
                      className="text-primary underline p-0 h-auto ml-1"
                      onClick={() => setLegalModal('fundOrigin')}
                    >
                      ({t('depositsContent.readFullText')})
                    </Button>
                  </Label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full btn-hero"
              disabled={!canSubmit}
            >
              {t('cta.join')}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <LegalModal
        open={legalModal !== null}
        onOpenChange={() => setLegalModal(null)}
        type={legalModal}
        onAccept={handleLegalAcceptance}
        isAccepted={
          (legalModal === 'privacy' && formState.acceptDataPolicy) ||
          (legalModal === 'disclaimer' && formState.acceptRiskDisclaimer) ||
          (legalModal === 'fundOrigin' && formState.acceptFundsOrigin)
        }
      />
    </>
  );
};