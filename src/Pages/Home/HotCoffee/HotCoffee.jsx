import { Parallax } from 'react-parallax';
import bg from '../../../assets/HotCoffee/bg.png'
import img from '../../../assets/HotCoffee/img.png'

const HotCoffee = () => {
    return (
        <>
<Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-300}
    >
      <div className='container mx-auto'>
      <div className='flex justify-around items-center w-full container mx-auto p-10'>
        <div>
            <img src={img} alt="" />
            <p className='mt-10 w-5/12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque illo sit fugiat optio ad placeat distinctio, sunt mollitia nulla voluptatum.</p>
        </div>
        <div>
            <h3 className='text-6xl'>Hot <br /> Coffee</h3>
            <button className='btn mt-5 btn-primary'>Order Now</button>
        </div>

       </div>
      </div>
    </Parallax>
            
        </>
    );
};

export default HotCoffee;