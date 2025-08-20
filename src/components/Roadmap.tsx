import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Calendar, Zap, Building, Globe, Smartphone, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const roadmapData = [
  {
    quarter: 'Q4 2025',
    title: 'Lanzamiento',
    status: 'in-progress' as const,
    items: [
      { text: 'Sitio premium + whitelisting', icon: Globe },
      { text: 'Productos iniciales: Staking, Bot Multicripto Spot, El Cazador', icon: Zap },
      { text: 'Sistema de registro y autenticación', icon: Shield }
    ]
  },
  {
    quarter: 'Q1 2026', 
    title: 'Ampliación',
    status: 'planned' as const,
    items: [
      { text: 'Bot Acciones Spot, Bot Futuros Cripto', icon: Zap },
      { text: 'Dashboard v1 (métricas, equity, reportes básicos)', icon: Calendar },
      { text: 'Alianzas OTC LATAM', icon: Building }
    ]
  },
  {
    quarter: 'Q2 2026',
    title: 'Expansión', 
    status: 'planned' as const,
    items: [
      { text: 'ORA Index v1 (whitepaper + rebalanceo mensual)', icon: Calendar },
      { text: 'Licenciamiento El Salvador (sujeto a regulación)', icon: Shield },
      { text: 'API pública v1 (sólo lectura)', icon: Globe }
    ]
  },
  {
    quarter: 'Q3 2026',
    title: 'IA Avanzada',
    status: 'planned' as const,
    items: [
      { text: 'ORA Financial AI Agent v1 (asistente con IA)', icon: Zap },
      { text: 'App móvil (iOS/Android)', icon: Smartphone },
      { text: 'SOC 2 Type I (controles)', icon: Shield }
    ]
  },
  {
    quarter: 'Q4 2026',
    title: 'Institucional',
    status: 'planned' as const,
    items: [
      { text: 'Portal Pro (multi-cuenta, institucional)', icon: Building },
      { text: 'Custodia MPC con proveedor regulado', icon: Shield },
      { text: 'ISO/IEC 27001 kickoff', icon: Shield }
    ]
  }
];

export const Roadmap = () => {
  const { t } = useLanguage();

  const getStatusBadge = (status: 'done' | 'in-progress' | 'planned') => {
    switch (status) {
      case 'done':
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <CheckCircle className="h-3 w-3 mr-1" />
            {t('roadmap.status.completed')}
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Clock className="h-3 w-3 mr-1" />
            {t('roadmap.status.inProgress')}
          </Badge>
        );
      case 'planned':
        return (
          <Badge className="bg-gray-500/20 text-gray-400 border-gray-500/30">
            <Calendar className="h-3 w-3 mr-1" />
            {t('roadmap.status.planned')}
          </Badge>
        );
    }
  };

  const getStatusIcon = (status: 'done' | 'in-progress' | 'planned') => {
    switch (status) {
      case 'done':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-blue-500 animate-pulse" />;
      case 'planned':
        return <Calendar className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold mb-6">
            {t('roadmap.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('roadmapContent.subtitle')}
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-border"></div>
          
          {roadmapData.map((milestone, index) => (
            <div key={milestone.quarter} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center">
                  {getStatusIcon(milestone.status)}
                </div>
              </div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="glass-card border-border/40 hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-manrope">{milestone.quarter}</CardTitle>
                      {getStatusBadge(milestone.status)}
                    </div>
                    <h3 className="text-lg font-semibold text-primary">{milestone.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {milestone.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <Icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{item.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {roadmapData.map((milestone) => (
            <Card key={milestone.quarter} className="glass-card border-border/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(milestone.status)}
                    <div>
                      <CardTitle className="text-lg font-manrope">{milestone.quarter}</CardTitle>
                      <h3 className="text-primary font-semibold">{milestone.title}</h3>
                    </div>
                  </div>
                  {getStatusBadge(milestone.status)}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {milestone.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <Icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regulatory Note */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-6 border-border/40 rounded-2xl text-center">
            <h3 className="font-manrope font-semibold mb-2">{t('roadmapContent.regulatoryNote.title')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('roadmapContent.regulatoryNote.content')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};