import { AddIcon } from "../../components/svg/AddIcon";
import { DashboardUser } from "../../components/svg/DashboardUser";
import { DownArrow } from "../../components/svg/DownArrow";
import { DownArrowUser } from "../../components/svg/DownArrowUser";
import { MoneyDown } from "../../components/svg/MoneyDown";
import { MoneyUp } from "../../components/svg/MoneyUp";
import { Wallet } from "../../components/svg/Wallet";
import "./Dashboard.scss";
import { useEffect, useState } from "react";
import ConfigModal from "../../components/dashboard/ConfigModal";
import AddModal from "../../components/dashboard/AddModal";
import TransactionsHistory from "../../components/dashboard/TransactionsHistory";
import TransactionsChart from "../../components/dashboard/TransactionsChart";
import MonthModal from "../../components/dashboard/MonthModal";

const Dashboard = () => {
  const [openConfig, setOpenConfig] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (e.target instanceof Node) {
      if (
        openConfig &&
        document.getElementById("configModal") &&
        document.getElementById("configModal")!.contains(e.target)
      ) {
        return;
      }
      if (
        openAdd &&
        document.getElementById("addModal") &&
        document.getElementById("addModal")!.contains(e.target)
      ) {
        return;
      }
      if (
        openAdd &&
        document.getElementById("monthModal") &&
        document.getElementById("monthModal")!.contains(e.target)
      ) {
        return;
      }
    }
    setOpenConfig(false);
    setOpenAdd(false);
    setOpenMonth(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openConfig, openAdd, openMonth]);

  const toggleConfigModal = () => {
    setOpenConfig(!openConfig);
  };

  const toggleAddModal = () => {
    setOpenAdd(!openAdd);
  };

  const toggleMonthModal = () => {
    setOpenMonth(!openMonth);
  };
  return (
    <main className="dashboard">
      <div className="top-bar">
        <button className="btn-user-config" onClick={toggleConfigModal}>
          <DashboardUser />
          Seu nome
          <DownArrowUser />
        </button>
        <div id="configModal">
          {openConfig && <ConfigModal isOpen={openConfig} />}
        </div>
      </div>
      <button className="btn-month" onClick={toggleMonthModal}>
        mês
        <DownArrow />
      </button>
      <div id="monthModal">
        {openMonth && <MonthModal isOpen={openMonth} />}
      </div>
      <div className="container">
        <h2>Painel</h2>
        <div className="info-content">
          <button className="btn-add" onClick={toggleAddModal}>
            <AddIcon />
            <DownArrow />
          </button>
          <div id="addModal">{openAdd && <AddModal isOpen={openAdd} />}</div>
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
        <TransactionsHistory />
        <TransactionsChart />
      </div>
    </main>
  );
};
export default Dashboard;
