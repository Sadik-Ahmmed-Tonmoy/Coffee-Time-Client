import bg from "../../../assets/BlackCoffee/bg.png";
import img from "../../../assets/BlackCoffee/img.png";

const BlackCoffee = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover h-screen"
        style={{ backgroundImage: `url('${bg}')` }}
      >
        <div className="flex items-center justify-between h-full container mx-auto">
          <div className="ms-20">
            <h2 className="text-8xl">
              Black <br /> Coffee
            </h2>
            <button className="mt-3 btn btn-primary">Order Now</button>
          </div>
          <div className=" flex flex-col items-center w-6/12 h-full justify-center">
            <img className=" mb-14" src={img} alt="" />
            <p className="w-4/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus vel laudantium assumenda non minus nihil nisi.
              Explicabo optio deserunt accusantium!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackCoffee;
