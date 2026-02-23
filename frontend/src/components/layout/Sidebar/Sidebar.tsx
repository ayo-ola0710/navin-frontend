import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  X,
  Shield,
  Truck,
  Settings,
} from "lucide-react";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItemsOne = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "Shipments",
      icon: <Truck size={20} />,
      path: "/dashboard/shipments",
    },
    {
      name: "Blockchain Ledger",
      icon: <img src="/images/icons/wallet-main.svg" alt="Ledger" className="custom-icon" />,
      path: "/dashboard/blockchain-ledger",
    },
    {
      name: "Settlements",
      icon: <img src="/images/icons/cash-main.svg" alt="Settlements" className="custom-icon" />,
      path: "/dashboard/settlements",
    },
    {
      name: "Analytics",
      icon: <img src="/images/icons/leader-board.svg" alt="Analytics" className="custom-icon" />,
      path: "/dashboard/analytics",
    },
  ];
  const menuItemsTwo = [
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/dashboard/settings",
    },
    {
      name: "Help Center",
       icon: <img src="/images/icons/support-main.svg" alt="Analytics" className="custom-icon" />,
      path: "/dashboard/help-center",
    },
    
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">N</div>
          <span>NAVIN</span>
        </div>
        <button className="mobile-close" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <div className="nav-container">
        <h1 className="nav-header">MAIN MENU</h1>
        <nav className="sidebar-nav">
          {menuItemsOne.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                className={`nav-item ${isActive ? "active" : ""}`}
                onClick={() => handleNavigation(item.path)}
                title={item.name}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
      <div className="nav-container"> 
        <h1 className="nav-header">SYSTEM</h1>
        <nav className="sidebar-nav">
          {menuItemsTwo.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.name}
                className={`nav-item ${isActive ? "active" : ""}`}
                onClick={() => handleNavigation(item.path)}
                title={item.name}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar-icon">
            <Shield/>
          </div>
          <div className="user-info">
            <p className="user-name">Enterprise Node</p>
            <div className="sync-update">
                <div className="sync-icon" />

            <p className="user-role">Logistics Manager</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
