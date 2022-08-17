import { useCallback, useContext } from 'react';

import { Context } from './ModalsContext';

export type Handler = () => void;
const useModal = (modal: React.ReactNode): [any, any] => {
  const { onPresent, onDismiss } = useContext(Context);
  const onPresentCallback = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
