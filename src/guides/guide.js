import React from "react";
import { useLocation } from 'react-router-dom';
import "../styles/allStyles.scss";
import { allGuides } from '../allData'


function Weapon() {

    let currentGuide = useLocation().pathname.split('/').slice(-1)[0]
    //Gets the guide name (guide) from the pathname (/Guides/guide1)

    if (currentGuide === 'Guides') {
        currentGuide = allGuides[0];
    }
    //Sets the deafult guide to weapon1

    allGuides.forEach((guide) => {
        if (currentGuide === guide['name']) {
            currentGuide = guide
        }
    })
    //Sets the guide according to the URL and the guide list

    let questionMark = ''
    if (currentGuide.question) {
        questionMark = '?'
    }

    return (
        <div className="Guide">
            <div className='guideNameWithImage'>
                <p className='guideName'>{currentGuide.name}{questionMark}</p>
                {/* {questionMark} */}
                <img className='guideImage' src={currentGuide.image} alt='guide' />
            </div>
            <div>
                <p className='guideContent'>{currentGuide.content}</p>
            </div>

        </div>
    );
}

export default Weapon;
