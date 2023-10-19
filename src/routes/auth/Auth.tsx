import "./Auth.scss";
import TopBarAuth from "../../components/auth/TopBarAuth";
import { AuthPerson } from "../../components/svg/AuthPerson";
import LoginRegisterButtonSwap from "../../components/auth/LoginRegisterButtonSwap";
import ContentAuth from "../../components/auth/ContentAuth";
import { useState } from "react";

const Auth = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  return (
    <main className="auth">
      <TopBarAuth />
      <div className="content">
        <div className="left-content">
          <LoginRegisterButtonSwap
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          <ContentAuth activeButton={activeButton} />
        </div>
        <div className="right-content">
          <h2>Rumo à liberdade financeira</h2>
          <AuthPerson />
          <h4>
            Comece a trilhar o caminho para o sucesso financeiro. Estamos aqui
            para te acompanhar nessa jornada.
          </h4>
        </div>
      </div>
    </main>
  );
};

export default Auth;
