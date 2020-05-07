import React from "react";
import { useLocation } from 'react-router-dom';
import "../styles/allStyles.scss";
import { allAgents } from '../allData'

function Agent() {

    let currentAgent = useLocation().pathname.split('/').slice(-1)[0]
    //Gets the agent name (agent1) from the pathname (/Agents/agent1)

    if (currentAgent === 'Agents') {
        currentAgent = allAgents[0];
    }
    //Sets the deafult agent to agent1

    allAgents.forEach((agent) => {
        if (currentAgent === agent['name']) {
            currentAgent = agent
        }
    })
    //Sets the weapon according to the URL and the weapons list

    let allAbilities = []
    currentAgent.abilities.forEach((ability) => {
        allAbilities.push(
            <div key={ability.name} className='agentAbility'>
                <p className='agentAbilityName'>{ability.name}</p>
                <p className='agentAbilityDesc'>{ability.description}</p>
                <p className='agentAbilityCost'>{ability.cost}</p>
            </div>
        )
    })
    //Sets the abilities according to the currentAgent

    return (
        <div className="Agent">
            <div className='agentNameWithImage'>
                <p className='AgentName'>{currentAgent.name}</p>
                <img className='AgentImage' src={currentAgent.image} alt='agent'></img>
            </div>
            <div className='agentAbilities'>
                {allAbilities}
            </div>

        </div>
    );
}

export default Agent;
