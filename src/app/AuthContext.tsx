import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { configureApi } from "../services/apiClient";
// TODO: replace with the agreed auth provider SDK (phone OTP + Google). Never build OTP/OAuth from scratch.
interface Auth { token: string | null; signIn: (token: string) => void; signOut: () => void }
const Ctx = createContext<Auth>(null!);
export const useAuth = () => useContext(Ctx);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => sessionStorage.getItem("pb_token"));
  const signIn = (t: string) => { sessionStorage.setItem("pb_token", t); setToken(t); };
  const signOut = () => { sessionStorage.removeItem("pb_token"); setToken(null); };
  useEffect(() => configureApi({ getToken: () => token, onUnauthorized: signOut }), [token]);
  return <Ctx.Provider value={{ token, signIn, signOut }}>{children}</Ctx.Provider>;
}
