import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useWalletConnect } from '@/hooks/useWalletConnect';
import { useToast } from '@/hooks/use-toast';
import { 
  Wallet, 
  QrCode, 
  Smartphone, 
  Copy, 
  ExternalLink,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';

interface WalletConnectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const POPULAR_WALLETS = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: '🦊',
    description: 'Wallet más popular para Ethereum',
    downloadUrl: 'https://metamask.io/download/'
  },
  {
    id: 'trust',
    name: 'Trust Wallet',
    icon: '🛡️',
    description: 'Wallet móvil multi-chain',
    downloadUrl: 'https://trustwallet.com/'
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: '🔵',
    description: 'Wallet de Coinbase',
    downloadUrl: 'https://wallet.coinbase.com/'
  },
  {
    id: 'walletconnect',
    name: 'Rainbow',
    icon: '🌈',
    description: 'Wallet colorful y fácil de usar',
    downloadUrl: 'https://rainbow.me/'
  }
];

export const WalletConnectModal: React.FC<WalletConnectModalProps> = ({
  open,
  onOpenChange
}) => {
  const [uri, setUri] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [activeTab, setActiveTab] = useState<'qr' | 'manual'>('qr');
  
  const { 
    connect, 
    isInitialized, 
    sessions, 
    proposals, 
    approveSession, 
    rejectSession 
  } = useWalletConnect();
  
  const { toast } = useToast();

  // Generate a mock WalletConnect URI for demo
  useEffect(() => {
    if (open && isInitialized) {
      // This would typically come from pairing creation
      const mockUri = `wc:${Date.now()}@2?relay-protocol=irn&symKey=demo`;
      setUri(mockUri);
    }
  }, [open, isInitialized]);

  const handleConnect = async () => {
    if (!uri.trim()) {
      toast({
        title: "Error",
        description: "Por favor ingresa un URI válido",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    try {
      await connect(uri);
      toast({
        title: "Conectando...",
        description: "Revisa tu wallet para aprobar la conexión"
      });
    } catch (error) {
      console.error('Connection error:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(uri);
      toast({
        title: "Copiado",
        description: "URI copiado al portapapeles"
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo copiar al portapapeles",
        variant: "destructive"
      });
    }
  };

  const handleApproveSession = async (proposalId: number) => {
    const proposal = proposals[proposalId];
    if (proposal) {
      await approveSession(proposal);
      onOpenChange(false);
    }
  };

  const handleRejectSession = async (proposalId: number) => {
    const proposal = proposals[proposalId];
    if (proposal) {
      await rejectSession(proposal);
    }
  };

  const pendingProposals = Object.values(proposals);
  const activeSessions = Object.values(sessions);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-manrope">
            <Wallet className="h-6 w-6 text-primary" />
            Conectar Wallet
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status Display */}
          {activeSessions.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Wallets Conectadas
              </h3>
              {activeSessions.map((session) => (
                <div key={session.topic} className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Wallet Conectada</span>
                  </div>
                  <Badge variant="secondary">Activa</Badge>
                </div>
              ))}
              <Separator />
            </div>
          )}

          {/* Pending Proposals */}
          {pendingProposals.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">
                Solicitudes Pendientes
              </h3>
              {pendingProposals.map((proposal) => (
                <div key={proposal.id} className="p-4 border border-border/40 rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium">{proposal.params.proposer.metadata.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {proposal.params.proposer.metadata.description}
                      </p>
                    </div>
                    <Badge variant="outline">Pendiente</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => handleApproveSession(proposal.id)}
                      className="flex-1"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Aprobar
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleRejectSession(proposal.id)}
                      className="flex-1"
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Rechazar
                    </Button>
                  </div>
                </div>
              ))}
              <Separator />
            </div>
          )}

          {/* Connection Interface */}
          {activeSessions.length === 0 && (
            <>
              {/* Tab Selector */}
              <div className="flex bg-muted rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('qr')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${
                    activeTab === 'qr' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <QrCode className="h-4 w-4" />
                  QR Code
                </button>
                <button
                  onClick={() => setActiveTab('manual')}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md transition-all ${
                    activeTab === 'manual' 
                      ? 'bg-background text-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Smartphone className="h-4 w-4" />
                  Manual
                </button>
              </div>

              {/* QR Code Tab */}
              {activeTab === 'qr' && (
                <div className="space-y-4">
                  <div className="bg-white p-8 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <QrCode className="h-16 w-16 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-600">
                        Escanea con tu wallet móvil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Input
                      value={uri}
                      readOnly
                      className="text-xs"
                      placeholder="URI de conexión..."
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={copyToClipboard}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Manual Tab */}
              {activeTab === 'manual' && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      URI de WalletConnect
                    </label>
                    <Input
                      value={uri}
                      onChange={(e) => setUri(e.target.value)}
                      placeholder="wc:..."
                      className="font-mono text-xs"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleConnect}
                    disabled={isConnecting || !isInitialized}
                    className="w-full"
                  >
                    {isConnecting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Conectando...
                      </>
                    ) : (
                      <>
                        <Wallet className="h-4 w-4 mr-2" />
                        Conectar Wallet
                      </>
                    )}
                  </Button>
                </div>
              )}

              <Separator />

              {/* Popular Wallets */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Wallets Populares
                </h3>
                <ScrollArea className="h-32">
                  <div className="space-y-2">
                    {POPULAR_WALLETS.map((wallet) => (
                      <div
                        key={wallet.id}
                        className="flex items-center justify-between p-3 border border-border/40 rounded-lg hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{wallet.icon}</span>
                          <div>
                            <p className="font-medium text-sm">{wallet.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {wallet.description}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(wallet.downloadUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};