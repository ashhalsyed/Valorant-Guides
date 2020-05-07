import React from "react";
import "../styles/allStyles.scss";
import HomepageImage from '../assets/homepageImage.png'


function Home() {
    return (
        <div className="Home">
            <img className='HomepageImage' src={HomepageImage} alt='homepage content' />
        </div>
    );
}

export default Home;
