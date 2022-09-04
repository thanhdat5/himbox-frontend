import { Button, Image } from 'react-bootstrap';
import { connectorLocalStorageKey } from '../../literals';


import { Config, Login } from './types';

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  className?: string;
}

function WalletCard({ login, walletConfig, onDismiss, className }: Props) {
  const { title, icon } = walletConfig;
  const handleCardClick = () => {
    login(walletConfig.connectorId);
    window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
    onDismiss();
  };

  return (
    <Button type="button"
      onClick={handleCardClick}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
      className={`btn-secondary w-100 ${className}`}
    >
      <Image src={icon} width="30px" className="me-2" alt={title} />
      <span>{title}</span>
    </Button>
  );
}

export default WalletCard;
