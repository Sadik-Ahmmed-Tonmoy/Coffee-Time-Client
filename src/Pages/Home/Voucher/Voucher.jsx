import { Parallax } from 'react-parallax';
import bg from '../../../assets/Voucher/bg.png'
import img from '../../../assets/Voucher/VoucherImage.png'

const Voucher = () => {
    return (
        <>
        <Parallax
        // blur={{ min: -15, max: 15 }}
        bgImage={bg}
        bgImageAlt="the dog"
        strength={-100}
    >
      <div className='container mx-auto'>
      <div className='flex flex-col items-center'>
<h3 className='text-6xl my-10'>Voucher</h3>
<img className='w-8/12' src={img} alt="" />

      </div>
      </div>
    </Parallax>
            
        </>
    );
};

export default Voucher;