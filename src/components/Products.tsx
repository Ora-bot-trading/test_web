
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhitelistModal } from "./WhitelistModal";
import { Bot, TrendingUp, Shield, Zap, Target, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const productIcons = {
  multicrypto: Bot,
  staking: Shield,
  stocks: TrendingUp,
  futures: Zap,
  hunter: Target
};

export const Products = () => {
  const { language, t } = useLanguage() as any;
  const [whitelistOpen, setWhitelistOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const products = [
    {
      id: 'multicrypto',
      title: t('products.multicrypto.title'),
      description: t('products.multicrypto.description'),
      target: '2%',
      risk: t('riskLevels.medium'),
      icon: productIcons.multicrypto
    },
    {
      id: 'staking',
      title: t('products.staking.title'),
      description: t('products.staking.description'),
      target: '1%',
      risk: t('riskLevels.low'),
      icon: productIcons.staking
    },
    {
      id: 'stocks',
      title: t('products.stocks.title'),
      description: t('products.stocks.description'),
      target: '2%',
      risk: t('riskLevels.medium'),
      icon: productIcons.stocks
    },
    {
      id: 'futures',
      title: t('products.futures.title'),
      description: t('products.futures.description'),
      target: '3%',
      risk: t('riskLevels.high'),
      icon: productIcons.futures
    },
    {
      id: 'hunter',
      title: t('products.hunter.title'),
      description: t('products.hunter.description'),
      target: 'Variable',
      risk: t('riskLevels.veryHigh'),
      icon: productIcons.hunter,
      isSubscription: true
    }
  ];

  const getRiskColor = (risk: string) => {
    const lowRisk = t('riskLevels.low');
    const mediumRisk = t('riskLevels.medium');
    const highRisk = t('riskLevels.high');
    const veryHighRisk = t('riskLevels.veryHigh');
    
    switch (risk) {
      case lowRisk: return 'bg-green-500/20 text-green-400';
      case mediumRisk: return 'bg-yellow-500/20 text-yellow-400';
      case highRisk: return 'bg-orange-500/20 text-orange-400';
      case veryHighRisk: return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const openWhitelist = (productId: string) => {
    setSelectedProduct(productId);
    setWhitelistOpen(true);
  };

  return (
    <>
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
              {t('products.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.id} className="glass-card border-border/40 hover:shadow-glow transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-manrope group-hover:text-primary transition-colors">
                            {product.title}
                          </CardTitle>
                          <div className="flex gap-2 mt-2">
                            {/* @ts-ignore */}
                            <Badge className="bg-primary/20 text-primary border-primary/30">
                              {t('products.comingSoon')}
                            </Badge>
                            {/* @ts-ignore */}
                            <Badge className={getRiskColor(product.risk)}>
                              {product.risk}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </CardDescription>

                    {product.id === 'hunter' && (
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">{t('products.hunter.beginner')}</p>
                        <p className="text-muted-foreground">{t('products.hunter.expert')}</p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-border/20">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{t('products.monthlyTarget')}</p>
                        <p className="text-lg font-bold text-primary">{product.target}</p>
                      </div>
                      <Button
                        onClick={() => openWhitelist(product.id)}
                        className="btn-hero"
                      >
                        {t('products.joinWhitelist')}
                      </Button>
                    </div>

                    {product.risk === t('riskLevels.high') || product.risk === t('riskLevels.veryHigh') ? (
                      <div className="flex items-start gap-2 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                        <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-destructive">
                          {t('highRiskWarning')}
                        </p>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Deposits Note */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="glass-card p-6 border-border/40 rounded-2xl text-center">
              <h3 className="font-manrope font-semibold mb-2">{t('depositsContent.title')}</h3>
              <p className="text-muted-foreground">{t('deposits.note')}</p>
              <p className="text-sm text-destructive mt-2">{t('deposits.warning')}</p>
            </div>
          </div>
        </div>
      </section>

      <WhitelistModal
        open={whitelistOpen}
        onOpenChange={setWhitelistOpen}
        productId={selectedProduct}

      />
    </>
  );
};