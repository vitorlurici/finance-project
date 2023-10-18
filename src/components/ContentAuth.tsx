import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { date, object, string } from "yup";

const schema = object({
  name: string().required("Nome obrigatório").min(3, "Mínimo 3 caracteres"),
  email: string()
    .required("E-mail obrigatório")
    .email("Digite no formato 'exemplo@email.com'"),
  password: string()
    .required("Senha obrigatório")
    .min(6, "Mínimo 6 caracteres"),
  createdOn: date().default(() => new Date()),
});

const ContentAuth = ({ activeButton }: { activeButton: number | null }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => console.log(data));

  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setEmail("");
  //   setSenha("");
  // }, [activeButton]);

  const showPassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <div className="all-forms">
        <form
          className={` ${activeButton === 2 ? "register" : "hidden register"}`}
          onSubmit={onSubmit}
        >
          <div className="float-label">
            <input type="text" placeholder="" {...register("name")} />
            <label>Nome</label>
            <span className="error">{errors?.name?.message}</span>
          </div>
          <div className="float-label">
            <input type="email" placeholder="" {...register("email")} />
            <label>E-mail</label>
            <span className="error">{errors?.email?.message}</span>
          </div>
          <div className="float-label">
            <input
              type={show ? "text" : "password"}
              placeholder=""
              {...register("password")}
            />
            <label>Senha</label>
            <div className="password-eye">
              {show ? (
                <FiEye onClick={showPassword} />
              ) : (
                <FiEyeOff onClick={showPassword} />
              )}
            </div>
            <span className="error">{errors?.password?.message}</span>
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
          <Link to="/dashboard">
            <button type="submit">ENTRAR</button>
          </Link>
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
