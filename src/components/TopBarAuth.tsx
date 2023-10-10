import { Link } from "react-router-dom";
import { BlurLogo } from "./img/BlurLogo";

const TopBarAuth = () => {
  return (
    <header className="top-bar">
      <div className="logo-auth">
        <Link to="/">
          <BlurLogo />
          <span>finance</span>
        </Link>
      </div>
    </header>
  );
};

export default TopBarAuth;
