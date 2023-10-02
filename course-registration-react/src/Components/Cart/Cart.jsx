import PropTypes from "prop-types";
import Item from "../Selected Item/Item";

const Cart = ({ cart, remainingCredit, credits, prices }) => {
  return (
    <div className="md:w-1/4 lg:text-3xl font-bold text-center">
      <div>
        <h2 className="text-lg font-bold py-2 border-b-2 md:text-start mx-4">
          Credit Hour Remaining: <span className="text-green-500">{remainingCredit}</span> hr
        </h2>
        <h2 className="py-2">Selected Course: {cart.length}</h2>
        {cart.map((item, idx) => (
          <Item key={idx} item={item}></Item>
        ))}
      </div>
      <div className="text-start p-4">
        <div className="border-b-2 py-2">
          <h2 className="lg:text-lg font-bold">
            Total Credit Hour: <span className="text-green-500">{credits}</span>{" "}
            hr
          </h2>
        </div>
        <div className="border-b-2 py-2">
          <h2 className="lg:text-lg font-bold">
            Total Price: <span className="text-red-500">{prices.toFixed(2)}</span> USD
          </h2>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array,
  remainingCredit: PropTypes.number,
  credits: PropTypes.number,
  prices: PropTypes.number,
};

export default Cart;
