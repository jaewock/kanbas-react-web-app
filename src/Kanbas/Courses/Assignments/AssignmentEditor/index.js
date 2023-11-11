// AssignmentEditor.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import "./index.css";

function AssignmentEditor() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const selectedAssignment = useSelector(
    (state) => state.assignmentsReducer.selectedAssignment
  );

  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(
    selectedAssignment || { title: "", description: "", dueDate: "", points: 0 }
  );

  const handleSave = () => {
    if (assignment._id) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment({ ...assignment, _id: Date.now().toString() }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
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
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        className="wd-assignment-name form-control mb-4"
        placeholder="New Assignment"
      />
      <p className="mb-1"></p>
      <textarea
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="wd-assignment-description form-control mb-4"
        placeholder="New Assignment Description"
      />
      <p className="mb-1">Points</p>
      <input
        type="number"
        value={assignment.points}
        onChange={(e) =>
          setAssignment({ ...assignment, points: parseInt(e.target.value, 10) })
        }
        className="wd-assignment-points form-control mb-4"
      />
      <p className="mb-1">Due Date</p>
      <input
        type="datetime-local"
        value={assignment.dueDate}
        onChange={(e) =>
          setAssignment({ ...assignment, dueDate: e.target.value })
        }
        className="wd-assignment-due-date form-control mb-4"
      />
      <p className="mb-1">Available From</p>
      <input
        type="datetime-local"
        value={assignment.availableFrom}
        onChange={(e) =>
          setAssignment({ ...assignment, availableFrom: e.target.value })
        }
        className="wd-assignment-due-date form-control mb-4"
      />
      <p className="mb-1">Available Until</p>
      <input
        type="datetime-local"
        value={assignment.availableUntil}
        onChange={(e) =>
          setAssignment({ ...assignment, availableUntil: e.target.value })
        }
        className="wd-assignment-due-date form-control mb-4"
      />

      <hr></hr>
      <div className="d-flex justify-content-end">
        <button className="btn btn-light me-1" onClick={handleCancel}>
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-danger me-2">
          Save
        </button>
      </div>
      <hr></hr>
    </div>
  );
}

export default AssignmentEditor;
