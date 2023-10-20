import "./MonthModal.scss";

type MonthModalProps = {
  isOpen: boolean;
};

const MonthModal = ({ isOpen }: MonthModalProps) => {
  if (isOpen) {
    return <main className="month-modal">teste</main>;
  }

  return null;
};

export default MonthModal;
