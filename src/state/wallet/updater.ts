import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useActiveWeb3React } from '../../hook'
import useIsWindowVisible from '../../hook/useIsWindowVisible'
import { useDotContract } from '../../hook/useContract'
import { DOT_ADDRESS } from '../../_config'
import { useBlockNumber } from '../application/hooks'
import { SET_DOT_BALANCE } from '../../redux/types/application'


export default function Updater(): null {

    const { library, chainId, account } = useActiveWeb3React()
    const dispatch = useDispatch()


    const windowVisible = useIsWindowVisible()

    const [state, setState] = useState<{ chainId: number | undefined; balance: number | null }>({
        chainId,
        balance: null,
    })

    // console.log("CONTRACT_EXCHANGE_V2_ADDRESS==>",CONTRACT_EXCHANGE_V2_ADDRESS[chainId] );

    const getBalanceCallback = useCallback(
        (balance: number) => {

            setState((s) => {
                if (chainId === s.chainId) {
                    if (typeof s.balance !== 'number') return { chainId, balance }
                    return { chainId, balance: Math.max(balance, s.balance) }
                }
                return s
            })
        },
        [chainId, setState]
    )
    const blockNumber = useBlockNumber()
    useEffect(() => {
        if (!library || !chainId || !windowVisible || !blockNumber) return undefined

        setState({ chainId, balance: null })

        library
            .getBalance(account ? account : '') 
            .then(data => {
                getBalanceCallback(Number(data.toString()))
            })
            .catch((error) => console.error(`Failed to get block number for chainId: ${chainId}`, error))

    }, [dispatch, chainId, library, getBalanceCallback, windowVisible, blockNumber])

    // const debouncedState = useDebounce(state, 100)

    const dotContract = useDotContract(DOT_ADDRESS)
    //update MAT Balance
    useEffect(() => {
        if (dotContract) {
            dotContract.balanceOf(account).then((data: any) => {
                dispatch({
                    type: SET_DOT_BALANCE,
                    payload: data?.toString()
                });
            })
        }

    }, [library, chainId, blockNumber, dispatch, dotContract])

    return null
}
