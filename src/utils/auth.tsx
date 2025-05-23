import React, { useState } from 'react';
import styled from 'styled-components';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-supabase-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const InputField = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(179, 166, 125, 0.5);
  padding: 0.5rem 0;
  color: rgba(179, 166, 125, 1);
  font-size: 1.1rem;
  
  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(179, 166, 125, 1);
  }
`;

const AuthButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 1.2rem;
  transition: all 0.3s ease;
`;

const ErrorMessage = styled.div`
  color: #e04e2f;
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid rgba(224, 78, 47, 0.3);
  background-color: rgba(224, 78, 47, 0.1);
`;

// Context for authentication state
export const AuthContext = React.createContext<{
  user: any;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  loading: boolean;
}>({
  user: null,
  signIn: async () => ({}),
  signUp: async () => ({}),
  signOut: async () => ({}),
  loading: false,
});

// Auth Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    // Check for active session on mount
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (data && data.session) {
        setUser(data.session.user ?? null);
      } else {
        setUser(null);
      }
      setLoading(false);
    };
    
    fetchSession();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    signIn,
    signUp,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using auth
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Login component
export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const { data, error } = await signIn(email, password);
    if (error) {
      setError(error.message);
    }
  };

  return (
    <AuthContainer className="arcane-container arcane-container-bottom">
      <h1 className="text-4xl text-center mb-8">LOG IN</h1>
      
      <form onSubmit={handleLogin}>
        <InputGroup>
          <InputLabel>Email</InputLabel>
          <InputField 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </InputGroup>
        
        <InputGroup>
          <InputLabel>Password</InputLabel>
          <InputField 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </InputGroup>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <AuthButton 
          type="submit" 
          className="btn-arcane"
        >
          LOG IN
        </AuthButton>
      </form>
    </AuthContainer>
  );
};

export default {
  AuthProvider,
  useAuth,
  Login
};
