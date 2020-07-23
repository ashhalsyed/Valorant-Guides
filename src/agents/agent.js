import React, { } from "react";
import { useLocation, Link } from 'react-router-dom';
import "../styles/allStyles.scss";
import { allAgents } from '../allData'
import AgentAbility from './agentAbility'
import charges1 from '../assets/charges1.svg'
import charges2 from '../assets/charges2.svg'
import charges3 from '../assets/charges3.svg'

import Ripples from 'react-ripples'

function Agent(props) {

    var currentURL = useLocation().pathname.split("/")
    var currentAgent = currentURL[2]
    var currentAbility = currentURL[3]


    if (currentAgent === undefined || currentAgent === '') {
        currentAgent = allAgents[0];
        //Sets the deafult agent to agent1
    } else {
        allAgents.forEach((agent) => {
            if (currentAgent === agent['name']) {
                currentAgent = agent
            }
        })
    }

    var allAbilities = []
    currentAgent.abilities.forEach((ability) => {
        var chargesContent
        if (ability.charges === 1) {
            chargesContent = charges1
        } else if (ability.charges === 2) {
            chargesContent = charges2
        } else {
            chargesContent = charges3
        }

        var selectedAbility = false;
        if (currentAbility === undefined && currentAgent.abilities[0].name === ability.name) {
            selectedAbility = true
        }
        else if (currentAbility === ability.name) {
            selectedAbility = true
        }

        // selectedAbility = selectedAbility ? { outline: '3px solid rgb(255,0,0)', zIndex: '2' } : { outline: '2px solid rgb(0,0,0)' }
        // selectedAbility = selectedAbility ? {} : {}

        const selectedAbilityStyle = {
            // background: ' #ff416c', /* fallback for old browsers */
            background: 'radial-gradient(#cb356b, #bd3f32)'
        }
        const notSelectedAbilityStyle = { background: 'rgba(255,255,255,0.5)' }

        const selectedAbilityCompletedStyle = selectedAbility ? selectedAbilityStyle : notSelectedAbilityStyle

        allAbilities.push(
            <div className='agentAbilityIcons' key={ability.name}>
                <p className='agentAbilityNamePreview'>{ability.name}</p>
                <Ripples color="rgba(255,255,255,0.3)" during={800}>
                    <Link to={'/Agents/' + currentAgent.name + "/" + ability.name} className='agentAbilityLink'>
                        <img style={selectedAbilityCompletedStyle} className='agentAbilityImage' src={ability.image} alt={ability.image} />
                    </Link>
                </Ripples>
                <img className='abilityContentCharges' src={chargesContent} alt='charges icon' />
            </div>

        )
    })
    //Sets the abilities according to the currentAgent



    if (currentAbility === undefined) {
        currentAbility = allAbilities[0].key
    } else {
        currentAgent.abilities.forEach((ability) => {
            if (currentAbility === ability.key) {
                currentAbility = ability
            }
        })
    }

    return (

        <div className="Agent">
            {/* <Element name="AgentScrollElement"> */}
            <div className='agentNameWithImage'>
                <p className='AgentName'>{currentAgent.name}</p>
                <img className='AgentImage' src={currentAgent.image} alt='agent'></img>
            </div>
            <div className='allAgentAbilityContent'>
                <p className='AbilitiesTitle'>Abilities</p>
                <div className='agentAbilities'>
                    {allAbilities}
                    {/* <Route path={"/Agents/" + currentAgent.name + "/" + currentAbility} component={AgentAbility} /> */}
                </div>
                {/* <Route path="/Agents" component={AgentAbility} /> */}
                <AgentAbility />
            </div>
            {/* </Element> */}
        </div>
    );
}

export default Agent;
