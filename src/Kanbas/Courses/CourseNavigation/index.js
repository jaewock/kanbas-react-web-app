import { Link, useParams, useLocation } from "react-router-dom";
import db from "../../Database/";
import "./index.css";

function CourseNavigation() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const courseNavigationItems = db.courseNavigationItems;

  return (
    <div className="wd-courses-list-group mt-2 mx-4" style={{ width: 150 }}>
      {courseNavigationItems.map((item, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${item}`}
          className={`wd-courses-list-group-item ${
            pathname.includes(item) ? "active" : ""
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
