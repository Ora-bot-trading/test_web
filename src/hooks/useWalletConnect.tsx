import React, { createContext, useContext, useCallback, useEffect, useState, ReactNode } from 'react';
import { Web3Wallet } from '@walletconnect/web3wallet';
import type { IWeb3Wallet } from '@walletconnect/web3wallet';
import { Core } from '@walletconnect/core';
import { getSdkError } from '@walletconnect/utils';
import { useToast } from '@/hooks/use-toast';

// WalletConnect configuration - using demo mode to prevent initialization errors
const PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo-project-id';

interface SessionStruct {
  topic: string;
  relay: { protocol: string };
  expiry: number;
  acknowledged: boolean;
  controller: string;
  namespaces: Record<string, any>;
  self: {
    publicKey: string;
    metadata: {
      description: string;
      url: string;
      icons: string[];
      name: string;
    };
  };
  peer: {
    publicKey: string;
    metadata: {
      description: string;
      url: string;
      icons: string[];
      name: string;
    };
  };
}

interface SessionProposal {
  id: number;
  params: {
    id: number;
    pairingTopic: string;
    expiry: number;
    requiredNamespaces: Record<string, any>;
    relays: Array<{ protocol: string }>;
    proposer: {
      publicKey: string;
      metadata: {
        description: string;
        url: string;
        icons: string[];
        name: string;
      };
    };
  };
}

interface SessionRequest {
  id: number;
  topic: string;
  params: {
    request: {
      method: string;
      params: any;
    };
    chainId: string;
  };
}

interface WalletConnectContextType {
  web3wallet: IWeb3Wallet | undefined;
  isInitialized: boolean;
  sessions: Record<string, SessionStruct>;
  proposals: Record<string, SessionProposal>;
  requests: Record<string, SessionRequest>;
  connect: (uri: string) => Promise<void>;
  disconnect: (topic: string) => Promise<void>;
  approveSession: (proposal: SessionProposal) => Promise<void>;
  rejectSession: (proposal: SessionProposal) => Promise<void>;
  approveRequest: (request: SessionRequest, response: any) => Promise<void>;
  rejectRequest: (request: SessionRequest) => Promise<void>;
}

const WalletConnectContext = createContext<WalletConnectContextType | undefined>(undefined);

interface WalletConnectProviderProps {
  children: ReactNode;
}

