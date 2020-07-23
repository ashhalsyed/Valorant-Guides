import React, { } from "react";
import { Route } from 'react-router-dom';
import "../styles/allStyles.scss";
import Agent from '../agents/agent'
import GeneralSidebar from '../generalSidebar'

function Agents() {



    return (
        <div className='Agents'>
            <GeneralSidebar />
            {/* <Route path='/Agents' component={Agent} /> */}
            <Route path='/Agents' render={(props) => <Agent />} />
        </div>
    );
}

export default Agents;
