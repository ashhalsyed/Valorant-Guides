import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/allStyles.scss";
import valorantGuidesLogo from "./assets/valorantGuidesLogo.svg";
import SearchPopup from './searchPopup'

import agentsIcon from './assets/agentsIcon.svg'
import weaponsIcon from './assets/weaponsIcon.svg'
import guidesIcon from './assets/guidesIcon.svg'

function Navbar() {

    const [searchOpen, updateSearchPopup] = useState(false);

    function openSearchPopup() {
        updateSearchPopup(true)
    }

    function closeSearchPopup() {
        updateSearchPopup(false)
    }

    let agentsSelected;
    let weaponsSelected;
    let guidesSelected;

    const currentLocation = useLocation().pathname.split("/")[1];

    if (currentLocation === "Agents") {
        agentsSelected = { backgroundColor: "#29ABE2" };
    } else {
        agentsSelected = { backgroundColor: 'rgb(255,255,255)' };
    }

    if (currentLocation === "Weapons") {
        weaponsSelected = { backgroundColor: "#FF6633" };
    } else {
        weaponsSelected = { backgroundColor: 'rgb(255,255,255)' };
    }
    if (currentLocation === "Guides") {
        guidesSelected = { backgroundColor: "#33FF33" };
    } else {
        guidesSelected = { backgroundColor: 'rgb(255,255,255)' };
    }

    return (
        <div className="Navbar">
            <SearchPopup searchOpen={searchOpen} closeSearchPopup={closeSearchPopup} />
            <nav className="NavbarContent">
                <Link to="/" className="navLink logo">
                    <img className='valorantGuidesLogo' src={valorantGuidesLogo} alt="valorant guides logo" />
                </Link>
                <Link to="/Agents" className="navLink agents" style={agentsSelected}>
                    <img className='agentsIcon' src={agentsIcon} alt='agentsIcon' />
                    <p className='navbarText'>Agents</p>
                </Link>
                <Link to="/Weapons" className="navLink weapons" style={weaponsSelected}>
                    <img className='weaponsIcon' src={weaponsIcon} alt='weaponsIcon' />
                    <p className='navbarText'>Weapons</p>
                </Link>
                <Link to="/Guides" className="navLink guides" style={guidesSelected}>
                    <img className='guidesIcon' src={guidesIcon} alt='guidesIcon' />
                    <p className='navbarText'>Guides</p>
                </Link>
                <i onClick={openSearchPopup} className="fas fa-search"></i>
            </nav>
        </div>
    );
}

export default Navbar;
