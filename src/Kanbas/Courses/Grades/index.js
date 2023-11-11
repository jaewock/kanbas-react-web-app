import React from "react";
import { useParams } from "react-router-dom";
import {
  FaDownload,
  FaUpload,
  FaCog,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import db from "../../Database";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <div>
      <div className="wd-action-buttons d-flex justify-content-end">
        <button className="btn btn-light me-2">
          <FaDownload className="me-1" /> Import
        </button>

        <div className="btn-group me-1">
          <button
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaUpload className="me-1" /> Export
          </button>
          <ul className="dropdown-menu">
            <li>Option 1</li>
            <li>Option 2</li>
          </ul>
        </div>

        <button className="btn btn-light">
          <FaCog />
        </button>
      </div>

      <hr />

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="studentSearch" className="form-label">
            <h6>Student Names</h6>
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white">
              <FaSearch />
            </span>
            <select className="form-select" id="studentSearch">
              <option value="student1">Student 1</option>
              <option value="student2">Student 2</option>
              <option value="student3">Student 3</option>
            </select>
          </div>
        </div>

        <div className="col">
          <label htmlFor="assignmentSearch" className="form-label">
            <h6>Assignment Names</h6>
          </label>
          <div className="input-group">
            <span className="input-group-text bg-white">
              <FaSearch />
            </span>
            <select className="form-select" id="assignmentSearch">
              <option value="assignment1">Assignment 1</option>
              <option value="assignment2">Assignment 2</option>
              <option value="assignment3">Assignment 3</option>
            </select>
          </div>
        </div>
      </div>

      <div className="wd-action-buttons">
        <button className="btn btn-light mb-3">
          <FaFilter className="me-2" /> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th className="text-start">Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr key={user._id}>
                  <th className="font-weight-bold text-start">
                    {`${user.firstName} ${user.lastName}`}
                  </th>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
