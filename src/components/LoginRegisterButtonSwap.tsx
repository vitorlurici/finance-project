import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface LoginRegisterButtonProps {
  activeButton: number | null;
  setActiveButton: React.Dispatch<React.SetStateAction<number | null>>;
}

const LoginRegisterButtonSwap: React.FC<LoginRegisterButtonProps> = ({
  activeButton,
  setActiveButton,
}) => {
  const location = useLocation();

  useEffect(() => {
    const setActiveButtonBasedOnURL = () => {
      if (location.pathname.startsWith("/auth/login")) {
        setActiveButton(1);
      } else {
        setActiveButton(2);
      }
    };

    setActiveButtonBasedOnURL();
  }, [location]);

  return (
    <div className="top-login">
      <button
        className={`${activeButton === 1 ? "active-button" : ""}`}
        onClick={() => setActiveButton(1)}
      >
        ENTRAR
      </button>
      <button
        className={`${activeButton === 2 ? "active-button" : ""}`}
        onClick={() => setActiveButton(2)}
      >
        CADASTRAR
      </button>
    </div>
  );
};

export default LoginRegisterButtonSwap;
