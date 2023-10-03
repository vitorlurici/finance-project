import './App.scss'
import { BlurLogo,} from './components/img/blur-logo'
import { LoginIcon } from './components/img/login-icon'

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
        <h1 className="h1">Controle de suas finanças na palma da mão</h1>
        <h2 className="h2">A Finance fornece uma maneira simples de 
        cuidar do seu dinheiro de forma gratuita.</h2>
        <button>Inscreva-se</button>
        </div>
        <div className="right-content">
        🔥
        </div>
      </div>

    </main>
  )
}

export default App
