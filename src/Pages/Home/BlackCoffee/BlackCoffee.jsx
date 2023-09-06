import bg from "../../../assets/BlackCoffee/bg.png";
import img from "../../../assets/BlackCoffee/img.png";
import { Parallax, Background } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BlackCoffee = () => {
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
          <div className="container mx-auto p-2">
            <div className="md:flex items-center justify-around">
              <div data-aos-duration="2000" data-aos="fade-left" className="text-center">
                <h3 className="text-5xl md:text-8xl">
                  Black <br /> Coffee
                </h3>
                <button className="black-btn">Order Now</button>
              </div>
              <div
     data-aos-duration="2000" data-aos="fade-right" className="md:w-4/12 flex flex-col items-center">
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

export default BlackCoffee;
