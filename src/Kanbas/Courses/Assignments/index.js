import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
  FaPencilAlt,
  FaGripVertical,
} from "react-icons/fa";
import db from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <div className="d-flex-col">
        <div className="d-flex">
          <input
            type="text"
            className="form-control w-25"
            id="search-assignment"
            placeholder="Search for Assignment"
          />
          <div className="wd-action-buttons ms-auto">
            <button className="btn btn-light btn-sm">
              <FaPlus className="me-2" />
              Group
            </button>
            <button className="btn btn-danger btn-sm">
              <FaPlus className="me-2" />
              Assignment
            </button>
            <button className="btn btn-light btn-sm">
              <FaEllipsisV className="more-icon" />
            </button>
          </div>
        </div>
        <hr />

        <div className="list-group">
          <div className="list-group-item list-group-item-secondary pt-4">
            <FaGripVertical className="me-3" />
            ASSIGNMENTS
            <div className="float-end">
              <span className="rounded-pill p-2 border border-secondary me-2">
                40% of total
              </span>
              <FaPlus className="me-3" />
              <FaEllipsisV />
            </div>
          </div>

          {courseAssignments.map((assignment) => (
            <Link
              key={assignment._id}
              to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              className="list-group-item p-0"
            >
              <div className="list-group-item wd-left-green-border d-flex align-items-center">
                <FaGripVertical className="me-3" />
                <FaPencilAlt className="wd-green-icon me-5" />

                <div>
                  <div className="row">
                    <strong className="p-0">
                      {assignment._id} - {assignment.title}{" "}
                    </strong>
                  </div>
                  <div className="row">
                    <p className="wd-assignment-description p-0 mb-1">
                      Due: Sep 18, 2022 at 11:59pm | 100 pts
                    </p>
                  </div>
                </div>

                <div className="ms-auto">
                  <FaCheckCircle className="wd-green-icon me-3" />
                  <FaEllipsisV />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignments;
