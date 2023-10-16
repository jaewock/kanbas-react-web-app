// Assignments.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaPlus,
  FaEllipsisV,
  FaCheckCircle,
  FaPencilAlt,
  FaGripVertical,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment, selectAssignment } from "./assignmentsReducer";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  const handleAddAssignment = () => {
    dispatch(selectAssignment(null));
  };

  const handleDeleteAssignment = (assignmentId) => {
    dispatch(deleteAssignment(assignmentId));
  };

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
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor`}>
              <button
                className="btn btn-danger btn-sm"
                onClick={handleAddAssignment}
              >
                <FaPlus className="me-2" />
                Assignment
              </button>
            </Link>
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

          {assignments.map((assignment) => (
            <div key={assignment._id} className="list-group-item p-0">
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
                      Due: {assignment.dueDate} | {assignment.points} pts
                    </p>
                  </div>
                </div>

                <div className="ms-auto">
                  <FaCheckCircle className="wd-green-icon me-3" />
                  <FaEllipsisV />
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => handleDeleteAssignment(assignment._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignments;
