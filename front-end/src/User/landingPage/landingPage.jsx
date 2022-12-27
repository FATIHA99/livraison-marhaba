import React from 'react'
import './landingPage.css'
import Header from "./header/Header";
import Footer from './footer/Footer';
import Up from './up/Up';
import About from './about/About';
import Contact from './contact/Contact';
import Review from './review/Review';
import Body from './body/Body';




function LandingPage() {
    return (
        <>
            <Header/>
            <Up/>
            <Body/>
            <Review/>
            <Contact/>
            <About/>
            <Footer/>
        </>
    )
}
export default LandingPage;