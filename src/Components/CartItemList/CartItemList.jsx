import axios from "axios";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const CartItemList = ({ item }) => {
  const { Name, Price, ImageURL, _id } = item;
  const [, refetch] = useCart();

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/cart/delete/${_id}`).then((res) => {
      console.log(res)
      if (res.data.deletedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div className="md:w-8/12 my-2 p-2 border rounded-md">
      <div className="flex">
        <div className="avatar border rounded-md ">
          <div className="w-24 h-24 my-auto rounded">
            <img src={ImageURL} />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="ms-2">
            <h3 className='text-2xl'>{Name}</h3>
            <p className="mt-4">
              Price: <span className="text-orange-500">${Price}</span>
            </p>
          </div>
          <div>
            {" "}
            <button
              onClick={() => handleDelete()}
              className="btn btn-square btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
