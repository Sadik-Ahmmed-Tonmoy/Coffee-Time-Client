import image from "../../assets/Blog/Image.png";
import bg from "../../assets/Menu/Icon.png";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollRestoration } from "react-router-dom";
AOS.init();

const Blog = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="coffee"
        strength={-400}
      >
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <img
            data-aos="zoom-out-right"
            data-aos-duration="2000"
            className="md:h-screen"
            src={image}
            alt=""
          />
          <div className="w-full text-center my-auto">
            <h3 className="text-5xl md:text-8xl md:mb-10 pt-20">
              Coffee Blogs
            </h3>
            {/* accordion */}
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="p-2"
            >
              <div className="collapse collapse-arrow bg-base-200 my-2">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                  Health Benefits of Coffee
                </div>
                <div className="collapse-content">
                  <p>
                    Caffeine, the most well-known active compound in coffee, is
                    renowned for its ability to enhance mental alertness and
                    concentration. It works by blocking adenosine, a
                    neurotransmitter that promotes relaxation and sleepiness.
                    This, in turn, helps you feel more awake and focused.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 my-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  The Art of Brewing Coffee
                </div>
                <div className="collapse-content">
                  <p>
                    Coffee, more than just a morning ritual, is an art form. The
                    process of brewing coffee is a symphony of flavors, aromas,
                    and techniques that, when mastered, can yield a cup of
                    liquid perfection. For many, it's more than just a beverage;
                    it's a passion and an exploration of taste. Welcome to the
                    captivating world of coffee brewing, where every step is an
                    invitation to savor and create something extraordinary.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 my-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Coffee History and Culture
                </div>
                <div className="collapse-content">
                  <p>
                    The legend of coffee's discovery is rooted in Ethiopia,
                    where, according to folklore, a goat herder named Kaldi
                    noticed that his goats became unusually lively and energetic
                    after nibbling on the bright red berries from a particular
                    tree. Curiosity piqued, Kaldi sampled the berries himself
                    and experienced newfound vitality. This serendipitous
                    encounter is said to have occurred over a thousand years
                    ago, marking the birth of coffee as we know it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <ScrollRestoration/>
    </>
  );
};

export default Blog;
