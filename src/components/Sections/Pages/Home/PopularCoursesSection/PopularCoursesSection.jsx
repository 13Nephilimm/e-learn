import React from "react";
import "./PopularCoursesSection.css";
import CourseCard from "../../../../CourseCard/CourseCard";

const PopularCoursesSection = () => {
  return (
    <section className="section popular-courses-section">
      <h1 className="popular-courses-heading">პოპულარული კურსები</h1>
      <div className="popular-courses-container">
        <CourseCard
          name={"React კურსი დამწყებთათვის"}
          mentor={"Jonas Schmedtmann"}
        />
        <CourseCard name={"C# Advanced კურსი"} mentor={"ნიკოლოზ სანიკიძე"} />
        <CourseCard name={"UI/UX კურსი"} mentor={"გივი სიდამონიძე"} />
      </div>
    </section>
  );
};

export default PopularCoursesSection;
