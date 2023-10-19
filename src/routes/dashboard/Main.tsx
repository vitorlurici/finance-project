import "./Dashboard.scss";
import TopBarDashboard from "../../components/dashboard/TopBarDashboard";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="dashboard">
      <TopBarDashboard />
      <Outlet />
    </main>
  );
};
export default Main;
