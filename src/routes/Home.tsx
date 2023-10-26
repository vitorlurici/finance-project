import { Link } from "react-router-dom";
import { FlagIcon } from "../components/svg/FlagIcon";
import { GraphicIcon } from "../components/svg/GraphicIcon";
import { MoneyHand } from "../components/svg/MoneyHand";

const Home = () => {
  return (
    <>
      <div className="content-container">
        <div className="left-content">
          <h2>Controle de suas finanças na palma da mão</h2>
          <h4>
            A Finance fornece uma maneira simples de cuidar do seu dinheiro de
            forma gratuita.
          </h4>
          <Link to="/auth">
            <button>Inscreva-se</button>
          </Link>
        </div>
        <div className="right-content">
          <div className="emoji money">💸</div>
          <div className="emoji fire">🔥</div>
          <img src="./src/img/person-smartphone.PNG" width={278} />
          <div className="emoji face">🤑</div>
          <div className="emoji rocket">🚀</div>
        </div>
      </div>
      <div className="info-container">
        <div className="left-content">
          <MoneyHand />
        </div>
        <div className="right-content">
          <div>
            <h2>Não perca tempo</h2>
            <h1>Conheça nosso Gerenciador Financeiro</h1>
          </div>
          <div className="items-content">
            <GraphicIcon />
            <div>
              <h3>Monte um Planejamento</h3>
              <br />
              <h4>
                Acompanhe e faça orçamentos mensais para manter seus gastos sob
                controle.
              </h4>
            </div>
          </div>
          <hr />
          <div className="items-content">
            <FlagIcon />
            <div>
              <h3>Defina objetivos</h3>
              <br />
              <h4>
                Determine metas para alcançar seus sonhos. Crie objetivos no app
                e realize o que deseja
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
