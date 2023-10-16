import React from "react";
import { useParams } from "react-router-dom";
import {
  FaGripVertical,
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
} from "react-icons/fa";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

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
        <div className="">
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
            className="form-control mb-2"
            placeholder="Module Name"
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            className="form-control mb-2"
            placeholder="Module Description"
          />
          <div className="float-end mt-2">
            <button
              className="btn btn-success me-2"
              onClick={() =>
                dispatch(addModule({ ...module, course: courseId }))
              }
            >
              Add
            </button>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(updateModule(module))}
            >
              Update
            </button>
          </div>
        </div>

        <hr />

        {modules.map((module, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-secondary align-items-center d-flex mb-5"
          >
            <FaGripVertical className="me-3" />
            <h6 className="mt-2">
              {module.name}: {module.description}
            </h6>

            <div className="ms-auto d-flex align-items-center">
              <button
                className="ms-3 me-2 btn btn-danger btn-sm"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
              <button
                className="me-2 btn btn-success btn-sm"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
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
