import { Parallax } from 'react-parallax';
import bg from '../../../assets/CustomerReviews/bg.png'
import img1 from '../../../assets/CustomerReviews/img1.png'
import img2 from '../../../assets/CustomerReviews/img2.png'

const CustomerReviews = () => {
    return (
        <>
            <Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-100}
    >
      <div className='container mx-auto h-screen  text-cente'>
     
      <h2 className='text-center text-6xl my-8'>Customer Reviews</h2>
            <div className='flex justify-evenly'>
<div className='mx-auto text-center '>
    <img className='mx-auto' src={img1} alt="" />
    <h3>John Peter</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, consequuntur.</p>
</div>
<div className='mx-auto text-center '>
    <img className='mx-auto' src={img2} alt="" />
    <h3>John Peter</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, consequuntur.</p>
</div>


            </div>
      </div>
    </Parallax>
        </>
    );
};

export default CustomerReviews;