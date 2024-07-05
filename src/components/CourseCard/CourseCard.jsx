import React from "react";
import "./CourseCard.css";

const CourseCard = ({ name, mentor }) => {
  return (
    <div className="course-card">
      <div className="course-card-img-box">
        <img src="./react-course.jpg" alt="mentor" className="mentor" />
      </div>
      <div className="course-card-text-box">
        <h3>{name}</h3>
        <p>მენტორი:</p>
        <span>{mentor}</span>

        <p className="about-course">იხილეთ მეტი</p>
      </div>
    </div>
  );
};

export default CourseCard;
