// src/clerk-mock.ts
import { ReactNode } from 'react';

interface ClerkProviderProps {
  children: ReactNode;
}

export const ClerkProvider = ({ children }: ClerkProviderProps) => <>{children}</>;

export const useUser = () => ({
  user: { id: 'dummy', firstName: 'Test' },
});

export const useAuth = () => ({
  isSignedIn: true,
});
