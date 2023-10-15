import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContentAuth = ({ activeButton }: { activeButton: number | null }) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);

  //resetar os dados do usuário ao trocar de form entrar/cadastrar
  useEffect(() => {
    setNome("");
    setEmail("");
    setSenha("");
  }, [activeButton]);

  const showPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <div className="all-forms">
        <form
          className={` ${activeButton === 2 ? "register" : "hidden register"}`}
        >
          <div className="float-label">
            <input
              type="text"
              placeholder=""
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>Nome</label>
          </div>
          <div className="float-label">
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>E-mail</label>
          </div>
          <div className="float-label">
            <input
              type={show ? "text" : "password"}
              placeholder=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label>Senha</label>
            <div className="password-eye">
              {show ? (
                <FiEye onClick={showPassword} />
              ) : (
                <FiEyeOff onClick={showPassword} />
              )}
            </div>
          </div>

          <div className="conected">
            <input type="checkbox"></input>
            <h4>Manter-me conectado</h4>
          </div>
          <span>
            Ao continuar, estou de acordo com os
            <Link to="/termos-e-privacidade">
              {" "}
              Termos de uso e Aviso de privacidade{" "}
            </Link>
            da Finance.
          </span>
          <button type="submit">CONCORDAR E CADASTRAR</button>
        </form>
        <form className={`${activeButton === 1 ? "login" : "hidden login"}`}>
          <div className="float-label">
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>E-mail</label>
          </div>
          <div className="float-label">
            <input
              type={show ? "text" : "password"}
              placeholder=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label>Senha</label>
            <div className="password-eye">
              {show ? (
                <FiEye onClick={showPassword} />
              ) : (
                <FiEyeOff onClick={showPassword} />
              )}
            </div>
          </div>
          <div className="conected">
            <input type="checkbox"></input>
            <h4>Manter-me conectado</h4>
          </div>
          <button type="submit">ENTRAR</button>
          <Link to="/forgot-password">Esqueceu sua senha?</Link>
          <span>
            Ao continuar, estou de acordo com os
            <Link to="/termos-e-privacidade">
              {" "}
              Termos de uso e Aviso de privacidade{" "}
            </Link>
            da Finance.
          </span>
        </form>
      </div>
    </>
  );
};

export default ContentAuth;
