import { Link } from "react-router-dom";
import "./ConfigModal.scss";
import { ConfigIcon } from "../../svg/ConfigIcon";
import { ExitIcon } from "../../svg/ExitIcon";

type ConfigModalProps = {
  isOpen: boolean;
};

const ConfigModal = ({ isOpen }: ConfigModalProps) => {
  if (isOpen) {
    return (
      <div className="config-modal open">
        <Link to="/config">
          <button className="config">
            <ConfigIcon />
            Configurações
          </button>
        </Link>
        <Link to="/">
          <button className="exit">
            <ExitIcon />
            Sair
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="config-modal">
      <button className="config">
        <ConfigIcon />
        Configurações
      </button>
      <button className="exit">
        <ExitIcon />
        Sair
      </button>
    </div>
  );
};

export default ConfigModal;
