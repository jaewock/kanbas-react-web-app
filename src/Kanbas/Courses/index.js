import React from "react";
import {
  Route,
  Routes,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import db from "../../Kanbas/Database";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();

  const course = db.courses.find((course) => course._id === courseId);
  const courseNavigationItems = db.courseNavigationItems;
  const currentCourseNavigationItem = courseNavigationItems.find((item) =>
    pathname.includes(item)
  );

  return (
    <div>
      <div className="wd-course-header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li
              className={`breadcrumb-item ${pathname === "/" ? "active" : ""}`}
            >
              <FaBars className="me-3" /> {course.number} {course.name}
            </li>
            {currentCourseNavigationItem && (
              <>
                <span className="breadcrumb-separator">{">"}</span>
                <li
                  className={`breadcrumb-item ${
                    currentCourseNavigationItem === "Home" ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  {currentCourseNavigationItem}
                </li>
              </>
            )}
          </ol>
        </nav>
      </div>
      <hr className="ms-3" />
      <div className="d-flex">
        <CourseNavigation />
        <div className="d-flex-col">
          <h1>{currentCourseNavigationItem}</h1>
          <hr />
          <Routes>
            <Route path="" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
