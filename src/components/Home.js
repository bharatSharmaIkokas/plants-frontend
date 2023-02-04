import React from "react";
import OwlCarousel from 'react-owl-carousel2';
import { Link } from "react-router-dom";
import Category from "./Category";
import CategoryBig from "./CategoryBig";
import Footer from "./Footer";
import MidBanner from "./MidBanner";
import ProductSlider from "./ProductSlider";
import ServicesBanner from "./ServicesBanner";

const Home = () => {
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true,
        dots: false,
        smartSpeed: 1500
    };
    let productSliderName1 = "Most";
    let  productSliderNameSubname1 = "Popular";

    let productSliderName2 = "Best";
    let  productSliderNameSubname2 = "Seller";
    return (
        <div className="home-wrapper">
            <div className="container-fluid">
                <div className="full-width-carousel">
                    <OwlCarousel options={options}>
                        <div className="owl-slide">
                            <img src="img/c-img-1.jpg" alt="Logo" />
                            <div className="carousel-caption">
                                <div className="sub-title">SALE UP TO 30% OFF</div>
                                <h2 className="slider-title gap-bottom-sm">Gift Green This <span>Holiday</span></h2>
                                <Link to='/' className="btn-v">Explore</Link>
                            </div>
                        </div>
                        <div className="owl-slide">
                            <img src="img/c-img-1.jpg" alt="Logo" />
                            <div className="carousel-caption">
                                <div className="sub-title">SALE UP TO 30% OFF</div>
                                <h2 className="slider-title gap-bottom-sm">Gift Green This <span>Holiday</span></h2>
                                <Link to='/' className="btn-v">Explore</Link>
                            </div>
                        </div>
                        <div className="owl-slide">
                            <img src="img/c-img-1.jpg" alt="Logo" />
                            <div className="carousel-caption">
                                <div className="sub-title">SALE UP TO 30% OFF</div>
                                <h2 className="slider-title gap-bottom-sm">Gift Green This <span>Holiday</span></h2>
                                <Link to='/' className="btn-v">Explore</Link>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <Category />
                <ProductSlider name={productSliderName1} subname={productSliderNameSubname1}/>
                <div className="gap-top">
                    <MidBanner />
                </div>
                <div className="gap-top">
                    <CategoryBig />
                </div>
                <div className="gap-top">
                    <ServicesBanner />
                </div>
                <div className="gap-top">
                    <ProductSlider name={productSliderName2} subname={productSliderNameSubname2} />
                </div>
                <div className="gap-top">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;