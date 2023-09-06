import bg from "../../../assets/WhitheCoffee/bg.png";
import img from "../../../assets/WhitheCoffee/img.png";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
          className="bg-no-repeat bg-cover mt-10"
          // style={{ backgroundImage: `url('${bg}')` }}
        >
          <div className="container mx-auto p-2">
            <div className="md:flex items-center justify-around">
              <div
                data-aos="flip-left"
                data-aos-duration="2000"
                className="text-center"
              >
                <h3 className="text-5xl md:text-8xl">
                  White <br /> Coffee
                </h3>
                <button className="green-btn">Order Now</button>
              </div>
              <div
                data-aos="flip-right"
                data-aos-duration="2000"
                className="md:w-4/12 flex flex-col items-center"
              >
                <img className="mb-6 md:mb-14" src={img} alt="" />
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
