export interface Provider {
  clientId: string;
  clientSecret: string;
}

export interface WelcomeFormTypes {
  serviceDetails: {
    serviceType: string;
    serviceLocation: { city: string; state: string; country: string };
  };
}
