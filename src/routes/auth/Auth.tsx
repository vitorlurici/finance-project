import "./Auth.scss";
import TopBarAuth from "../../components/TopBarAuth";
import { AuthPerson } from "../../components/img/AuthPerson";
import LoginRegisterButtonSwap from "../../components/LoginRegisterButtonSwap";
import ContentAuth from "../../components/ContentAuth";

const Auth = () => {
  return (
    <main className="auth">
      <TopBarAuth />
      <div className="content">
        <div className="left-content">
          <LoginRegisterButtonSwap />
          <ContentAuth />
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
