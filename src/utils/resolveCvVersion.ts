import { CvVersion } from '../types/types';

export function getCvVersionFromSearch(search: string): CvVersion {
  const params = new URLSearchParams(search);
  return params.get('v') === 'v2' ? 'v2' : 'default';
}
