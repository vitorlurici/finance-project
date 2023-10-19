type AddModalProps = {
  isOpen: boolean;
};

const AddModal = ({ isOpen }: AddModalProps) => {
  if (isOpen) {
    return <div>AddModal</div>;
  }

  return null;
};

export default AddModal;
