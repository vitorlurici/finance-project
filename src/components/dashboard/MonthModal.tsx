type MonthModalProps = {
  isOpen: boolean;
};

const MonthModal = ({ isOpen }: MonthModalProps) => {
  if (isOpen) {
    return <div>MonthModal</div>;
  }

  return null;
};

export default MonthModal;
