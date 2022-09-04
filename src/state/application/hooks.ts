import { useSelector } from 'react-redux'

export function useBlockNumber():  any {
  return useSelector<any>((state : any)=>state.application.latestBlockNumber)
}
