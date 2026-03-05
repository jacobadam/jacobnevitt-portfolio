"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ClientWrapperProps {
  children: ReactNode;
}

export type isActiveContextType = {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
};

export const ClientWrapperContext = createContext<isActiveContextType | null>(
  null,
);

export const useClientWrapper = () => {
  const clientWrapperContext = useContext(ClientWrapperContext);

  if (!clientWrapperContext) {
    throw new Error(
      "useClientWrapper must be used within ClientWrapperProvider",
    );
  }
  return clientWrapperContext;
};

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ClientWrapperContext value={{ isActive, setIsActive }}>
      {children}
    </ClientWrapperContext>
  );
}
