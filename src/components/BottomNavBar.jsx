import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUsers } from "react-icons/fi";
import { MdExplore } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { AiOutlineTrophy } from "react-icons/ai";
import { RiWallet3Line } from "react-icons/ri";
import "./BottomNavBar.css";

const BottomNavBar = () => {
  const [activePage, setActivePage] = useState("Home");

  const navItems = [
    { name: "Home", icon: <FiHome />, path: "/home" },
    { name: "Group", icon: <FiUsers />, path: "/group" },
    { name: "Discovery", icon: <MdExplore />, path: "/discovery" },
    { name: "Admin", icon: <IoShieldCheckmark />, path: "/admin" },
    { name: "Leaderboard", icon: <AiOutlineTrophy />, path: "/leaderboard" },
    { name: "Wallet", icon: <RiWallet3Line />, path: "/wallet" },
  ];

  return (
    <div className="app-container">
      <nav className="bottom-nav">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-item ${activePage === item.name ? "active" : ""}`}
            onClick={() => setActivePage(item.name)}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavBar;
