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
        strength={-150}
    >
      <div className='container mx-auto py-16 flex flex-col items-center justify-center'>
     
      <h3 className='text-center text-5xl md:text-8xl my-8'>Customer Reviews</h3>
            <div className='flex justify-evenly'>
<div className='mx-auto text-center '>
    <img className='mx-auto' src={img1} alt="" />
    <h3 className="text-4xl">John Peter</h3>
    <p className='w-4/6 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, consequuntur.</p>
</div>
<div className='mx-auto text-center '>
    <img className='mx-auto' src={img2} alt="" />
    <h3 className="text-4xl">Ella Thomas</h3>
    <p className='w-4/6 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, consequuntur.</p>
</div>


            </div>
      </div>
    </Parallax>
        </>
    );
};

export default CustomerReviews;