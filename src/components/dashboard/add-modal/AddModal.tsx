import { AssetsIcon } from "../../svg/AssetsIcon";
import { ExpensesIcon } from "../../svg/ExpensesIcon";
import "./AddModal.scss";

type AddModalProps = {
  isOpen: boolean;
};

const AddModal = ({ isOpen }: AddModalProps) => {
  if (isOpen) {
    return (
      <main className="add-modal open">
        <button className="asset">
          <AssetsIcon />
          Adicionar Receita
        </button>
        <button className="expense">
          <ExpensesIcon />
          Adicionar Despesa
        </button>
      </main>
    );
  }

  return (
    <main className="add-modal">
      <button className="asset">
        <AssetsIcon />
        Adicionar Receita
      </button>
      <button className="expense">
        <ExpensesIcon />
        Adicionar Despesa
      </button>
    </main>
  );
};

export default AddModal;
