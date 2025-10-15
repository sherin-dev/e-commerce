import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowcase from "./CategoryShowcase";
import LocationSprade from "./LocationSprade";
// import Register from "./Register";
import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Sponsor from "./Sponsor";
const Home=()=>{
    return(
        <>
        <Banner/>
        <HomeCategory/>
        <CategoryShowcase/>
        {/* <Register/>  */}
        <LocationSprade/>   
        <AboutUs/>  
        <AppSection/>
        <Sponsor/>  
        </>
    )
}
export default Home