import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaHome,
  FaBook,
  FaCalendar,
  FaInbox,
  FaHistory,
  FaCube,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import "./index.css";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaUser /> },
    { label: "Dashboard", icon: <FaHome /> },
    { label: "Courses", icon: <FaBook /> },
    { label: "Calendar", icon: <FaCalendar /> },
    { label: "Inbox", icon: <FaInbox /> },
    { label: "History", icon: <FaHistory /> },
    { label: "Studio", icon: <FaCube /> },
    { label: "Commons", icon: <FaUsers /> },
    { label: "Help", icon: <FaQuestionCircle /> },
  ];
  const { pathname } = useLocation();

  return (
    <div className="wd-kanbas-list-group">
      <div className="wd-kanbas-logo-container">
        <img src="/images/neu-logo.png" alt="NEU Logo" />
      </div>
      {links.map((item, index) => (
        <Link
          key={index}
          to={`/Kanbas/${item.label}`}
          className={`wd-kanbas-list-group-item ${
            pathname.includes(item.label) && "active"
          }`}
        >
          <div className="wd-kanbas-icon-container">{item.icon}</div>
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
