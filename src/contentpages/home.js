import React from "react";
import "../styles/allStyles.scss";
import { homepageImages } from '../allData'
// import Slider from "react-slick";


function Home() {

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplaySpeed: 4000,
    //     arrows: false,
    //     autoplay: true,
    //     // adaptiveHeight: true,
    //     // centerMode: true,
    // };

    return (
        <div className="Home">
            <p className='HomeTitle'>Valorant Guides</p>
            <img className='HomepageImage' src={homepageImages[0]} alt='homepage 1' />

            {/* <Slider className='Slider' {...settings}>
                <div>
                    <img className='HomepageImage' src={homepageImages[0]} alt='homepage 1' />
                </div>
                <div>
                    <img className='HomepageImage' src={homepageImages[1]} alt='homepage 2' />
                </div>
                <div>
                    <img className='HomepageImage' src={homepageImages[2]} alt='homepage 3' />
                </div>
                <div>
                    <img className='HomepageImage' src={homepageImages[3]} alt='homepage 4' />
                </div>
                <div>
                    <img className='HomepageImage' src={homepageImages[4]} alt='homepage 5' />
                </div>
            </Slider> */}
        </div>
    );
}

export default Home;