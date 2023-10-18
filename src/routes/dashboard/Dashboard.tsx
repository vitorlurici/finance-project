import { Link } from "react-router-dom";
import { AddIcon } from "../../components/img/AddIcon";
import { DashboardUser } from "../../components/img/DashboardUser";
import { DownArrow } from "../../components/img/DownArrow";
import { DownArrowUser } from "../../components/img/DownArrowUser";
import { MoneyDown } from "../../components/img/MoneyDown";
import { MoneyUp } from "../../components/img/MoneyUp";
import { Wallet } from "../../components/img/Wallet";
import "./Dashboard.scss";
import { Exchange } from "../../components/img/Exchange";
import { Charts } from "../../components/Charts";
import { useEffect, useState } from "react";
import ConfigModal from "../../components/ConfigModal";
import AddModal from "../../components/AddModal";

const Dashboard = () => {
  const [openConfig, setOpenConfig] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const handleOutsideClick = () => {
    setOpenConfig(false);
    setOpenAdd(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <main className="dashboard">
      <div className="top-bar">
        <button
          className="btn-user-config"
          onClick={() => setOpenConfig(!openConfig)}
        >
          <DashboardUser />
          Seu nome
          <DownArrowUser />
        </button>
        {openConfig && <ConfigModal isOpen={openConfig} />}
      </div>
      <button className="btn-month">
        mês
        <DownArrow />
      </button>
      <div className="container">
        <h2>Painel</h2>
        <div className="info-content">
          <button className="btn-add" onClick={() => setOpenAdd(!openAdd)}>
            <AddIcon />
            <DownArrow />
          </button>
          {openAdd && <AddModal isOpen={openAdd} />}
          <button className="btn">
            <div className="info-btn">
              <h4 className="name">Saldo atual</h4>
              <h4 className="amount">R$0,00</h4>
            </div>
            <Wallet />
          </button>
          <button className="btn">
            <div className="info-btn">
              <h4 className="name">Receitas</h4>
              <h4 className="amount">R$0,00</h4>
            </div>
            <MoneyUp />
          </button>
          <button className="btn">
            <div className="info-btn">
              <h4 className="name">Despesas</h4>
              <h4 className="amount">R$0,00</h4>
            </div>
            <MoneyDown />
          </button>
        </div>
        <div className="content records">
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
        <div className="content chart">
          <h3>Gráfico de movimentações</h3>
          <div className="box-container">
            <div className="box-content">
              <Charts />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
