const MenuItem = ({ name, details, price, image }) => {
  return (
    <div className="flex md:w-6/12 mx-auto my-5">
      <img className="w-24 m-2" src={image} alt="" />
      <div className="flex justify-between items-center w-full">
        <div className="w-8/12">
          <h2 className="text-2xl">Name: {name} </h2>
          <p>Details: {details}</p>
          <button className="green-btn my-2">Add To Cart</button>
        </div>
        <div>
          <p>Price : ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
