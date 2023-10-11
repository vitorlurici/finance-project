// import { useState } from "react";
import "./Auth.scss";
import TopBarAuth from "../../components/TopBarAuth";
import { AuthPerson } from "../../components/img/AuthPerson";
const Auth = () => {
  // const [email, setEmail] = useState("");
  // const [nome, setNome] = useState("");
  // const [senha, setSenha] = useState("");
  // const [manterConectado, setManterConectado] = useState(false);
  return (
    <main className="auth">
      <TopBarAuth />
      <div className="content">
        <div className="left-content">
          <div className="top-login">Cadastro</div>
          <div className="float-label">
            <input type="text" placeholder="" required />
            <label>Nome</label>
          </div>
          <div className="float-label">
            <input type="text" placeholder="" required />
            <label>E-mail</label>
          </div>
          <div className="float-label">
            <input type="text" placeholder="" required />
            <label>Senha</label>
          </div>
          <div className="conected">
            <input type="checkbox"></input>
            <h4>Manter-me conectado</h4>
          </div>
          <span>
            Ao continuar, estou de acordo com os Termos de uso e Aviso de
            privacidade da Finance.
          </span>
          <button type="submit">CONCORDAR E CADASTRAR</button>
        </div>
        <div className="right-content">
          <AuthPerson />
        </div>
      </div>
    </main>
  );
};

export default Auth;
