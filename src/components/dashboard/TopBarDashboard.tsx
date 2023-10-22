import { useEffect, useState } from "react";
import { DashboardUser } from "../svg/DashboardUser";
import { DownArrowUser } from "../svg/DownArrowUser";
import ConfigModal from "./config-modal/ConfigModal";
import { BlurLogo } from "../svg/BlurLogo";
import { Link } from "react-router-dom";
import ScrollTop from "../ScrollTop";

const TopBarDashboard = () => {
  const [openConfig, setOpenConfig] = useState(false);

  const handleOutsideClick = (e: any) => {
    if (e.target) {
      if (document.getElementById("configModal")!.contains(e.target)) {
        return;
      }
    }
    setOpenConfig(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openConfig]);

  const toggleConfigModal = () => {
    setOpenConfig(!openConfig);
  };

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/dashboard" onClick={ScrollTop}>
          <BlurLogo />
        </Link>
      </div>
      <div className="top-bar-right">
        <button
          id="user"
          className="btn-user-config"
          onClick={toggleConfigModal}
        >
          <DashboardUser />
          Seu nome
          <DownArrowUser />
        </button>
        <div id="configModal">{<ConfigModal isOpen={openConfig} />}</div>
      </div>
    </div>
  );
};

export default TopBarDashboard;
