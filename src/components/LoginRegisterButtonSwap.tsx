import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoginRegisterButtonSwap: React.FC = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

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
        className={`custom-button ${activeButton === 1 ? "active-button" : ""}`}
        onClick={() => handleButtonClick(1)}
      >
        ENTRAR
      </button>
      <button
        className={`custom-button ${activeButton === 2 ? "active-button" : ""}`}
        onClick={() => handleButtonClick(2)}
      >
        CADASTRAR
      </button>
    </div>
  );
};

export default LoginRegisterButtonSwap;
