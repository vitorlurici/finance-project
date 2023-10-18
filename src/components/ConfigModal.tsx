type ConfigModalProps = {
  isOpen: boolean;
};

const ConfigModal = ({ isOpen }: ConfigModalProps) => {
  if (isOpen) {
    return <div>ConfigModal</div>;
  }

  return null;
};

export default ConfigModal;
