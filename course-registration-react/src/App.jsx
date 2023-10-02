
import { useEffect, useState } from 'react';
import './App.css'
import Cart from './Components/Cart/Cart';
import Courses from './Components/Courses/Courses';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  
  const [cart, setCart] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [credits, setCredits] = useState(0);
  const [prices, setprices] = useState(0);
  
  const AddToCart = course => {

    const totalCredits = credits + course.credit;

    if(cart.some(item => item.id === course.id)){
      toast.error("This course is already in the cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else if (totalCredits > 20) {
      toast.warning("Total credit limit exceeded (20)!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } else {
      const newAdd = [...cart, course];
      setCart(newAdd);
      Credit(course.credit);
    }
  };
    

    const Credit = (totalAddedCredits) => {
      setCredits(credits + totalAddedCredits);
      
      setRemainingCredit(((previousRCredits) => previousRCredits - totalAddedCredits));
      if (remainingCredit - totalAddedCredits === 0){
        toast.warning("You have used all your credits!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    };

  const Price = () => {
    let TotalPrice = 0;

    for (const course of cart) {
      TotalPrice += course.price;
    }
    setprices(TotalPrice);
  }
  useEffect(() => {
    Price();
  },[cart])

  return (
    <>
      <header className="text-5xl font-bold text-center m-4">
        Course Registration
      </header>

      <main className="md:flex md:mx-10">
        <Courses
          AddToCart={AddToCart}
          CreditRemain={remainingCredit}
          Credit={Credit}></Courses>
        <Cart
          cart={cart}
          remainingCredit={remainingCredit}
          credits={credits}
          prices={prices}></Cart>
      </main>
      <ToastContainer />
    </>
  );
}

export default App
