import React from "react";
import { Route } from 'react-router-dom';
import "../styles/allStyles.scss";
import GeneralSidebar from '../generalSidebar'
import Weapon from '../weapons/weapon'


function Weapons() {

    return (
        <div className="Weapons">
            <GeneralSidebar />
            <Route path='/Weapons' component={Weapon} />
        </div>
    );
}

export default Weapons;
