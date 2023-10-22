import { useEffect, useState } from "react";
import AddModal from "../../../components/dashboard/add-modal/AddModal";
import MonthModal from "../../../components/dashboard/month-modal/MonthModal";
import TransactionsChart from "../../../components/dashboard/TransactionsChart";
import TransactionsHistory from "../../../components/dashboard/TransactionsHistory";
import { AddIcon } from "../../../components/svg/AddIcon";
import { DownArrow } from "../../../components/svg/DownArrow";
import { MoneyDown } from "../../../components/svg/MoneyDown";
import { MoneyUp } from "../../../components/svg/MoneyUp";
import { Wallet } from "../../../components/svg/Wallet";
import { RightArrow } from "../../../components/svg/RightArrow";

const Dashboard = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);

  const handleOutsideClick = (e: any) => {
    if (e.target) {
      if (
        openAdd &&
        document.getElementById("addModal") &&
        document.getElementById("addModal")!.contains(e.target)
      ) {
        return;
      }
      if (
        openMonth &&
        document.getElementById("monthModal") &&
        document.getElementById("monthModal")!.contains(e.target)
      ) {
        return;
      }
    }
    setOpenAdd(false);
    setOpenMonth(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openAdd, openMonth]);

  const toggleAddModal = () => {
    setOpenAdd(!openAdd);
  };

  const toggleMonthModal = () => {
    setOpenMonth(!openMonth);
  };
  return (
    <>
      <div className="month-controller">
        <button className="btn-month" onClick={toggleMonthModal}>
          mês
          <DownArrow />
        </button>
        <div id="monthModal">
          {openMonth && <MonthModal isOpen={openMonth} />}
        </div>
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
