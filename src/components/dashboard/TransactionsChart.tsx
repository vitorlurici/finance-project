import { Charts } from "./Charts";

const TransactionsChart = () => {
  return (
    <div className="content chart">
      <h3>Gráfico de movimentações</h3>
      <div className="box-container">
        <div className="box-content">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default TransactionsChart;