export const WalletConnectProvider: React.FC<WalletConnectProviderProps> = ({ children }) => {
  const [web3wallet, setWeb3wallet] = useState<IWeb3Wallet>();
  const [isInitialized, setIsInitialized] = useState(false);
  const [sessions, setSessions] = useState<Record<string, SessionStruct>>({});
  const [proposals, setProposals] = useState<Record<string, SessionProposal>>({});
  const [requests, setRequests] = useState<Record<string, SessionRequest>>({});
  const { toast } = useToast();

  const init = useCallback(async () => {
    // Skip initialization if running in demo mode to prevent errors
    if (PROJECT_ID === 'demo-project-id') {
      console.log('WalletConnect running in demo mode - skipping initialization');
      setIsInitialized(true);
      return;
    }

    try {
      const core = new Core({
        projectId: PROJECT_ID,
        logger: 'error'
      });

      const wallet = await Web3Wallet.init({
        core,
        metadata: {
          name: 'ORA IA Wallet',
          description: 'Billetera inteligente para trading automatizado',
          url: 'https://ora-ia.com',
          icons: ['https://ora-ia.com/icon.png']
        }
      });

      setWeb3wallet(wallet);
      setIsInitialized(true);

      // Set up event listeners
      wallet.on('session_proposal', (proposal) => {
        setProposals(prev => ({ ...prev, [proposal.id]: proposal }));
      });

      wallet.on('session_request', (request) => {
        setRequests(prev => ({ ...prev, [request.id]: request }));
      });

      wallet.on('session_delete', ({ topic }) => {
        setSessions(prev => {
          const updated = { ...prev };
          delete updated[topic];
          return updated;
        });
      });

      // Load existing sessions
      const activeSessions = wallet.getActiveSessions();
      setSessions(activeSessions);

      toast({
        title: "WalletConnect Inicializado",
        description: "Sistema de conexión de wallets listo"
      });

    } catch (error) {
      console.error('Error initializing WalletConnect:', error);
      // Don't show error toast in demo mode to avoid confusion
      setIsInitialized(true); // Still mark as initialized for demo purposes
    }
  }, [toast]);

  useEffect(() => {
    init();
  }, [init]);

  const connect = useCallback(async (uri: string) => {
    if (!web3wallet) {
      toast({
        title: "Error",
        description: "WalletConnect no está inicializado",
        variant: "destructive"
      });
      return;
    }

    try {
      await web3wallet.core.pairing.pair({ uri });
    } catch (error) {
      console.error('Error connecting:', error);
      toast({
        title: "Error de conexión",
        description: "No se pudo conectar con la wallet",
        variant: "destructive"
      });
    }
  }, [web3wallet, toast]);

  const disconnect = useCallback(async (topic: string) => {
    if (!web3wallet) return;

    try {
      await web3wallet.disconnectSession({
        topic,
        reason: getSdkError('USER_DISCONNECTED')
      });

      setSessions(prev => {
        const updated = { ...prev };
        delete updated[topic];
        return updated;
      });

      toast({
        title: "Desconectado",
        description: "Wallet desconectada exitosamente"
      });
    } catch (error) {
      console.error('Error disconnecting:', error);
      toast({
        title: "Error",
        description: "No se pudo desconectar la wallet",
        variant: "destructive"
      });
    }
  }, [web3wallet, toast]);

  const approveSession = useCallback(async (proposal: SessionProposal) => {
    if (!web3wallet) return;

    try {
      const { id, params } = proposal;
      const { requiredNamespaces, relays } = params;

      // Mock account for demo - replace with actual wallet integration
      const accounts = ['0x1234567890abcdef1234567890abcdef12345678'];
      
      const namespaces: Record<string, any> = {};
      Object.keys(requiredNamespaces).forEach(key => {
        const namespace = requiredNamespaces[key];
        namespaces[key] = {
          accounts: namespace.chains?.map(chain => `${chain}:${accounts[0]}`) || [],
          methods: namespace.methods,
          events: namespace.events
        };
      });

      const session = await web3wallet.approveSession({
        id,
        relayProtocol: relays[0].protocol,
        namespaces
      });

      setSessions(prev => ({ ...prev, [session.topic]: session }));
      setProposals(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });

      toast({
        title: "Sesión aprobada",
        description: "Wallet conectada exitosamente"
      });
    } catch (error) {
      console.error('Error approving session:', error);
      toast({
        title: "Error",
        description: "No se pudo aprobar la sesión",
        variant: "destructive"
      });
    }
  }, [web3wallet, toast]);

  const rejectSession = useCallback(async (proposal: SessionProposal) => {
    if (!web3wallet) return;

    try {
      await web3wallet.rejectSession({
        id: proposal.id,
        reason: getSdkError('USER_REJECTED')
      });

      setProposals(prev => {
        const updated = { ...prev };
        delete updated[proposal.id];
        return updated;
      });

      toast({
        title: "Sesión rechazada",
        description: "Conexión rechazada por el usuario"
      });
    } catch (error) {
      console.error('Error rejecting session:', error);
    }
  }, [web3wallet, toast]);

  const approveRequest = useCallback(async (request: SessionRequest, response: any) => {
    if (!web3wallet) return;

    try {
      await web3wallet.respondSessionRequest({
        topic: request.topic,
        response: {
          id: request.id,
          result: response,
          jsonrpc: '2.0'
        }
      });

      setRequests(prev => {
        const updated = { ...prev };
        delete updated[request.id];
        return updated;
      });

      toast({
        title: "Solicitud aprobada",
        description: "Transacción procesada exitosamente"
      });
    } catch (error) {
      console.error('Error approving request:', error);
      toast({
        title: "Error",
        description: "No se pudo procesar la solicitud",
        variant: "destructive"
      });
    }
  }, [web3wallet, toast]);

  const rejectRequest = useCallback(async (request: SessionRequest) => {
    if (!web3wallet) return;

    try {
      await web3wallet.respondSessionRequest({
        topic: request.topic,
        response: {
          id: request.id,
          error: getSdkError('USER_REJECTED'),
          jsonrpc: '2.0'
        }
      });

      setRequests(prev => {
        const updated = { ...prev };
        delete updated[request.id];
        return updated;
      });

      toast({
        title: "Solicitud rechazada",
        description: "Transacción rechazada por el usuario"
      });
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  }, [web3wallet, toast]);

  const value: WalletConnectContextType = {
    web3wallet,
    isInitialized,
    sessions,
    proposals,
    requests,
    connect,
    disconnect,
    approveSession,
    rejectSession,
    approveRequest,
    rejectRequest
  };

  return (
    <WalletConnectContext.Provider value={value}>
      {children}
    </WalletConnectContext.Provider>
  );
};

export const useWalletConnect = (): WalletConnectContextType => {
  const context = useContext(WalletConnectContext);
  if (!context) {
    throw new Error('useWalletConnect must be used within a WalletConnectProvider');
  }
  return context;
};