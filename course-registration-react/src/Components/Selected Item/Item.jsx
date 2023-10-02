import PropTypes from "prop-types";


const Item = ({ item }) => {

    const {course_name, price } = item;

  return (
    <div className=" md:text-sm lg:text-lg text-start bg-slate-300 rounded-lg m-4 text-black p-2">
      <div>
        <li>{course_name}</li>
      </div>
      
      <div>
        <h2>
          Total Price: <span className="text-red-500">{price}</span> USD
        </h2>
      </div>
    </div>
  );
};


Item.propTypes = {
    item: PropTypes.object
}
export default Item;
