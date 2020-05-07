import React from "react";
import { Route } from 'react-router-dom';
import "../styles/allStyles.scss";
import GeneralSidebar from '../generalSidebar'
import Guide from '../guides/guide'


function Guides() {

    return (
        <div className="Guides">
            <GeneralSidebar />
            <Route path='/Guides' component={Guide} />
        </div>
    );
}

export default Guides;