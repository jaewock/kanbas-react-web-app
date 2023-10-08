import React from "react";
import { Link } from "react-router-dom";
import { FaEllipsisV, FaPencilAlt } from "react-icons/fa";
import db from "../Database";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
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
                  <FaPencilAlt className="pencil-icon wd-info-icon" />
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
