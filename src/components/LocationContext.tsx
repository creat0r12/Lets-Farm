import { createContext, useContext, useState } from "react";

type LocationData = {
  location: string;
  soils: string[];
};

type LocationContextType = {
  locationData: LocationData | null;
  setLocationData: (data: LocationData) => void;
};

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);

  return (
    <LocationContext.Provider value={{ locationData, setLocationData }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used inside LocationProvider");
  }
  return context;
};
