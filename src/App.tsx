import './App.scss'
import { BlurLogo,} from './components/img/blur-logo'
import { LoginIcon } from './components/img/login-icon'
import { PersonSmartphone } from './components/img/person-smartphone'

function App() {
  return (
    <main>
      <header className="header">
        <header className="header-container">
          <div className="logo-container">
            <BlurLogo/>
            <span>finance</span>
          </div>
          <button>
          <LoginIcon/>
          <span>Acessar sua conta</span>
          </button>
        </header>
      </header>
      <div className="content-container">
        <div className="left-content">
        <h2>Controle de suas finanças na palma da mão</h2>
        <h4>A Finance fornece uma maneira simples de 
        cuidar do seu dinheiro de forma gratuita.</h4>
        <button>Inscreva-se</button>
        </div>
        <div className="right-content">
          <div className="emoji money">
          💸
          </div>
          <div className="emoji fire">
          🔥
          </div>
          <PersonSmartphone/>
          <div className="emoji face">
          🤑
          </div>
          <div className="emoji rocket">
          🚀
          </div>
        </div>
      </div>

      <div className="info-container">
        <div className="left-content">

        </div>
        <div className="right-content">
          <h2>Não perca tempo</h2>
          <h1>Conheça nosso Gerenciador Financeiro</h1>
        </div>
      </div>

      <div className="bottom-container">

      </div>

    </main>
  )
}

export default App
