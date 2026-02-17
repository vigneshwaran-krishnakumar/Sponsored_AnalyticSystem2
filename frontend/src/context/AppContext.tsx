import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { campaigns as mockCampaigns, influencers as mockInfluencers, dashboardMetrics as mockMetrics, currentUser, type Campaign, type Influencer, type DashboardMetrics, type User } from "@/data/mockData";

interface AppState {
  user: User | null;
  campaigns: Campaign[];
  influencers: Influencer[];
  metrics: DashboardMetrics;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [campaigns] = useState<Campaign[]>(mockCampaigns);
  const [influencers] = useState<Influencer[]>(mockInfluencers);
  const [metrics] = useState<DashboardMetrics>(mockMetrics);

  const login = (_email: string, _password: string) => {
    setUser(currentUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, campaigns, influencers, metrics, isAuthenticated: !!user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
