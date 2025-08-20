import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { LegalModal } from "./LegalModal";
import { WalletConnectModal } from "./WalletConnectModal";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useWalletConnect } from "@/hooks/useWalletConnect";
import { useLanguage } from "@/contexts/LanguageContext";
import { auditService } from "@/services/auditService";
import { Eye, EyeOff, Wallet } from "lucide-react";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: 'signin' | 'signup';
  onModeChange: (mode: 'signin' | 'signup') => void;
}

export const AuthModal = ({ open, onOpenChange, mode, onModeChange }: AuthModalProps) => {
  const { language, t } = useLanguage();
  const { signUp, signIn, isLoading } = useAuth();
  const { toast } = useToast();
  const { sessions } = useWalletConnect();
  const [showPassword, setShowPassword] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === 'signup') {
      if (!formState.acceptDataPolicy || !formState.acceptRiskDisclaimer || !formState.acceptFundsOrigin) {
        toast({
          title: "Error",
          description: t('form.submitDisabledHint'),
          variant: "destructive"
        });
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error", 
          description: t('validationErrors.passwordsMismatch'),
          variant: "destructive"
        });
        return;
      }

      const { error } = await signUp(formData.email, formData.password, formData.fullName);
      
      if (!error) {
        // Store consent record for legal compliance
        const userId = crypto.randomUUID();
        const consentRecord = {
          user_id: userId,
          email: formData.email,
          timestamp_utc: new Date().toISOString(),
          ip_address: '192.168.1.1', // Would be real IP in production
          user_agent: navigator.userAgent,
          language: language,
          policy_version_hash: 'sha256_policy_v1.0',
          disclaimer_version_hash: 'sha256_disclaimer_v1.0',
          consent_source: 'signup_modal'
        };
        localStorage.setItem(`consent_${userId}`, JSON.stringify(consentRecord));
        onOpenChange(false);
        resetForm();
      }
    } else {
      const { error } = await signIn(formData.email, formData.password);
      if (!error) {
        onOpenChange(false);
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      phone: '',
      country: '',
      language: language
    });
    setFormState({
      acceptDataPolicy: false,
      acceptRiskDisclaimer: false,
      acceptFundsOrigin: false
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWalletConnect = () => {
    setShowWalletModal(true);
  };

  const activeSessions = Object.values(sessions);
  const isWalletConnected = activeSessions.length > 0;

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
        'signup',
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
    if (mode === 'signin') {
      return formData.email && formData.password;
    } else {
      return formData.fullName && formData.email && formData.password && 
             formData.confirmPassword && formData.country;
    }
  };

  const canSubmit = isFormValid() && 
    (mode === 'signin' || (formState.acceptDataPolicy && formState.acceptRiskDisclaimer && formState.acceptFundsOrigin));

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="glass-card border-border/40 max-w-md max-h-[90vh] overflow-y-auto custom-scrollbar">
          <DialogHeader>
            <DialogTitle className="text-2xl font-manrope text-center">
              {mode === 'signin' ? t('auth.signin') : t('auth.signup')}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <>
                <div>
                  <Label htmlFor="fullName">{t('auth.fullName')}</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="glass-card border-border/40"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t('auth.phone')}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="glass-card border-border/40"
                  />
                </div>

                <div>
                  <Label htmlFor="country">{t('auth.country')}</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
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
              </>
            )}

            <div>
              <Label htmlFor="email">{t('auth.email')}</Label>
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
              <Label htmlFor="password">{t('auth.password')}</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="glass-card border-border/40 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {mode === 'signup' && (
              <>
                <div>
                  <Label htmlFor="confirmPassword">{t('auth.confirmPassword')}</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="glass-card border-border/40"
                    required
                  />
                </div>

                {/* Legal Checkboxes */}
                <div className="space-y-4 pt-4 border-t border-border/20">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
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
                      <Label htmlFor="privacy" className="cursor-pointer">
                        {t('form.checkbox.dataPolicy')}
                        <Button
                          type="button"
                          variant="link"
                          className="text-primary underline p-0 h-auto ml-1"
                          onClick={() => setLegalModal('privacy')}
                        >
                          ({t('legal.dataPolicy.title')})
                        </Button>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="disclaimer"
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
                      <Label htmlFor="disclaimer" className="cursor-pointer">
                        {t('form.checkbox.volatility')}
                        <Button
                          type="button"
                          variant="link"
                          className="text-primary underline p-0 h-auto ml-1"
                          onClick={() => setLegalModal('disclaimer')}
                        >
                          ({t('legal.volatility.title')})
                        </Button>
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="fundsOrigin"
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
                      <Label htmlFor="fundsOrigin" className="cursor-pointer">
                        {t('form.checkbox.fundsOrigin')}
                        <Button
                          type="button"
                          variant="link"
                          className="text-primary underline p-0 h-auto ml-1"
                          onClick={() => setLegalModal('fundOrigin')}
                        >
                          ({t('legal.fundsOrigin.title')})
                        </Button>
                      </Label>
                    </div>
                  </div>
                </div>
              </>
            )}

            <Button
              type="submit"
              className="w-full btn-hero"
              disabled={!canSubmit || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-r-transparent" />
                  {mode === 'signin' ? t('loadingStates.signingIn') : t('loadingStates.creatingAccount')}
                </div>
              ) : (
                mode === 'signin' ? t('auth.signin') : t('auth.createAccount')
              )}
            </Button>

            {/* Social Authentication - Temporalmente deshabilitado hasta configurar OAuth */}
            {false && (
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    {t('auth.continueWith')}
                  </span>
                </div>
              </div>
            )}

            {false && <SocialAuthButtons mode={mode} language={language} />}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {t('common.or')}
                </span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleWalletConnect}
              className="w-full glass-card border-border/40 hover:bg-primary/10"
            >
              <Wallet className="h-4 w-4 mr-2" />
              {isWalletConnected ? t('walletStatus.connected') : t('walletStatus.connect')}
              {isWalletConnected && (
                <span className="ml-2 h-2 w-2 rounded-full bg-green-500" />
              )}
            </Button>

            {mode === 'signin' && (
              <Button type="button" variant="link" className="w-full text-primary">
                {t('auth.forgotPassword')}
              </Button>
            )}

            <div className="text-center text-sm text-muted-foreground">
              {mode === 'signin' ? t('auth.dontHaveAccount') : t('auth.alreadyHaveAccount')}
              <Button
                type="button"
                variant="link"
                className="text-primary underline p-0 ml-1"
                onClick={() => onModeChange(mode === 'signin' ? 'signup' : 'signin')}
              >
                {mode === 'signin' ? t('nav.createAccount') : t('auth.signin')}
              </Button>
            </div>
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

      <WalletConnectModal
        open={showWalletModal}
        onOpenChange={setShowWalletModal}
      />
    </>
  );
};