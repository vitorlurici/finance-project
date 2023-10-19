import { Link, useLocation } from "react-router-dom";
import { Exchange } from "../svg/Exchange";

const TransactionsHistory = () => {
  const location = useLocation();
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
        {location.pathname !== "/historico-movimentacoes" && (
          <Link to="/historico-movimentacoes">
            <div className="box-bottom">
              <hr></hr>
              VER MAIS
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TransactionsHistory;
