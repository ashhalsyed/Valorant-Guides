import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "./styles/allStyles.scss";
import { allAgents, allWeapons, allGuides } from './allData'

function GeneralSidebar() {

    const currentPageType = useLocation().pathname.split('/')[1]

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
            typeContent.push(
                <p key={type}>{type}</p>
            )
            allAgents.forEach((agent) => {
                if (agent.type === type) {
                    typeContent.push(
                        <Link key={agent.name} to={'/Agents/' + agent.name}>{agent.name}</Link >
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
            typeContent.push(
                <p key={type}>{type}</p>
            )
            allWeapons.forEach((weapon) => {
                if (weapon.type === type) {
                    typeContent.push(
                        <Link key={weapon.name} to={'/Weapons/' + weapon.name}>{weapon.name}</Link >
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
                <p key={type}>{type}</p>
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
        <div className='GeneralSidebar'>
            {typeContent}
        </div>
    );
}

export default GeneralSidebar;
