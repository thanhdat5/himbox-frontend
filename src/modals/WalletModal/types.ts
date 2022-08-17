import { ConnectorNames } from "../../literals";


export type Login = (connectorId: ConnectorNames) => void;
export interface Config {
  title: string;
  icon: string;
  connectorId: ConnectorNames;
  enable: boolean;
  className?: string;
}
