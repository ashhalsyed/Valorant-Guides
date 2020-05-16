import React from "react";
import { useLocation } from 'react-router-dom';
import "../styles/allStyles.scss";
import { allAgents } from '../allData'
import creditsIcon from '../assets/creditsIcon.svg'

function AgentAbility() {

    var currentAgent = useLocation().pathname.split('/')[2]

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

    var currentAbility = useLocation().pathname.split('/')[3]
    // console.log('before', currentAbility)

    if (currentAbility === undefined) {
        currentAbility = currentAgent.abilities[0]
    } else {
        currentAgent.abilities.forEach((ability) => {
            if (currentAbility === ability.name) {
                currentAbility = ability
            }
        })
    }


    return (
        <div className='agentAbilityContent'>
            <p className='abilityContentName'>{currentAbility.name}</p>
            <p className='abilityContentDescription'>{currentAbility.description}</p>
            <div className='abilityContentCost'>
                <img className='creditsIcon' src={creditsIcon} alt='credits icon' />
                <p className='abilityContentCostText'>{currentAbility.cost}</p>
            </div>
        </div>
    );
}

export default AgentAbility;
