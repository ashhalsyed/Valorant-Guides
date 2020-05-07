import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import "./styles/allStyles.scss";
import logo from "./assets/logo.png";
import Home from "./contentpages/home";
import Agents from "./contentpages/agents";
import Weapons from "./contentpages/weapons";
import Guides from "./contentpages/guides";

function App() {
    // const allAgents = [
    //   {
    //       name: "timmy",
    //       image: timmy,
    //   },
    //   {
    //       name: "bud",
    //       image: bud,
    //   },
    // ];

    // const [agent, changeAgent] = React.useState(allAgents[0]);

    // const agentsComponent = <Agents allAgents={allAgents} agent={agent} changeAgent={changeAgent()} />
    let agentsUnderlined;
    let weaponsUnderlined;
    let guidesUnderlined;

    const currentLocation = useLocation().pathname.split("/")[1];

    if (currentLocation === "Agents") {
        agentsUnderlined = { borderBottom: "3px solid purple" };
    } else {
        agentsUnderlined = undefined;
    }

    if (currentLocation === "Weapons") {
        weaponsUnderlined = { borderBottom: "3px solid purple" };
    } else {
        weaponsUnderlined = undefined;
    }
    if (currentLocation === "Guides") {
        guidesUnderlined = { borderBottom: "3px solid purple" };
    } else {
        guidesUnderlined = undefined;
    }

    // var searchbarOverlay = <div className='searchbarPopup' style={{ visibility: 'hidden' }}></div>

    // function openSearchPopup() {
    //     console.log('open')
    //     searchbarOverlay = <div onClick={closeSearchPopup} className='searchbarPopup' style={{ visibility: 'hidden' }}></div>
    // }

    // function closeSearchPopup() {
    //     console.log('closed')
    //     searchbarOverlay = <div className='searchbarPopup' style={{ visibility: 'hidden' }}></div>
    // }

    return (
        <div className="App">
            <p>BAKA</p>
            {/* {searchbarOverlay} */}
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} alt="valorant guides logo" />
                </Link>
                <Link to="/Agents" className="navLink" style={agentsUnderlined}>&nbsp;Agents</Link>
                <Link to="/Weapons" className="navLink" style={weaponsUnderlined}>&nbsp;Weapons</Link>
                <Link to="/Guides" className="navLink" style={guidesUnderlined}>&nbsp;Guides</Link>
                <i onClick={() => { alert('dont click me') }} className="fas fa-search"></i>
                {/* <i onClick={openSearchPopup} className="fas fa-search"></i> */}
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/Agents" component={Agents} />
            <Route path="/Weapons" component={Weapons} />
            <Route path="/Guides" component={Guides} />
            <footer>
                <p>
                    © 2020 Valorant Guides <br /> Not affiliated with Riot Games
                </p>
            </footer>
        </div>
    );
}

export default App;
