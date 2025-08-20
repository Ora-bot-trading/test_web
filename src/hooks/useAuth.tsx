import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signUp: (email: string, password: string, fullName?: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signInWithGoogle: () => Promise<{ error: any }>;
  signInWithApple: () => Promise<{ error: any }>;
  signInWithFacebook: () => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);

        if (event === 'SIGNED_IN' && session?.user) {
          toast({
            title: "Bienvenido",
            description: "Has iniciado sesión exitosamente",
          });
        }

        if (event === 'SIGNED_OUT') {
          toast({
            title: "Sesión cerrada",
            description: "Has cerrado sesión exitosamente",
          });
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [toast]);

  const signUp = async (email: string, password: string, fullName?: string) => {
    try {
      setIsLoading(true);
      
      // Limpiar estado previo
      localStorage.removeItem('supabase.auth.token');
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });

      const redirectUrl = `${window.location.origin}/`;
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: fullName,
          }
        }
      });

      if (error) {
        console.error('SignUp error:', error);
        toast({
          title: "Error al crear cuenta",
          description: error.message === 'User already registered' 
            ? 'Este email ya está registrado. Intenta iniciar sesión.'
            : error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Cuenta creada exitosamente",
          description: data.user?.email_confirmed_at 
            ? "Tu cuenta está lista para usar" 
            : "Verifica tu email para completar el registro",
        });
        
        // Si el email está confirmado, redirigir inmediatamente
        if (data.user?.email_confirmed_at) {
          setTimeout(() => {
            window.location.href = '/';
          }, 1500);
        }
      }

      return { error };
    } catch (err) {
      console.error('SignUp catch:', err);
      toast({
        title: "Error inesperado",
        description: "Hubo un problema al crear la cuenta. Inténtalo de nuevo.",
        variant: "destructive"
      });
      return { error: err };
    } finally {
      setIsLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Limpiar estado previo
      localStorage.removeItem('supabase.auth.token');
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('SignIn error:', error);
        let errorMessage = error.message;
        
        if (error.message.includes('Invalid login credentials')) {
          errorMessage = 'Credenciales inválidas. Verifica tu email y contraseña.';
        } else if (error.message.includes('Email not confirmed')) {
          errorMessage = 'Debes verificar tu email antes de iniciar sesión.';
        }
        
        toast({
          title: "Error al iniciar sesión",
          description: errorMessage,
          variant: "destructive"
        });
      } else if (data.user) {
        toast({
          title: "¡Bienvenido de vuelta!",
          description: "Has iniciado sesión exitosamente",
        });
        
        // Redirigir después del login exitoso
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }

      return { error };
    } catch (err) {
      console.error('SignIn catch:', err);
      toast({
        title: "Error inesperado",
        description: "Hubo un problema al iniciar sesión. Inténtalo de nuevo.",
        variant: "destructive"
      });
      return { error: err };
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
        }
      });

      if (error) {
        toast({
          title: "Error con Google",
          description: error.message,
          variant: "destructive"
        });
      }

      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithApple = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: `${window.location.origin}/`,
        }
      });

      if (error) {
        toast({
          title: "Error con Apple",
          description: error.message,
          variant: "destructive"
        });
      }

      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithFacebook = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: `${window.location.origin}/`,
        }
      });

      if (error) {
        toast({
          title: "Error con Facebook",
          description: error.message,
          variant: "destructive"
        });
      }

      return { error };
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      
      // Limpiar estado local primero
      localStorage.removeItem('supabase.auth.token');
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
          localStorage.removeItem(key);
        }
      });
      
      const { error } = await supabase.auth.signOut({ scope: 'global' });
      
      if (!error) {
        toast({
          title: "Sesión cerrada",
          description: "Has cerrado sesión exitosamente",
        });
        
        // Forzar recarga de la página
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      }
      
      return { error };
    } catch (err) {
      console.error('SignOut error:', err);
      // Incluso si hay error, limpiar el estado local
      window.location.href = '/';
      return { error: err };
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithApple,
    signInWithFacebook,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};