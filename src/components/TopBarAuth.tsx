import { Link } from "react-router-dom";
import { Logo } from "./img/Logo";

const TopBarAuth = () => {
  return (
    <header className="top-bar">
      <div className="logo-auth">
        <Link to="/">
          <Logo />
          <span>finance</span>
        </Link>
      </div>
    </header>
  );
};

export default TopBarAuth;
