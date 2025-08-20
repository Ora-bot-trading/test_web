import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useWalletConnect } from '@/hooks/useWalletConnect';
import { useToast } from '@/hooks/use-toast';
import { 
  Wallet, 
  TrendingUp, 
  History, 
  Settings,
  ExternalLink,
  Copy,
  Zap,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface WalletDashboardProps {
  className?: string;
}

const SUPPORTED_TOKENS = [
  {
    symbol: 'USDT',
    name: 'Tether USD',
    networks: ['Polygon', 'Tron'],
    icon: '₮',
    balance: 0,
    usdValue: 0
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    networks: ['Polygon', 'Ethereum'],
    icon: '⊙',
    balance: 0,
    usdValue: 0
  }
];

export const WalletDashboard: React.FC<WalletDashboardProps> = ({ className }) => {
  const { sessions, disconnect } = useWalletConnect();
  const { toast } = useToast();

  const activeSessions = Object.values(sessions);
  const isConnected = activeSessions.length > 0;

  const handleCopyAddress = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      toast({
        title: "Dirección copiada",
        description: "Dirección de wallet copiada al portapapeles"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar la dirección",
        variant: "destructive"
      });
    }
  };

  const handleDisconnect = async (topic: string) => {
    try {
      await disconnect(topic);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const totalBalance = SUPPORTED_TOKENS.reduce((sum, token) => sum + token.usdValue, 0);

  if (!isConnected) {
    return (
      <Card className={`glass-card ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-muted-foreground" />
            Wallet
          </CardTitle>
          <CardDescription>
            No hay wallets conectadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground py-8">
            <Wallet className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">Conecta tu wallet para comenzar</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Wallet Overview */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Wallet Overview
            </div>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
              <CheckCircle className="h-3 w-3 mr-1" />
              Conectada
            </Badge>
          </CardTitle>
          <CardDescription>
            Balance total: ${totalBalance.toFixed(2)} USD
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Connected Sessions */}
          {activeSessions.map((session) => {
            // Mock wallet address for demo
            const mockAddress = '0x1234...5678';
            
            return (
              <div key={session.topic} className="p-4 border border-border/40 rounded-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{session.peer.metadata.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {mockAddress}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyAddress(mockAddress)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDisconnect(session.topic)}
                    >
                      Desconectar
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Token Balances */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Balances de Tokens
          </CardTitle>
          <CardDescription>
            Tokens soportados para trading automático
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {SUPPORTED_TOKENS.map((token, index) => (
              <div key={token.symbol} className="flex items-center justify-between p-3 border border-border/40 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-lg font-bold">{token.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium">{token.symbol}</p>
                    <p className="text-sm text-muted-foreground">{token.name}</p>
                    <div className="flex gap-1 mt-1">
                      {token.networks.map((network) => (
                        <Badge key={network} variant="outline" className="text-xs">
                          {network}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{token.balance.toFixed(4)} {token.symbol}</p>
                  <p className="text-sm text-muted-foreground">${token.usdValue.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex items-center justify-center p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center gap-2 text-yellow-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">
                Deposita tokens para empezar a hacer trading automático
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            Acciones Rápidas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Ver Portfolio
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Historial
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configurar
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Explorador
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};