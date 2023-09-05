import bg from "../../../assets/WhitheCoffee/bg.png";
import img from "../../../assets/WhitheCoffee/img.png";
import { Parallax, Background } from 'react-parallax';

const WhiteCoffee = () => {
    return (
        <>
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-300}
      >
        <div
          className="bg-no-repeat bg-cover"
          // style={{ backgroundImage: `url('${bg}')` }}
        >
          <div className="container mx-auto ">
            <div className="flex items-center justify-around">
              <div className="">
                <h2 className="text-8xl">
                  White <br /> Coffee
                </h2>
                <button className="mt-3 btn btn-primary">Order Now</button>
              </div>
              <div className="w-4/12 flex flex-col items-center">
                <img className=" mb-14" src={img} alt="" />
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus vel laudantium assumenda non minus nihil nisi.
                  Explicabo optio deserunt accusantium!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
    );
};

export default WhiteCoffee;