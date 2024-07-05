import React, { useState } from "react";
import "./SingleCourseSection.css";
import coursesData from "../../../../coursesData";

const SingleCourseSection = ({ params }) => {
  const [courses, setCourses] = useState(coursesData);
  const singleCourse = courses.filter((course) => course.id == params.id);
  const { id, name, mentor, company, category, description } = singleCourse[0];

  return (
    <div className="single-product-container">
      <img
        className="single-course-image"
        src="../react-course.jpg"
        alt="course-image"
      />
      <h1 className="single-product-title">{name}</h1>
      <p className="single-product-description">{description}</p>
      <div className="single-product-details-box">
        <p className="single-product-rating">მენტორი: {mentor}</p>
        <p className="single-product-price">კომპანია: {company}</p>
      </div>
      <div className="single-product-details-box">
        <p className="single-product-category">კატეგორია: {category}</p>
      </div>
      <button className="main-btn single-course-btn">კურსის დაწყება</button>
    </div>
  );
};

export default SingleCourseSection;
