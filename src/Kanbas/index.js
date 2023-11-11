import React, { useEffect } from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";

function PageTitle() {
  const { route } = useParams();
  return <h1 className="ms-4">{route}</h1>;
}

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const init = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };

  useEffect(() => {
    init();
  }, []);

  const addNewCourse = async () => {
    const newCourse = await client.addCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.log(error);
    }
  };
  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Provider store={store}>
      {" "}
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path=":route/*" element={<PageTitle />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;
