import { Parallax } from 'react-parallax';
import bg from '../../../assets/OurBranches/bg.png'
import img1 from '../../../assets/OurBranches/img1.png'
import img2 from '../../../assets/OurBranches/img2.png'
import img3 from '../../../assets/OurBranches/img3.png'

const OurBranches = () => {
    return (
        <>
          <Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-300}
    >
      <div className='container mx-auto my-16 p-2'>
    <div>
        <h3 className='text-5xl md:text-8xl text-center my-8'>Our Branches</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 text-center'>
            <div>
                <img className='mx-auto rounded-2xl' src={img1} alt="" />
                <p className='text-2xl font-semibold'>Dhaka</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img className='mx-auto rounded-2xl' src={img2} alt="" />
                <p className='text-2xl font-semibold'>Paris</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <img className='mx-auto rounded-2xl' src={img3} alt="" />
                <p className='text-2xl font-semibold'>Jakarta</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </div>
    </div>
      </div>
    </Parallax>
        </>
    );
};

export default OurBranches;