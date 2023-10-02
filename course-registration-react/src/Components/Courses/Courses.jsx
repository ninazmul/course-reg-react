import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import PropTypes from "prop-types";


const Courses = ({ AddToCart, CreditRemain, Credit, Price }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setCourses(json));
  }, []);

  return (
    <div className="md:w-3/4 text-4xl font-bold grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          AddToCart={AddToCart}
          CreditRemain={CreditRemain}
          Credit={Credit}
          Price={Price}
          ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  AddToCart: PropTypes.func,
  CreditRemain: PropTypes.func,
  Credit: PropTypes.func,
  Price: PropTypes.func
};

export default Courses;