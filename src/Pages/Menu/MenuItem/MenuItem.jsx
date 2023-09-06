import { useContext } from "react";
import { AuthContext } from "./../../../providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import axios from "axios";

const MenuItem = ({ item }) => {
  const { Name, ImageURL, Price, _id } = item;
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user) {
      const orderItem = {
        Name,
        ImageURL,
        Price,
        itemId: _id,
        email: user?.email,
      };
      axios.post("http://localhost:5000/carts", orderItem).then((response) => {
        if (response.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please login to add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="flex md:w-6/12 mx-auto my-5">
      <img className="w-24 m-2 rounded-xl" src={ImageURL} alt="" />
      <div className="flex justify-between w-full">
        <div className="w-8/12">
          <h3 className="text-2xl">{Name} </h3>
          <button onClick={() => handleAddToCart()} className="green-btn my-2">
            Add To Cart
          </button>
        </div>
        <div>
          <p className="text-[#29a19c] font-extrabold">${Price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
