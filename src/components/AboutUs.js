import React, { useEffect, useState } from "react";
import IpBanner from "./IpBanner";
import Footer from "./Footer";

const AboutUs = () => {
    let name="About Us";
    const [data, setData] = useState([]);

    useEffect(() => {
        getAboutData();
    }, []);
    const getAboutData = async () => {
        let result = await fetch('http://localhost:5000/about', {
            headers: {
                authorization: ` bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        setData(result);
    }
    return (
        <div className="about-us-wrapp">
            <IpBanner name={name} />
            <div className="container-fluid">
                <section className="gap-top position-relative">
                    <img src="img/about-big.jpg" alt="" />
                    <div className="big-image-cnt">
                        <img src="img/about-on-shift.png" alt="" className="shake-animation" />
                    </div>
                </section>
                {
                    data.map((item, index) => 
                    <section key={item._id} className="gap-top-lg">
                    <div className="text-center">
                        <div className="row">
                            <div className="col-md-9 mx-auto">
                                <div className="sub-title">{item.subTile}</div>
                                <h2 className="gap-bottom-sm wbb">{item.title}
                                </h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                </section>
                    )
                }
            </div>
            <section className="gap-top gap-bottom-lg">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-md-4">
                            <img src="img/abt-1.jpg" alt="" className="shake-animation-v" />
                        </div>
                        <div className="col-md-4">
                            <img src="img/abt-2.jpg" alt="" className="shift-bottom shake-animation-v" />
                        </div>
                        <div className="col-md-4">
                            <img src="img/abt-3.jpg" alt="" className="shake-animation-v" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="gap-top">
                    <Footer />
                </div>
        </div>
    )
}

export default AboutUs;