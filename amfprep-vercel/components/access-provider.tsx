"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { clearAccessState, defaultAccessState, getAccessState, setAccessState, UserAccessState } from "@/lib/auth";

type AccessContextType = UserAccessState & {
  subscribe: () => void;
  createAccount: () => void;
  login: () => void;
  logout: () => void;
};

const AccessContext = createContext<AccessContextType | null>(null);

export function AccessProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<UserAccessState>(defaultAccessState);

  useEffect(() => {
    const sync = () => setState(getAccessState());
    sync();
    window.addEventListener("amfprep-auth-change", sync);
    return () => window.removeEventListener("amfprep-auth-change", sync);
  }, []);

  const value = useMemo<AccessContextType>(
    () => ({
      ...state,
      subscribe: () => setState(setAccessState({ isSubscribed: true })),
      createAccount: () =>
        setState(setAccessState({ isSubscribed: true, hasAccount: true, isLoggedIn: true })),
      login: () => setState(setAccessState({ isLoggedIn: true })),
      logout: () => {
        clearAccessState();
        setState(defaultAccessState);
      },
    }),
    [state]
  );

  return <AccessContext.Provider value={value}>{children}</AccessContext.Provider>;
}

export function useAccess() {
  const value = useContext(AccessContext);
  if (!value) {
    throw new Error("useAccess must be used within AccessProvider");
  }
  return value;
}
