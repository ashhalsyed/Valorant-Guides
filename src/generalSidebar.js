import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./styles/allStyles.scss";
import { allAgents, allWeapons, allGuides } from './allData'

function GeneralSidebar() {

    const currentURL = useLocation().pathname.split('/')
    const currentPageType = currentURL[1]

    var allTypes
    var typeContent
    if (currentPageType === 'Agents') {
        allTypes = []
        allAgents.forEach((agent) => {
            if (allTypes.indexOf(agent.type) === -1) {
                allTypes.push(agent.type)
            }
        })

        typeContent = []
        allTypes.forEach((type) => {
            // typeContent.push(
            //     <p key={type}>{type}</p>
            // )
            //Adds titles in Sidebar
            allAgents.forEach((agent) => {
                var currentAgent = currentURL[2]

                var selectedAgent = false;
                if (currentAgent === undefined && agent.name === 'Brimstone') {
                    selectedAgent = true
                }
                else if (currentAgent === agent.name) {
                    selectedAgent = true
                }

                selectedAgent = selectedAgent ? { outline: '5px solid rgb(255,0,0)', zIndex: '2' } : { outline: '2px solid rgb(0,0,0)' }

                if (agent.type === type) {
                    typeContent.push(
                        <Link style={selectedAgent} key={agent.name} to={'/Agents/' + agent.name}>
                            <img className='agentImageSidebar' src={agent.imageSmall} alt='agent preview in sidebar' />
                        </Link >
                    )
                }
            })
        })
    } else if (currentPageType === 'Weapons') {
        allTypes = []
        allWeapons.forEach((weapon) => {

            if (allTypes.indexOf(weapon.type) === -1) {
                allTypes.push(weapon.type)
            }
        })

        typeContent = []
        allTypes.forEach((type) => {
            // typeContent.push(
            //     <p className='generalSidebarWeaponText' key={type}>{type}</p>
            // )
            allWeapons.forEach((weapon) => {
                var currentWeapon = currentURL[2]

                var selectedWeapon = false;
                if (currentWeapon === undefined && weapon.name === 'Classic') {
                    selectedWeapon = true
                }
                else if (currentWeapon === weapon.name) {
                    selectedWeapon = true
                }

                selectedWeapon = selectedWeapon ? { outline: '5px solid rgb(255,0,0)', zIndex: '2' } : { outline: '2px solid rgb(0,0,0)' }
                if (weapon.type === type) {
                    typeContent.push(
                        <Link style={selectedWeapon} key={weapon.name} to={'/Weapons/' + weapon.name}>
                            <img className='weaponImageSidebar' src={weapon.image} alt='weapon preview in sidebar' />
                        </Link >
                    )
                }
            })
        })

        // sidebarContent = []
        // allWeapons.forEach((weapon) => {
        //     sidebarContent.push(
        //         <Link key={weapon.name} to={'/Weapons/' + weapon.name}>{weapon.name}</Link >
        //     )
        // })
    } else if (currentPageType === 'Guides') {
        allTypes = []
        allGuides.forEach((guide) => {
            if (allTypes.indexOf(guide.type) === -1) {
                allTypes.push(guide.type)
            }
        })

        typeContent = []
        allTypes.forEach((type) => {
            typeContent.push(
                <p className='GuideLink' key={type}>{type}</p>
            )
            allGuides.forEach((guide) => {
                let questionMark = ''
                if (guide.question) {
                    questionMark = '?'
                }

                //Adds a question mark only visually if this link is a question

                if (guide.type === type) {
                    typeContent.push(
                        <Link key={guide.name} to={'/Guides/' + guide.name}>{guide.name}{questionMark}</Link >
                    )
                }
            })
        })

        // sidebarContent = []
        // allGuides.forEach((guide) => {
        //     sidebarContent.push(
        //         <Link key={guide.name} to={'/Guides/' + guide.name}>{guide.name}</Link >
        //     )
        // })
    }
    //Generates the sidebar according to the current URL




    return (
        <div className={'GeneralSidebar ' + currentPageType}>
            {typeContent}
        </div>
    );
}

export default GeneralSidebar;
