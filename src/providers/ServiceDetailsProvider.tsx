"use client";

import React, { createContext, useState, useContext } from "react";

export interface WelcomeFormType {
  serviceType: string;
  serviceLocation: string;
}

interface ServiceDetailsContextType {
  serviceDetails: WelcomeFormType;
  setServiceDetails: React.Dispatch<React.SetStateAction<WelcomeFormType>>;
}

const ServiceDetailsContext = createContext<
  ServiceDetailsContextType | undefined
>(undefined);

export const useServiceDetails = (p0: {
  serviceType: string;
  serviceLocation: string;
  handleInputChange: () => void;
  handleSubmit: () => void;
}) => {
  const context = useContext(ServiceDetailsContext);
  if (!context) {
    throw new Error(
      "useServiceDetails must be used within a ServiceDetailsProvider"
    );
  }
  return context;
};

export const ServiceDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [serviceDetails, setServiceDetails] = useState<WelcomeFormType>({
    serviceType: "",
    serviceLocation: "",
  });

  return (
    <ServiceDetailsContext.Provider
      value={{ serviceDetails, setServiceDetails }}
    >
      {children}
    </ServiceDetailsContext.Provider>
  );
};
