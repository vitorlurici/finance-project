import { Link } from "react-router-dom";
import { WhiteLogo } from "./img/WhiteLogo";
import ScrollTop from "./ScrollTop";

const BottomBar = () => {
  return (
    <div className="bottom-container">
      <div className="logo-container">
        <Link to="/" onClick={ScrollTop}>
          <WhiteLogo />
          <span>finance</span>
        </Link>
      </div>
      <hr />
      <div className="bottom-content">
        <div className="bottom">
          <h2>Ajuda</h2>
          <Link to="/duvidas">
            <h4>Duvidas Gerais</h4>
          </Link>
          <Link to="/contato">
            <h4>Fale conosco</h4>
          </Link>
        </div>
        <div className="bottom">
          <h2>Institucional</h2>
          <Link to="/" onClick={ScrollTop}>
            <h4>Home</h4>
          </Link>
          <Link to="/sobre-nos">
            <h4>Sobre nós</h4>
          </Link>
          <Link to="/termos-e-privacidade">
            <h4>Termos e Privacidade</h4>
          </Link>
        </div>
      </div>
      <hr />© 2023 Finance
    </div>
  );
};

export default BottomBar;
