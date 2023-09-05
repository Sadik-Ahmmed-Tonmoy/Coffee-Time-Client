import { Parallax } from "react-parallax";
import bg from "../../../assets/WeAreOpen/bg.png";
import img from "../../../assets/HotCoffee/img.png";

const WeAreOpen = () => {
  return (
    <>
      <Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="coffee"
        strength={-200}
      >
        <div className="container mx-auto h-72 md:h-96 p-2">
          <div className="flex flex-col items-center justify-between h-full text-center">
            <div>
              <h3 className="text-center text-5xl md:text-8xl mt-8">We are Open</h3>
            </div>
            <div>
              <p className="font-semibold text-2xl md:text-4xl">Monday - Friday</p>
              <p className="text-2xl">10:00 am - 10:00 pm</p>
            </div>
            <div>
            <p className="font-semibold text-2xl md:text-4xl">Saturday - Sunday</p>
            <p className="text-2xl">09:00 am - 12:00 am</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default WeAreOpen;
