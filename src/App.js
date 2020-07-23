import React from "react";
import { Route } from "react-router-dom";
import './styles/allStyles.scss';
import Home from "./contentpages/home";
import Agents from "./contentpages/agents";
import Weapons from "./contentpages/weapons";
import Guides from "./contentpages/guides";
import Navbar from './navbar'

function App() {

    return (
        <div className="App">
            <Navbar />

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
