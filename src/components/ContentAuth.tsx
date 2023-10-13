import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContentAuth = ({ activeButton }: { activeButton: number | null }) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [show, setShow] = useState(false);

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <div className="all-forms">
        <div
          className={`form ${
            activeButton === 2 ? "register" : "hidden register"
          }`}
        >
          <div className="float-label">
            <input
              type="text"
              placeholder=""
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <label>Nome</label>
          </div>
          <div className="float-label">
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>E-mail</label>
          </div>
          <div className="float-label">
            <input
              type={show ? "text" : "password"}
              placeholder=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <label>Senha</label>
            <div className="password-eye">
              {show ? (
                <FiEye onClick={handleClick} />
              ) : (
                <FiEyeOff onClick={handleClick} />
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
        </div>
        <div
          className={`form ${activeButton === 1 ? "login" : "hidden login"}`}
        >
          <div className="float-label">
            <input
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>E-mail</label>
          </div>
          <div className="float-label">
            <input
              type={show ? "text" : "password"}
              placeholder=""
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <label>Senha</label>
            <div className="password-eye">
              {show ? (
                <FiEye onClick={handleClick} />
              ) : (
                <FiEyeOff onClick={handleClick} />
              )}
            </div>
          </div>
          <button type="submit">ENTRAR</button>

          <div className="conected">
            <input type="checkbox"></input>
            <h4>Manter-me conectado</h4>
          </div>
          <Link to="/forgot-password">Esqueceu sua senha?</Link>
          <span>
            Ao continuar, estou de acordo com os
            <Link to="/termos-e-privacidade">
              {" "}
              Termos de uso e Aviso de privacidade{" "}
            </Link>
            da Finance.
          </span>
        </div>
      </div>
    </>
  );
};

export default ContentAuth;
