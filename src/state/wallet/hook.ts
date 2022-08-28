import { useSelector } from 'react-redux';

export function useDotBalance(): any {
  return useSelector((state: any) => state.application.dotBalance);
}

export function useUsdtBalance(): any {
  return useSelector((state: any) => state.application.usdtBalance);
}
