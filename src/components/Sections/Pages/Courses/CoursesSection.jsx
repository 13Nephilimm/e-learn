import React, { useState } from "react";
import "./CoursesSection.css";
import { Link } from "react-router-dom";
import { BsSearchHeartFill } from "react-icons/bs";
import coursesData from "../../../../coursesData";
import CourseCard from "../../../CourseCard/CourseCard";

const CoursesSection = () => {
  const [courses, setCourses] = useState(coursesData);
  const [search, setSearch] = useState("");

  const allCourses = courses.filter((course) => {
    return search.toLowerCase() === ""
      ? course
      : course.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <section className="courses-section">
        <div className="filters-container">
          <h1 className="filters-heading">ყველა კურსი</h1>
          <div className="courses-search-box">
            <BsSearchHeartFill className="search-icon" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="search input"
              placeholder="ძიება..."
            />
          </div>
          <div className="filters"></div>
        </div>
        <div className="courses-container">
          {allCourses.map((course) => {
            return (
              <Link
                to={`/courses/${course.id}`}
                key={course.id}
                className="course-link"
              >
                <CourseCard name={course.name} mentor={course.mentor} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CoursesSection;
