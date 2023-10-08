import React from "react";
import { useParams } from "react-router-dom";
import {
  FaGripVertical,
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
} from "react-icons/fa";
import db from "../../Database";
import "./index.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);

  return (
    <div>
      <div className="wd-action-buttons d-flex justify-content-end">
        <button className="btn btn-light btn-sm">Collapse All</button>
        <button className="btn btn-light btn-sm">View Progress</button>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light btn-sm dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaCheckCircle className="me-2 wd-green-icon" />
            Publish All
          </button>
          <ul className="dropdown-menu">
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        </div>
        <button className="btn btn-danger btn-sm">
          <FaPlus className="me-2" />
          Module
        </button>
        <button className="btn btn-light btn-sm">
          <FaEllipsisV />
        </button>
      </div>
      <hr className="mt-3 mb-4" />
      <ul className="list-group">
        {modules.map((module, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-secondary align-items-center d-flex mb-5"
          >
            <FaGripVertical className="me-3" />
            <h6 className="mt-2">
              {module.name}: {module.description}
            </h6>
            <div className="ms-auto d-flex">
              <FaCheckCircle className="wd-green-icon me-3" />
              <FaPlus className="me-3" />
              <FaEllipsisV />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;
