import Banner from "../Banner/Banner";
import BlackCoffee from "../BlackCoffee/BlackCoffee";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import HotCoffee from "../HotCoffee/HotCoffee";
import Voucher from "../Voucher/Voucher";
import WhiteCoffee from "../WhiteCoffee/WhiteCoffee";


const Home = () => {
    return (
        <div>
            <Banner/>
            <BlackCoffee/>
            <HotCoffee/>
            <WhiteCoffee/>
            <Voucher/>
            <CustomerReviews/>
        </div>
    );
};

export default Home;