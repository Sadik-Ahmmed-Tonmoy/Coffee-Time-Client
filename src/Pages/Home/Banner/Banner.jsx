import image from "../../../assets/Banner/Image.png";
import bottomDesign from "../../../assets/Banner/Design.png";
import bg from "../../../assets/Banner/Icon.png";
import { Parallax, Background } from 'react-parallax';

const Banner = () => {
  return (
    <>
    <Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="Coffee"
        strength={-1000}
    >
      <div className="h-screen flex items-center justify-between pt-20 bg-no-repeat bg-center bg-auto" >
        <div className="ms-20">
          <h1 className="text-5xl">Coffee Time</h1>
          <p>headline</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima
            deserunt repellat dolores architecto fuga!
          </p>
          <button className="btn mt-5 btn-primary">Order Now</button>
        </div>
        <div>
        <img src={image} alt="" />
        </div>
      </div>
   
      <img className="w-full -mt-80" src={bottomDesign} alt="" />
      </Parallax>
    </>
  );
};

export default Banner;
