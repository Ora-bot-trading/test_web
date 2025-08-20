import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t('howItWorks.step1'),
      description: t('steps.secureRegistration'),
      icon: Users
    },
    {
      number: "2", 
      title: t('howItWorks.step2'),
      description: t('steps.setParticipation'),
      icon: TrendingUp
    },
    {
      number: "3",
      title: t('howItWorks.step3'), 
      description: t('steps.realTimeMonitoring'),
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Us */}
          <div>
            <h2 className="text-4xl font-manrope font-bold mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('about.description')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                <span>{t('experience.financialMarkets')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <span>{t('experience.riskManagement')}</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-primary" />
                <span>{t('experience.portfolioOptimization')}</span>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-3xl font-manrope font-bold mb-8">
              {t('howItWorks.title')}
            </h3>
            <div className="space-y-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.number} className="glass-card border-border/40">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-primary">{step.number}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{step.title}</h4>
                          <p className="text-muted-foreground text-sm">{step.description}</p>
                        </div>
                        <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};