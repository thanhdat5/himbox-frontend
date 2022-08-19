import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './assets/styles/style.scss';
import { NetworkContextName } from './literals';
import ModalProvider from './modals/ModalsContext';
import store from './redux/store/store';
import reportWebVitals from './reportWebVitals';
import ApplicationUpdater from './state/application/updater';
import WalletUpdater from './state/wallet/updater';
import { history } from './utils/history';
import getLibrary from './utils/utils';

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <ApplicationUpdater />
        <WalletUpdater />
        <HistoryRouter history={history}>
          <ModalProvider>
            <App />
          </ModalProvider>
        </HistoryRouter>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
    <ToastContainer />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
