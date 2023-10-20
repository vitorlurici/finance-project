import "./AddModal.scss";

type AddModalProps = {
  isOpen: boolean;
};

const AddModal = ({ isOpen }: AddModalProps) => {
  if (isOpen) {
    return <main className="add-modal">teste</main>;
  }

  return null;
};

export default AddModal;
