import { Link } from "react-router-dom";
import { Exchange } from "../svg/Exchange";

const TransactionsHistory = () => {
  return (
    <div className="content transactions">
      <h3>Histórico de movimentações</h3>
      <div className="box-container">
        <div className="box-content">
          <Exchange />
          <h4 className="text main">
            Você ainda não possui transações cadastradas.
          </h4>
          <h4 className="text sub">
            Que tal começar adicionando suas receitas e despesas do mês?
          </h4>
        </div>
        <div className="box-bottom">
          <hr></hr>
          <Link to={"/dashboard"}>VER MAIS</Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionsHistory;
