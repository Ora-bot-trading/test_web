// Global type declarations to resolve missing module errors

declare module 'react' {
  export interface Component<P = {}, S = {}> {}
  export interface ReactElement<P = any> {}
  export interface ReactNode {}
  export interface SVGProps<T> {}
  export interface HTMLAttributes<T> {}
  
  export function useState<S>(initialState: S | (() => S)): [S, (newState: S | ((prevState: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function useContext<T>(context: any): T;
  export function createContext<T>(defaultValue: T): any;
  export function forwardRef<T, P = {}>(render: (props: P, ref: T) => ReactElement | null): any;
  
  export const Fragment: any;
  export default React;
  
  namespace React {
    export type FC<P = {}> = (props: P) => ReactElement | null;
    export type ReactElement<P = any> = any;
    export type ReactNode = any;
    export type SVGProps<T> = any;
    export type HTMLAttributes<T> = any;
  }
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'lucide-react' {
  import { LucideIcon } from 'lucide-react';
  export const Bot: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Shield: LucideIcon;
  export const Zap: LucideIcon;
  export const Target: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Globe: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Users: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Clock: LucideIcon;
  export const Calendar: LucideIcon;
  export const Building: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Instagram: LucideIcon;
  export const Twitter: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Mail: LucideIcon;
  export const User: LucideIcon;
  export const Eye: LucideIcon;
  export const EyeOff: LucideIcon;
  export const Wallet: LucideIcon;
  export const Circle: LucideIcon;
  
  export interface LucideIcon {
    (props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  }
}
