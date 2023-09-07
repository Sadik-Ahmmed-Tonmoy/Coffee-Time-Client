import axios from "axios";
import CartItemList from "../../../Components/CartItemList/CartItemList";
import { useContext } from "react";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const { user } = useContext(AuthContext)
  const total = cart.reduce((sum, item) => parseFloat(item.Price) + sum, 0);
  const roundedTotal = total.toFixed(2);
  const paymentDetails = { total, name:user?.displayName, email: user?.email }
  const handlePayment = () => {
    axios.post("https://burger-week-server.vercel.app/order", paymentDetails).then((result) => {
      console.log(result.data);
      window.location.replace(result.data.url)
    });
  };

  return (
    <>
      <div className="flex justify-around w-full">
        {" "}
        <h3 className="text-3xl">Total Items: {cart?.length}</h3>
        <h3 className="text-3xl">
          Total Price: <span className="text-orange-500"> ${roundedTotal}</span>
        </h3>
      </div>
      <button
        onClick={() => handlePayment()}
        className="green-btn text-white text-center my-6"
      >
        Pay Now
      </button>
      {cart.map((item) => (
        <CartItemList key={item._id} item={item} />
      ))}
    </>
  );
};

export default MyCart;
