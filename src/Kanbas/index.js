import React from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function PageTitle() {
  const { route } = useParams();
  return <h1 className="ms-4">{route}</h1>;
}

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path=":route/*" element={<PageTitle />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;
