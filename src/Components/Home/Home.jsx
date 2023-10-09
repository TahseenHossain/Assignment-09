import { useContext } from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Themes from "../Themes/Themes";
import Venues from "../Venues/Venues";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Themes></Themes>
            <Venues></Venues>
        </div>
    );
};

export default Home;