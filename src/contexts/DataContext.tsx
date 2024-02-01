import { createContext } from 'react';
import { IDataProvider } from '../types/types';
import { userData } from '../config/userData';

export const DataContext = createContext<IDataProvider>(undefined!);

export const DataContextProvider: React.FC<{ children: any }> = ({ children }) => {

  return (
    <DataContext.Provider value={userData}>
      {children}
    </DataContext.Provider>
  );
};
