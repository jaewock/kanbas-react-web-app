import React from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaPencilAlt, FaTrash } from "react-icons/fa";
import "./index.css";
import db from "../Database";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const backgroundColors = db.backgroundColors;

  return (
    <div className="ps-4">
      <h1>Dashboard</h1>
      <hr className="mb-4" />
      <div className="ps-4">
        <div>
          <h3>{`Published Courses (${courses.length})`}</h3>
        </div>
        <hr className="mb-4" />

        <div className="wd-add-update-course">
          <h5>Add or Update Course</h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control mb-2"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control mb-2"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />

          <button className="btn btn-success me-2" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-primary" onClick={updateCourse}>
            Update
          </button>
        </div>

        <hr className="mb-4" />

        <div className="d-flex flex-row flex-wrap">
          {courses.map((course, index) => (
            <div
              key={course._id}
              style={{ backgroundColor: getCardColor(backgroundColors, index) }}
              className="card"
            >
              <div className="wd-card-top">
                <FaEllipsisV className="wd-more-icon" />
              </div>
              <div className="wd-card-bottom">
                <Link
                  to={`/Kanbas/Courses/${course._id}`}
                  className="wd-course-link"
                >
                  {`${course.number} ${course.name}`}
                </Link>
                <p className="wd-course-description">
                  {`${course._id}`}
                  <br />
                  {`${course.startDate} to ${course.endDate}`}
                  <br />
                  <FaPencilAlt
                    className="pencil-icon wd-info-icon"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  />
                  <FaTrash
                    className="trash-icon wd-info-icon"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Function to determine card color based on index
function getCardColor(backgroundColors, index) {
  return backgroundColors[index % backgroundColors.length];
}

export default Dashboard;
