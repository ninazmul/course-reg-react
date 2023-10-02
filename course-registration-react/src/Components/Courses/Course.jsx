import PropTypes from 'prop-types';


const Course = ({ course, AddToCart, CreditRemain, time, Credit, Price }) => {
  const { id, cover, course_name, credit, price, description } = course;

  const ButtonClick = () => {
    AddToCart(course);
    CreditRemain(time);
  };

  return (
    <div className="flex-1 w-full h-max gap-4 p-2 card gap-y-auto">
      <div className="">
        <img className="w-full" src={cover} alt="" />
        <h1 className="text-2xl">{course_name}</h1>
        <p className="text-sm ">{description}</p>
        <div className="text-xl flex gap-4">
          <p>$ Price: {price}</p>
          <p className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            Credit: {credit} hr
          </p>
        </div>
        <button
          onClick={ButtonClick}
          className="btn bg-blue-600 text-xl p-1 w-full font-bold hover:bg-white hover:text-black">
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  AddToCart: PropTypes.func,
  CreditRemain: PropTypes.func,
  time: PropTypes.number,
  Credit: PropTypes.func,
  credits: PropTypes.number,
  Price: PropTypes.func,
  prices: PropTypes.number,
};


export default Course;