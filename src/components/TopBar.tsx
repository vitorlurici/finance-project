import { Link } from "react-router-dom";
import { BlurLogo } from "./svg/BlurLogo";
import { LoginIcon } from "./svg/LoginIcon";
import ScrollTop from "./ScrollTop";

const TopBar = () => {
  return (
    <header className="header">
      <header className="header-container">
        <div className="logo-container">
          <Link to="/" onClick={ScrollTop}>
            <BlurLogo />
            <span>finance</span>
          </Link>
        </div>
        <button>
          <Link to="/auth/login">
            <LoginIcon />
            <span>Acessar sua conta</span>
          </Link>
        </button>
      </header>
    </header>
  );
};

export default TopBar;
