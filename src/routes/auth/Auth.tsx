// import { useState } from "react";
import TopBarAuth from "../../components/TopBarAuth";
import { AuthPerson } from "../../components/img/AuthPerson";
import "./Auth.scss";
const Auth = () => {
  // const [email, setEmail] = useState("");
  // const [nome, setNome] = useState("");
  // const [senha, setSenha] = useState("");
  // const [manterConectado, setManterConectado] = useState(false);
  return (
    <main className="Auth">
      <TopBarAuth />
      <div className="content">
        <div className="left-content">
          <div className="top-login"></div>
        </div>
        <div className="right-content">
          <AuthPerson />
        </div>
      </div>
    </main>
  );
};

export default Auth;
