import "./App.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  House,
  LayoutDashboard,
  Package,
  ArrowRightLeft,
  ChartNoAxesColumn,
  Bell,
} from "lucide-react";

import Dashboard from "./pages/DashBoard";
import Inventory from "./pages/Inventory";
import Transactions from "./pages/Transactions";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/inventory", label: "Inventory", icon: Package },
  { path: "/transactions", label: "Transactions", icon: ArrowRightLeft },
  { path: "/analytics", label: "Analytics", icon: ChartNoAxesColumn },
  { path: "/alerts", label: "Alerts", icon: Bell },
];

function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="nav-home">
          <div className="nav-home-container">
            <div className="nav-home-container-icon">
              <House />
            </div>
            <div className="nav-home-container-text">
              <div>StockPilot</div>
              <div>Inventory Manager</div>
            </div>
          </div>
        </div>

        <nav className="navbar">
        {navItems.map(({ path, label, icon: Icon }) => (
  <NavLink
    key={path}
    to={path}
    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
  >
    <Icon />
    {label}
    {label === "Alerts" && <span className="nav-badge">10</span>}
  </NavLink>
))}
        </nav>
      </aside>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
