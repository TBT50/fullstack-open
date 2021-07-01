import "./App.css";
import React, { useState } from "react";

import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 10,
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: "Backend programming",
      parts: [
        {
          name: "Fundamentals of Node",
          exercises: 13,
          id: 1,
        },
        {
          name: "Fundamentals of Express",
          exercises: 10,
          id: 2,
        },
      ],
    },
  ];
  return (
    <>
      <h1>Fullstack Open</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
