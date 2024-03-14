import { FC, createContext, useMemo } from 'react';

export interface MapsContextProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const MapsContext = createContext({} as MapsContextProps);

export interface MapsProviderProps {
  children: React.ReactNode;
}

export const MapsProvider: FC<MapsProviderProps> = ({ children }) => {
  const values = useMemo(() => {
    return {
      center: {
        lat: 51.1657,
        lng: 10.4515,
      },
      zoom: 6,
    };
  }, []);

  return <MapsContext.Provider value={values}>{children}</MapsContext.Provider>;
};
