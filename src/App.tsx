import "./App.scss";
import { BlurLogo } from "./components/img/blur-logo";
import { FlagIcon } from "./components/img/flag-icon";
import { GraphicIcon } from "./components/img/graphic-icon";
import { LoginIcon } from "./components/img/login-icon";
import { Man } from "./components/img/man";
import { MoneyHand } from "./components/img/money-hand";
import { PersonSmartphone } from "./components/img/person-smartphone";
import { WhiteLogo } from "./components/img/white-logo";

function App() {
  return (
    <main>
      <header className="header">
        <header className="header-container">
          <div className="logo-container">
            <BlurLogo />
            <span>finance</span>
          </div>
          <button>
            <LoginIcon />
            <span>Acessar sua conta</span>
          </button>
        </header>
      </header>
      <div className="content-container">
        <div className="left-content">
          <h2>Controle de suas finanças na palma da mão</h2>
          <h4>
            A Finance fornece uma maneira simples de cuidar do seu dinheiro de
            forma gratuita.
          </h4>
          <button>Inscreva-se</button>
        </div>
        <div className="right-content">
          <div className="emoji money">💸</div>
          <div className="emoji fire">🔥</div>
          <PersonSmartphone />
          <div className="emoji face">🤑</div>
          <div className="emoji rocket">🚀</div>
        </div>
      </div>

      <div className="info-container">
        <div className="left-content"></div>
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
              <MoneyHand />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="logo-container">
          <WhiteLogo />
          <span>finance</span>
        </div>
        <hr />
        <div className="bottom-content">
          <div className="bottom">
            <h2>Ajuda</h2>
            <h4>Duvidas Gerais</h4>
            <h4>Fale conosco</h4>
          </div>
          <div className="bottom">
            <h2>Institucional</h2>
            <h4>Home</h4>
            <h4>Sobre nós</h4>
            <h4>Termos e Privacidade</h4>
          </div>
        </div>
        <hr />
        <div className="last-content"></div>© 2023 Finance
      </div>
    </main>
  );
}

export default App;
