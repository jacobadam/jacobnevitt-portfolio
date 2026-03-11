"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

export type ActiveSectionContextValue = {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
};

const ClientWrapperContext = createContext<ActiveSectionContextValue | null>(
  null,
);

export const useClientWrapper = () => {
  const clientWrapperContext = useContext(ClientWrapperContext);

  if (!clientWrapperContext) {
    throw new Error("useClientWrapper must be used within ClientWrapper");
  }
  return clientWrapperContext;
};

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  return (
    <ClientWrapperContext value={{ activeSection, setActiveSection }}>
      {children}
    </ClientWrapperContext>
  );
}
