import { Error } from "../../components/svg/Error";
import "./Children.scss";
const ErrorPage = () => {
  return (
    <main className="children-main">
      <h2>Oooops!</h2>
      <span>
        <h4>A página não existe ou não foi encontrada.</h4>
      </span>
      <div className="erro">
        <Error />
      </div>
    </main>
  );
};

export default ErrorPage;
