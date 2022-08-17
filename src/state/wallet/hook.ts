import { useSelector } from 'react-redux';

export function useDotBalance(): number | undefined {
  return useSelector((state: any) => state.application.dotBalance);
}
