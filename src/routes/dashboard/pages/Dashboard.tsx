import { useEffect, useState } from "react";
import AddModal from "../../../components/dashboard/add-modal/AddModal";
import TransactionsChart from "../../../components/dashboard/TransactionsChart";
import TransactionsHistory from "../../../components/dashboard/TransactionsHistory";
import { AddIcon } from "../../../components/svg/AddIcon";

import { MoneyDown } from "../../../components/svg/MoneyDown";
import { MoneyUp } from "../../../components/svg/MoneyUp";
import { Wallet } from "../../../components/svg/Wallet";
import { RightArrow } from "../../../components/svg/RightArrow";
import MonthDatePicker from "../../../components/dashboard/month-modal/MonthDatePicker";

const Dashboard = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const handleOutsideClick = (e: any) => {
    if (e.target) {
      if (
        openAdd &&
        document.getElementById("addModal") &&
        document.getElementById("addModal")!.contains(e.target)
      ) {
        return;
      }
    }
    setOpenAdd(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openAdd]);

  const toggleAddModal = () => {
    setOpenAdd(!openAdd);
  };

  return (
    <>
      <div className="month-controller">
        <MonthDatePicker />
      </div>
      <div className="container">
        <h2>Painel</h2>
        <div className="info-content">
          <div className="add-controller">
            <button className="btn-add" onClick={toggleAddModal}>
              <AddIcon />
              <RightArrow />
            </button>
            <div id="addModal">{<AddModal isOpen={openAdd} />}</div>
          </div>
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
    </>
  );
};

export default Dashboard;
