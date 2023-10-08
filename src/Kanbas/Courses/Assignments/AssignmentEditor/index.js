import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import "./index.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="wd-assignment-editor">
      <div className="d-flex justify-content-end">
        <FaCheckCircle className="wd-green-icon me-2 mt-2" />
        <span className="me-2 mt-1">Published</span>
        <button className="btn btn-light btn-sm me-3">
          <FaEllipsisV className="more-icon" />
        </button>
      </div>
      <hr />
      <p className="mb-1">Assignment Name</p>
      <input
        value={assignment.title}
        className="wd-assignment-name form-control mb-4"
      />
      <hr></hr>
      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-light me-1"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
      <hr></hr>
    </div>
  );
}

export default AssignmentEditor;
