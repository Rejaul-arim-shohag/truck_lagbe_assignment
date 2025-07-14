import React, { createContext, useContext, useState } from 'react';

type Trip = {
  loadLocation: string;
  unloadLocation: string;
  dateTime: string;
};

type TripContextType = {
  trips: Trip[];
  addTrip: (trip: Trip) => void;
  resetTrips: () => void;
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const addTrip = (trip: Trip) => {
    setTrips(prev => [...prev, trip]);
  };
  const resetTrips = () => {
    setTrips([]);
  };

  return (
    <TripContext.Provider value={{ trips, addTrip, resetTrips }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  const context = useContext(TripContext);
  if (!context) throw new Error('useTrip must be used within TripProvider');
  return context;
};
