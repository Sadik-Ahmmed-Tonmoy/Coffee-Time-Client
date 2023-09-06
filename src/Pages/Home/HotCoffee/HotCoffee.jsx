import { Parallax } from "react-parallax";
import bg from "../../../assets/HotCoffee/bg.png";
import img from "../../../assets/HotCoffee/img.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const HotCoffee = () => {
  return (
    <>
      <Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-300}
      >
        <div className="container mx-auto p-2 mt-10">
          <div className="flex flex-col-reverse md:flex md:flex-row md:justify-evenly items-center w-full">
            <div data-aos="zoom-out-right"
     data-aos-duration="2000"  className="md:w-4/12 flex flex-col items-center">
              <img className="mb-6 md:mb-14" src={img} alt="" />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus vel laudantium assumenda non minus nihil nisi.
                Explicabo optio deserunt accusantium!
              </p>
            </div>
            <div data-aos="zoom-out-left"
     data-aos-duration="2000"  className="text-center">
              <h3 className="text-5xl md:text-8xl">
                Hot <br /> Coffee
              </h3>
              <button className="green-btn">Order Now</button>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default HotCoffee;
