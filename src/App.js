import React, { useState } from "react";
import { Route, Link, useLocation } from "react-router-dom";
import "./styles/allStyles.scss";
import valorantGuidesLogo from "./assets/valorantGuidesLogo.svg";
import Home from "./contentpages/home";
import Agents from "./contentpages/agents";
import Weapons from "./contentpages/weapons";
import Guides from "./contentpages/guides";
import SearchPopup from './searchPopup'

import agentsIcon from './assets/agentsIcon.svg'
import weaponsIcon from './assets/weaponsIcon.svg'
import guidesIcon from './assets/guidesIcon.svg'

function App() {

    const [searchOpen, toggleSearchPopup] = useState(false);

    function openSearchPopup() {
        toggleSearchPopup(true)
    }

    function closeSearchPopup() {
        toggleSearchPopup(false)
    }

    let agentsSelected;
    let weaponsSelected;
    let guidesSelected;

    const currentLocation = useLocation().pathname.split("/")[1];

    if (currentLocation === "Agents") {
        agentsSelected = { backgroundColor: "#29ABE2" };
    } else {
        agentsSelected = undefined;
    }

    if (currentLocation === "Weapons") {
        weaponsSelected = { backgroundColor: "#FF6633" };
    } else {
        weaponsSelected = undefined;
    }
    if (currentLocation === "Guides") {
        guidesSelected = { backgroundColor: "#33FF33" };
    } else {
        guidesSelected = undefined;
    }

    return (
        <div className="App">
            <SearchPopup searchOpen={searchOpen} closeSearchPopup={closeSearchPopup} />
            <nav>
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

            <Route exact path="/" component={Home} />
            <Route path="/Agents" component={Agents} />
            <Route path="/Weapons" component={Weapons} />
            <Route path="/Guides" component={Guides} />
            <footer>
                <p className='footerText'>
                    © 2020 Valorant Guides | Not affiliated with Riot Games
                </p>
            </footer>
        </div>
    );
}

export default App;
