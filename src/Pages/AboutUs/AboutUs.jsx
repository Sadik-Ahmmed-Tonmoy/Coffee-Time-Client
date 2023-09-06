import bg from "../../assets/AboutUs/Out.png";
import cup from "../../assets/AboutUs/Image.png";
import { Parallax } from "react-parallax";
import { ScrollRestoration } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 pt-16">
          <div className="md:ms-14 text-center">
            <h3 className="text-5xl md:text-8xl">Contact Us</h3>

            <p className="text-center">+880123456789</p>
            <p className="text-center">+880123456789</p>

            <p>example@example.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-5xl md:text-8xl md:mb-5">Coffee Time</h3>
            <p>
              Welcome to Coffee Time, where every moment is an opportunity to
              savor the rich and aromatic world of coffee. We are passionate
              about crafting the perfect cup, and our journey begins with the
              finest coffee beans sourced from around the globe. Whether you're
              a coffee connoisseur or just looking for a cozy spot to unwind,
              our inviting atmosphere and friendly baristas are here to make
              your visit special. From artisanal brews to decadent blends, we
              offer a wide range of coffee options to suit every taste. Join us
              for a coffee break, and let the warm aroma of freshly brewed
              coffee envelop your senses. At Coffee Time, it's not just about
              the coffee; it's about the experience.
            </p>
          </div>
          <div className="h-full flex flex-col justify-between">
            <div className="mt-0 md:mt-16">
              <h3 className="text-5xl md:text-8xl">Sip, Savor, Repeat.</h3>
              <p>
                At Coffee Time, we're dedicated to transforming your coffee
                experience into something truly exceptional. Our journey begins
                with the careful selection of premium coffee beans from the
                world's most renowned coffee-growing regions. From the moment
                you step into our welcoming space, you'll be enveloped in the
                warm, comforting aroma of freshly brewed coffee.
              </p>
            </div>
            <img src={cup} alt="" />
          </div>
        </div>
      </Parallax>
      <ScrollRestoration />
    </>
  );
};

export default AboutUs;
