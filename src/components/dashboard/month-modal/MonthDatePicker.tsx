import { DownArrow } from "../../svg/DownArrow";
import { NextYearIcon } from "../../svg/NextYearIcon";
import { PreviousYearIcon } from "../../svg/PreviousYearIcon";
import "./MonthModal.scss";
import React, { useEffect, useState } from "react";

const anosDisponiveis = [2022, 2023]; // anos em que o usuário já estava cadastrado

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const MonthDatePicker: React.FC = () => {
  const [dataSelecionada, setDataSelecionada] = useState<{
    mes: string;
    ano: number;
  } | null>(null);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [anoSelecionado, setAnoSelecionado] = useState(
    new Date().getFullYear()
  );

  const togglePopup = () => {
    setMostrarPopup(!mostrarPopup);
  };

  const handleOutsideClick = (e: any) => {
    if (e.target) {
      if (document.getElementById("monthPickerModal")!.contains(e.target)) {
        return;
      }
    }
    setMostrarPopup(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [mostrarPopup]);

  const getCurrentMonth = () => {
    const currentDate = new Date();
    return monthNames[currentDate.getMonth()]; // Retorna o nome completo do mês
  };

  const formatMesAno = (mes: string, ano: number) => {
    if (ano === new Date().getFullYear()) {
      return mes; // Retorna apenas o nome do mês
    } else {
      return `${mes} ${ano}`; // Retorna "{mês} {ano}"
    }
  };

  const selecionarData = (mes: string, ano: number) => {
    setDataSelecionada({ mes, ano });
    togglePopup();
    // Lógica para atualizar os dados da div com base na data selecionada
  };

  const handleYearChange = (delta: number) => {
    const currentIndex = anosDisponiveis.indexOf(anoSelecionado);
    const newIndex = currentIndex + delta;

    if (newIndex >= 0 && newIndex < anosDisponiveis.length) {
      setAnoSelecionado(anosDisponiveis[newIndex]);
    }
  };

  return (
    <div id="monthPickerModal" className="month-picker">
      <button className="btn-month" onClick={togglePopup}>
        {dataSelecionada
          ? formatMesAno(dataSelecionada.mes, dataSelecionada.ano)
          : formatMesAno(getCurrentMonth(), anoSelecionado)}
        <DownArrow />
      </button>
      {mostrarPopup && (
        <div className="datepicker-popup">
          <div className="year-navigation">
            <button
              className="btn-next-prev"
              onClick={() => handleYearChange(-1)}
            >
              <PreviousYearIcon />
            </button>
            <select
              className="select-year"
              value={anoSelecionado}
              onChange={(e) => setAnoSelecionado(parseInt(e.target.value))}
            >
              {anosDisponiveis.map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
            </select>
            <button
              className="btn-next-prev"
              onClick={() => handleYearChange(1)}
            >
              <NextYearIcon />
            </button>
          </div>
          <ul>
            {monthNames.map((mes, index) => (
              <li
                key={index}
                onClick={() => selecionarData(mes, anoSelecionado)}
              >
                {mes.slice(0, 3)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MonthDatePicker;
