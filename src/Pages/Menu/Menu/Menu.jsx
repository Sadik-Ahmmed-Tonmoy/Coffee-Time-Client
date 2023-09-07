import { ScrollRestoration } from "react-router-dom";
import top from "../../../assets/Menu/top.png";
import img1 from "../../../assets/Menu/Image.png";
import img2 from "../../../assets/Menu/Images.png";
import img3 from "../../../assets/Menu/2.png";
import bg from "../../../assets/Menu/Icon.png";
import MenuItem from "../MenuItem/MenuItem";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import useProducts from "../../../hooks/useProducts";
AOS.init();

const Menu = () => {
  const [products] = useProducts()
  console.log(products);
  const hotCoffeeProducts = products.filter((item) => item.Type === "Hot Coffee");
  const icedCoffeeProducts = products.filter((item) => item.Type === "Iced Coffee");
  const latteCoffeeProducts = products.filter((item) => item.Type === "Coffee Latte");
  console.log(hotCoffeeProducts)
  return (
    <>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="Coffee"
        strength={-400}
      >
        <div>
          <div className="z-10 -mb-20 md:-mb-48 sticky md:fixed">
          <img src={top} alt="" />
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div  data-aos-offset="500"
     data-aos-duration="2000" data-aos="fade-right" className="flex flex-col justify-center items-center">
            <img className='' src={img1} alt="" />
            <h3 className='text-4xl md:text-6xl mt-10'>Hot Coffee</h3>
           
    {
      hotCoffeeProducts.map((item) => <MenuItem item={item} key={item._id}/>)
    }
         
           
          </div>
          <div  
     data-aos-duration="2000" data-aos="fade-up" className="flex flex-col justify-center items-center mt-16">
          <h3 className='text-4xl md:text-6xl'>Ice Coffee</h3>
          {
      icedCoffeeProducts.map((item) => <MenuItem item={item} key={item._id}/>)
    }
            <img className=' -mb-12 md:-mb-24' src={img2} alt="" />
          </div>
          <div 
     data-aos-duration="2000" data-aos="fade-left" className="flex flex-col justify-center items-center md:-mt-20">
            <img src={img3} alt="" />
            <h3 className='text-4xl md:text-6xl'>coffee Latte</h3>
            {
      latteCoffeeProducts.map((item) => <MenuItem item={item} key={item._id}/>)
    }
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
