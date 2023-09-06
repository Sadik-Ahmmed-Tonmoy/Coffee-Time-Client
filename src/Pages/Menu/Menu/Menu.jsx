
import { ScrollRestoration } from 'react-router-dom';
import img from '../../../assets/Menu/Group 1.png'
import bg from '../../../assets/Menu/Icon.png'
import MenuItem from '../MenuItem/MenuItem';
import { Parallax, Background } from 'react-parallax';

const Menu = () => {
    return (
        <>
          <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-200}
    >
           <div>
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
           </div>
           </Parallax>
           <ScrollRestoration/>
        </>
    );
};

export default Menu;