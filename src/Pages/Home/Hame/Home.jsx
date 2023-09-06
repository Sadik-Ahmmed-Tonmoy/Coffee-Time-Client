import { ScrollRestoration } from "react-router-dom";
import Banner from "../Banner/Banner";
import BlackCoffee from "../BlackCoffee/BlackCoffee";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import HotCoffee from "../HotCoffee/HotCoffee";
import OurBranches from "../OurBranches/OurBranches";
import Voucher from "../Voucher/Voucher";
import WeAreOpen from "../WeAreOpen/WeAreOpen";
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
            <WeAreOpen/>
            <OurBranches/>
            <ScrollRestoration/>
        </div>
    );
};

export default Home;