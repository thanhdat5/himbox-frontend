import { NoBscProviderError } from '@binance-chain/bsc-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector';
import { useCallback } from 'react';

import { bscConnector, injected } from '../connectors';
import { connectorLocalStorageKey, ConnectorNames } from '../literals';
import { ShowErrorMessage } from '../services/appService';

function useAuth() {
    const { activate, deactivate } = useWeb3React();

    const connectorsByName: { [connectorName in ConnectorNames]: any } = {
        [ConnectorNames.Injected]: injected,
        [ConnectorNames.BSC]: bscConnector,
    };

    const login = useCallback((connectorID: ConnectorNames) => {
        const connector = connectorsByName[connectorID];
        if (connector) {
            activate(connector, async (error: Error) => {
                window.localStorage.removeItem(connectorLocalStorageKey);
                if (error instanceof UnsupportedChainIdError) {
                    ShowErrorMessage({ msg: 'Unsupported Chain Id Error. Check your chain Id.' });
                } else if (
                    error instanceof NoEthereumProviderError ||
                    error instanceof NoBscProviderError
                ) {
                    ShowErrorMessage({ msg: 'No provider was found' });
                } else if (error instanceof UserRejectedRequestErrorInjected) {
                    ShowErrorMessage({ msg: 'Please authorize to access your account' });
                } else {
                    ShowErrorMessage({ msg: error.message });
                }
            });
        } else {
            ShowErrorMessage({ msg: 'The connector config is wrong' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { login, logout: deactivate };
}

export default useAuth;


