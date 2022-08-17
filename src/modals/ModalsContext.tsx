import React, { createContext, useState } from 'react';

interface ModalsContext {
  onPresent: (node: React.ReactNode, key?: string) => void;
  onDismiss?: () => void;
}

export const Context = createContext<ModalsContext>({
  onPresent: () => null,
  onDismiss: () => null,
});

function ModalProvider({ children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();

  const handlePresent = (node: React.ReactNode) => {
    setModalNode(node);
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
  };

  return (
    <Context.Provider value={{ onPresent: handlePresent, onDismiss: handleDismiss }}>
      {isOpen &&
        React.isValidElement(modalNode) &&
        React.cloneElement(modalNode, {
          onDismiss: handleDismiss,
        })}
      {children}
    </Context.Provider>
  );
}

export default ModalProvider;
