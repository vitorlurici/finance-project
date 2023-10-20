import "./ConfigModal.scss";

type ConfigModalProps = {
  isOpen: boolean;
};

const ConfigModal = ({ isOpen }: ConfigModalProps) => {
  if (isOpen) {
    return <main className="config-modal">test</main>;
  }

  return null;
};

export default ConfigModal;
