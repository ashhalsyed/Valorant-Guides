import React from "react";
import { useLocation } from 'react-router-dom';
import "../styles/allStyles.scss";
import { allWeapons } from '../allData'
import creditsIcon from '../assets/creditsIcon.svg'
import bodyIcon from '../assets/bodyIcon.svg'
import headIcon from '../assets/headIcon.svg'
import legsIcon from '../assets/legsIcon.svg'
import knifeDirection from '../assets/knifeDirection.svg'


function Weapon() {

    let currentWeapon = useLocation().pathname.split('/').slice(-1)[0]
    //Gets the weapon name (weapon1) from the pathname (/Weapons/weapon1)npm

    if (currentWeapon === 'Weapons') {
        currentWeapon = allWeapons[0];
    }
    //Sets the deafult weapon to weapon1

    allWeapons.forEach((weapon) => {
        if (currentWeapon === weapon['name']) {
            currentWeapon = weapon
        }
    })
    //Sets the weapon according to the URL and the weapons list

    var currentWeaponStats
    if (currentWeapon.type === 'Armor') {
        currentWeaponStats =
            <div className='weaponStats'>
                <div className='weaponStat'>
                    <p className='weaponStatTitle'>Armour:</p>
                    <p className='weaponStatContent'>{currentWeapon.primaryFire}</p>

                </div>
                <div className='weaponStat cost'>
                    <p className='weaponStatCost'>Cost:</p>
                    <img className='creditsIcon' src={creditsIcon} alt='credits icon' />
                    <p className='weaponStatCostContent'>{currentWeapon.cost}</p>
                </div>
            </div>
    } else if (currentWeapon.type === 'Melee') {
        let weaponDamage = []
        for (var position in currentWeapon.damage) {
            if (position === 'Light') {
                weaponDamage.push(
                    <div key={position} className='positionContentHolder'>
                        <p className='positionTitle'>Light Attack(s):</p>
                        <div className='positionContentValue'>
                            <img className='knifeFrontIcon' src={knifeDirection} alt='knife front icon' />
                            <img className='knifeBackIcon' src={knifeDirection} alt='knife back icon' />
                            <p className='positionContent'>{currentWeapon.damage[position][0]}</p>
                        </div>
                        <div className='positionContentValue'>
                            <img className='knifeFrontIcon' src={knifeDirection} alt='knife front icon' />
                            <img className='knifeFrontIcon' src={knifeDirection} alt='knife front icon' />
                            <p className='positionContent'>{currentWeapon.damage[position][1]}</p>
                        </div>
                    </div>
                )
            } else {
                weaponDamage.push(
                    <div key={position} className='positionContentHolder'>
                        <p className='positionTitle'>Heavy Attack(s):</p>
                        <div className='positionContentValue'>
                            <img className='knifeFrontIcon' src={knifeDirection} alt='knife front icon' />
                            <img className='knifeBackIcon' src={knifeDirection} alt='knife back icon' />
                            <p className='positionContent'>{currentWeapon.damage[position][0]}</p>
                        </div>
                        <div className='positionContentValue'>
                            <img className='knifeFrontIcon' src={knifeDirection} alt='knife front icon' />
                            <img className='knifeFrontIcon' src={knifeDirection} alt='knife front icon' />
                            <p className='positionContent'>{currentWeapon.damage[position][1]}</p>
                        </div>
                    </div>
                )
            }
        }

        currentWeaponStats =
            <div className='weaponStats'>
                <div className='weaponStatDamage'>
                    <p className='weaponStatDamageTitle'>Damage:</p>
                    <div className='weaponStatDamageContent knife'>
                        {weaponDamage}
                    </div>
                </div>
                <div className='weaponStat cost'>
                    <p className='weaponStatCost'>Cost:</p>
                    <img className='creditsIcon' src={creditsIcon} alt='credits icon' />
                    <p className='weaponStatCostContent'>{currentWeapon.cost}</p>
                </div>
            </div>
    } else {
        let weaponDamage = []
        for (var range in currentWeapon.damage) {
            weaponDamage.push(
                <div key={currentWeapon.name + range} className='rangeContentHolder'>
                    <p className='rangeTitle'>{range}m:</p>
                    <div className='rangeContent'>
                        <div className='rangeContentPart'>
                            <img className='headDamageIcon' src={headIcon} alt='body icon' />
                            <p className='rangeContentText'>{currentWeapon.damage[range][1]}</p>
                        </div>
                        <div className='rangeContentPart'>
                            <img className='bodyDamageIcon' src={bodyIcon} alt='body icon' />
                            <p className='rangeContentText'>{currentWeapon.damage[range][0]}</p>
                        </div>
                        <div className='rangeContentPart'>
                            <img className='legsDamageIcon' src={legsIcon} alt='body icon' />
                            <p className='rangeContentText'>{currentWeapon.damage[range][2]}</p>
                        </div>
                    </div>
                </div>
            )
        }

        var altFireStats = [<div key='blankDiv'></div>]
        if (currentWeapon.altFire !== '') {
            altFireStats = [
                <div key='altFire' className='weaponStat'>
                    <p className='weaponStatTitle'>Alternate Fire:</p>
                    <p className='weaponStatContent'>{currentWeapon.altFire}</p>
                </div>,
                <div key='altFireRate' className='weaponStat'>
                    <p className='weaponStatTitle'>Alternate Fire Rate:</p>
                    <p className='weaponStatContent'>{currentWeapon.altFireRate}</p>
                </div>
            ]
        }

        var wallPenetrationColor;
        if (currentWeapon.wallPenetration === 'Low') {
            wallPenetrationColor = { color: 'rgb(255,0,0)', fontWeight: 'bold' }
        }
        else if (currentWeapon.wallPenetration === 'Medium') {
            wallPenetrationColor = { color: 'rgb(255,255,0)', fontWeight: 'bold' }
        }
        else if (currentWeapon.wallPenetration === 'High') {
            wallPenetrationColor = { color: 'rgb(0,255,0)', fontWeight: 'bold' }
        }

        currentWeaponStats =
            <div className='weaponStats'>
                <div className='weaponStat'>
                    <p className='weaponStatTitle'>Primary Fire:</p>
                    <p className='weaponStatContent'>{currentWeapon.primaryFire}</p>
                </div>
                <div className='weaponStat'>
                    <p className='weaponStatTitle'>Primary Fire Rate:</p>
                    <p className='weaponStatContent'>{currentWeapon.primaryFireRate}</p>
                </div>
                {altFireStats}
                <div className='weaponStatDamage'>
                    <p className='weaponStatDamageTitle'>Damage:</p>
                    <div className='weaponStatDamageContent'>
                        {weaponDamage}
                    </div>
                </div>
                <div className='weaponStat'>
                    <p className='weaponStatTitle'>Clip Size:</p>
                    <p className='weaponStatContent'>{currentWeapon.clipSize}</p>
                </div>
                <div className='weaponStat penetration'>
                    <p className='weaponStatTitle'>Penetration:</p>
                    <p className='weaponStatContent' style={wallPenetrationColor}>{currentWeapon.wallPenetration}</p>
                </div>
                <div className='weaponStat cost'>
                    <p className='weaponStatCost'>Cost:</p>
                    <img className='creditsIcon' src={creditsIcon} alt='credits icon' />
                    <p className='weaponStatCostContent'>{currentWeapon.cost}</p>
                </div>
                <div className='weaponStat'>
                    <p className='weaponStatTitle'>Csgo Equivalent:</p>
                    <p className='weaponStatContent'>{currentWeapon.CsgoEquivalent}</p>
                </div>
            </div>
    }


    return (
        <div className="Weapon">
            <div className='weaponNameWithImage'>
                <p className='weaponName'>{currentWeapon.name}</p>
                <img className='weaponImage' src={currentWeapon.image} alt='weapon' />
            </div>
            {currentWeaponStats}
        </div>
    );
}

export default Weapon;
