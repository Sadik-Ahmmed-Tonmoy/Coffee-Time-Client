import { ScrollRestoration } from "react-router-dom";
import img from "../../../assets/Menu/Group 1.png";
import top from "../../../assets/Menu/top.png";
import img1 from "../../../assets/Menu/Image.png";
import img2 from "../../../assets/Menu/Images.png";
import img3 from "../../../assets/Menu/2.png";
import bg from "../../../assets/Menu/Icon.png";
import MenuItem from "../MenuItem/MenuItem";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Menu = () => {
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="Coffee"
        strength={-400}
      >
        {/* <div>
           <img src={img} alt="" />
           <div className='container mx-auto'>
           <h3 className="text-5xl md:text-8xl text-center">Coffee Menu</h3>
           <div className='divider'></div>
           <div className='p-2'>
            <MenuItem name={"black"} details={"loremfghddfhdfhfgd"} price={10} image={img}/>
            <MenuItem name={"black"} details={"loremfghddfhdfhfgd"} price={10} image={img}/>
            <MenuItem name={"black"} details={"loremfghddfhdfhfgd"} price={10} image={img}/>
            <MenuItem name={"black"} details={"loremfghddfhdfhfgd"} price={10} image={img}/>
            <MenuItem name={"black"} details={"loremfghddfhdfhfgd"} price={10} image={img}/>
            <MenuItem name={"black"} details={"loremfghddfhdfhfgd"} price={10} image={img}/>
           </div>
           </div>
           </div> */}
        <div>
          <div className="z-10 -mb-20 md:-mb-48 sticky md:fixed">
          <img src={top} alt="" />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div  data-aos-offset="500"
     data-aos-duration="2000" data-aos="fade-right" className="flex flex-col justify-center items-center">
            <img className='' src={img1} alt="" />
            <h3 className='text-4xl md:text-6xl mt-10'>Hot Coffee</h3>
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
          </div>
          <div  data-aos-offset="500"
     data-aos-duration="2000" data-aos="fade-up" className="flex flex-col justify-center items-center mt-16">
          <h3 className='text-4xl md:text-6xl'>Ice Coffee</h3>
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <img className=' -mb-12 md:-mb-24' src={img2} alt="" />
          </div>
          <div  data-aos-offset="500"
     data-aos-duration="2000" data-aos="fade-left" className="flex flex-col justify-center items-center">
            <img src={img3} alt="" />
            <h3 className='text-4xl md:text-6xl'>coffee Latte</h3>
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
            <MenuItem
              name={"black"}
              details={"loremfghddfhdfhfgd"}
              price={10}
              image={img}
            />
          </div>
          <ScrollRestoration />
        </div>
        </div>
      </Parallax>
      <ScrollRestoration />
    </>
  );
};

export default Menu;
