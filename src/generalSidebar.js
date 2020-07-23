import React, { } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./styles/allStyles.scss";
import { allAgents, allWeapons, allGuides } from './allData'

import Ripples from 'react-ripples'
// import { Element, scroller, scrollTo } from 'react-scroll';
// import * as Scroll from 'react-scroll';

function GeneralSidebar(props) {

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
                if (currentAgent === undefined && agent.name === allAgents[0].name) {
                    selectedAgent = true
                }
                else if (currentAgent === agent.name) {
                    selectedAgent = true
                }

                const selectedAgentStyle = {
                    // background: ' #ff416c', /* fallback for old browsers */
                    background: 'radial-gradient(#cb356b, #bd3f32)'
                }
                const notSelectedAgentStyle = { background: 'rgba(255,255,255,0.5)' }

                const selectedAgentCompletedStyle = selectedAgent ? selectedAgentStyle : notSelectedAgentStyle

                if (agent.type === type) {
                    typeContent.push(
                        <Link className='agentLinkSidebar' key={agent.name} to={'/Agents/' + agent.name}>
                            <Ripples color="rgba(255,255,255,0.3)" during={800}>
                                <img className='agentImageSidebar' style={selectedAgentCompletedStyle} src={agent.imageSmall} alt='agent preview in sidebar' />
                            </Ripples>
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
                if (currentWeapon === undefined && weapon.name === allWeapons[0].name) {
                    selectedWeapon = true
                }
                else if (currentWeapon === weapon.name) {
                    selectedWeapon = true
                }

                const selectedWeaponStyle = {
                    // background: ' #ff416c', /* fallback for old browsers */
                    background: 'radial-gradient(#cb356b, #bd3f32)'
                }
                const notSelectedWeaponStyle = { background: 'rgba(255,255,255,0.5)' }

                const selectedWeaponCompletedStyle = selectedWeapon ? selectedWeaponStyle : notSelectedWeaponStyle

                if (weapon.type === type) {
                    typeContent.push(
                        <Link className='weaponLinkSidebar' key={weapon.name} to={'/Weapons/' + weapon.name}>
                            <Ripples color="rgba(255,255,255,0.3)" during={800}>
                                <img className='weaponImageSidebar' style={selectedWeaponCompletedStyle} src={weapon.image} alt='weapon preview in sidebar' />
                            </Ripples>
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


                var currentGuide = currentURL[2]

                var selectedGuide = false;
                if (currentGuide === undefined && guide.name === allGuides[0].name) {
                    selectedGuide = true
                }
                else if (currentGuide === guide.name) {
                    selectedGuide = true
                }

                const selectedGuideStyle = {
                    // background: ' #ff416c', /* fallback for old browsers */
                    background: 'radial-gradient(#cb356b, #bd3f32)',
                    color: 'white'
                    // color: 'red'
                }
                const notSelectedGuideStyle = { background: 'rgba(255,255,255,0.5)' }

                const selectedGuideCompletedStyle = selectedGuide ? selectedGuideStyle : notSelectedGuideStyle

                if (guide.type === type) {
                    typeContent.push(
                        <Ripples color="rgba(255,255,255,0.3)" during={800}>
                            <Link key={guide.name} style={selectedGuideCompletedStyle} to={'/Guides/' + guide.name} className='GuideLinkContent'>

                                {guide.name}{questionMark}
                            </Link >
                        </Ripples>
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
            {/* <mySpecialElement name="mySpecialElement"><p>baba</p></mySpecialElement> */}

        </div>
    );
}

export default GeneralSidebar;
