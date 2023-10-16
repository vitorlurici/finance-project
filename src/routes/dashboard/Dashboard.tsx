import { AddIcon } from "../../components/img/AddIcon";
import { DashboardUser } from "../../components/img/DashboardUser";
import { DownArrow } from "../../components/img/DownArrow";
import { DownArrowUser } from "../../components/img/DownArrowUser";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="top-bar">
        <DashboardUser />
        Seu nome
        <DownArrowUser />
      </div>
      <button className="btn-month">
        mês
        <DownArrow />
      </button>
      <div className="content">
        <h2>Painel</h2>
        <button className="btn-add">
          <AddIcon />
          <DownArrow />
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
