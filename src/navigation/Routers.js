import { Routes, HashRouter, Route } from "react-router-dom";
import DashboardPage from "../pages/dashboardPage";

const Routers = () => {
  return (
    <div>
        <HashRouter>
            <Routes>
                <Route path = "/" element = {<DashboardPage />}/>
                <Route path = "/" element = {<DashboardPage />}/>
            </Routes>
        </HashRouter> 
      
    </div>
  )
}

export default Routers
