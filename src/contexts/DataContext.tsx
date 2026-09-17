import { createContext, useMemo } from 'react';
import { CvVersion, IDataProvider } from '../types/types';
import { userData } from '../config/userData';
import { getCvVersionFromSearch } from '../utils/resolveCvVersion';
import { resolveJob } from '../utils/resolveJob';

export interface IDataContextValue extends IDataProvider {
  cvVersion: CvVersion;
}

export const DataContext = createContext<IDataContextValue>(undefined!);

export const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cvVersion = useMemo(
    () => getCvVersionFromSearch(window.location.search),
    [],
  );

  const value = useMemo<IDataContextValue>(() => ({
    ...userData,
    cvVersion,
    summary: cvVersion === 'v2' && userData.summaryV2 ? userData.summaryV2 : userData.summary,
    jobs: userData.jobs.map((job) => resolveJob(job, cvVersion)),
  }), [cvVersion]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
