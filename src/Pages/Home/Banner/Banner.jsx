import image from "../../../assets/Banner/Image.png";
import bottomDesign from "../../../assets/Banner/Design.png";
import bg from "../../../assets/Banner/Icon (2).png";
import { Parallax } from 'react-parallax';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <>
    <Parallax
        blur={{ min: -15, max: 12 }}
        bgImage={bg}
        bgImageAlt="Coffee"
        strength={-200}
    >
      <div className="h-screen flex flex-col md:flex-row md:items-center justify-between pt-20" >
        <div data-aos="fade-up"
     data-aos-duration="2000" className="pt-28 md:pt-0 md:mt-0 md:ms-56 mx-auto p-2">
          <h3 className="text-5xl md:text-8xl">Coffee Time</h3>
          <p>headline</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima
            deserunt repellat dolores architecto fuga!
          </p>
          <button className="green-btn">Order Now</button>
        </div>
        <div >
        <img className="md:mt-14" src={image} alt="" />
        </div>
      </div>
   
      <img className="w-full -mt-[60px] md:-mt-64 z-10" src={bottomDesign} alt="" />
      </Parallax>
    </>
  );
};

export default Banner;
