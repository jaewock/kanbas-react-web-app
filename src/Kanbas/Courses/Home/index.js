import React from "react";
import {
  FaUpload,
  FaHome,
  FaRss,
  FaBullhorn,
  FaChartBar,
  FaBell,
  FaCircle,
} from "react-icons/fa";
import ModuleList from "../Modules/ModuleList";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <div>
        <ModuleList />
        <h1>Status</h1>
        <hr />
      </div>
      <div className="wd-additional-links me-3">
        <div className="wd-additional-links-buttons">
          {[
            { icon: <FaUpload />, text: "Import Existing Content" },
            { icon: <FaUpload />, text: "Import from Commons" },
            { icon: <FaHome />, text: "Choose Home Page" },
            { icon: <FaRss />, text: "View Course Stream" },
            { icon: <FaBullhorn />, text: "New Announcement" },
            { icon: <FaChartBar />, text: "New Analytics" },
            { icon: <FaBell />, text: "View Course Notifications" },
          ].map(({ icon, text }, index) => (
            <div key={index} className="mb-0">
              <button className="btn btn-light">
                {React.cloneElement(icon, { className: "me-2" })}
                {text}
              </button>
            </div>
          ))}

          <h5 className="mt-3 mb-0">To Do</h5>
          <hr className="mt-1 mb-1" />
          {[
            { text: "Grade A1 - ENV + HTML", date: "Sep 18 at 11:59pm" },
            { text: "Grade A2 - CSS + BOOTSTRAP", date: "Oct 2 at 11:59pm" },
          ].map(({ text, date }, index) => (
            <div key={index} className="d-flex mb-2">
              <FaCircle className="text-danger me-2 mt-1" />
              <div>
                <p className="wd-text-red my-0">{text}</p>
                <p className="wd-text-gray">100 points * {date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
