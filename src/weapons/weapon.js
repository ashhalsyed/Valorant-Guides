import React from "react";
import { useLocation } from 'react-router-dom';
import "../styles/allStyles.scss";
import { allWeapons } from '../allData'


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
                <p className='weaponStat'>Armor: {currentWeapon.primaryFire}</p>
                <p className='weaponStat'>Cost: {currentWeapon.cost}</p>
            </div>
    } else if (currentWeapon.type === 'Melee') {
        let weaponDamage = []
        for (var position in currentWeapon.damage) {
            weaponDamage.push(
                <div key={position} className='positionContentHolder'>
                    <p className='positionTitle'>{position}: &nbsp;</p>
                    <p className='positionContent'>{currentWeapon.damage[position]}</p>
                </div>
            )
        }

        currentWeaponStats =
            <div className='weaponStats'>
                <div className='weaponStatDamge'>
                    <p >Damage:</p>
                    <div className='weaponStatDamgeContent'>
                        {weaponDamage}
                    </div>
                </div>
                <p className='weaponStat'>Cost: {currentWeapon.cost}</p>
            </div>
    } else {
        // <p className='weaponStat'>Damage: {JSON.stringify(currentWeapon.damage)}</p>
        let weaponDamage = []
        for (var range in currentWeapon.damage) {
            weaponDamage.push(
                <div key={currentWeapon.name + range} className='rangeContentHolder'>
                    <p className='rangeTitle'>{range}:</p>
                    <p className='rangeContent'>Body: {currentWeapon.damage[range][0]} Head: {currentWeapon.damage[range][1]} Leg: {currentWeapon.damage[range][2]}</p>
                </div>
            )
        }

        if (currentWeapon.altFire === '') {
            currentWeaponStats =
                <div className='weaponStats'>
                    <p className='weaponStat'>Primary Fire: {currentWeapon.primaryFire}</p>
                    <p className='weaponStat'>Primary Fire Rate: {currentWeapon.primaryFireRate} rounds/sec</p>
                    <div className='weaponStatDamge'>
                        <p >Damage:</p>
                        <div className='weaponStatDamgeContent'>
                            {weaponDamage}
                        </div>
                    </div>
                    <p className='weaponStat'>Clip Size: {currentWeapon.clipSize}</p>
                    <p className='weaponStat'>Penetration: {currentWeapon.wallPenetration}</p>
                    <p className='weaponStat'>Cost: {currentWeapon.cost}</p>
                    <p className='weaponStat'>Csgo Equivalent: {currentWeapon.CsgoEquivalent}</p>
                </div>
        } else {
            currentWeaponStats =
                <div className='weaponStats'>
                    <p className='weaponStat'>Primary Fire: {currentWeapon.primaryFire}</p>
                    <p className='weaponStat'>Primary Fire Rate: {currentWeapon.primaryFireRate} rounds/sec</p>
                    <p className='weaponStat'>Alternate Fire: {currentWeapon.altFire}</p>
                    <p className='weaponStat'>Alternate Fire Rate: {currentWeapon.altFireRate} rounds/sec</p>
                    <div className='weaponStatDamge'>
                        <p >Damage:</p>
                        <div className='weaponStatDamgeContent'>
                            {weaponDamage}
                        </div>
                    </div>
                    {/* <p className='weaponStat'>Damage: {JSON.stringify(currentWeapon.damage)}</p> */}
                    <p className='weaponStat'>Clip Size: {currentWeapon.clipSize}</p>
                    <p className='weaponStat'>Penetration: {currentWeapon.wallPenetration}</p>
                    <p className='weaponStat'>Cost: {currentWeapon.cost}</p>
                    <p className='weaponStat'>Csgo Equivalent: {currentWeapon.CsgoEquivalent}</p>
                </div>
        }
    }


    return (
        <div className="Weapon">
            <div className='weaponNameWithImage'>
                <p className='weaponName'>{currentWeapon.name}</p>
                <img className='weaponImage' src={currentWeapon.image} alt='weapon' />
            </div>
            {/* <div className='weaponStats'>
                <p className='weaponStat'>fire: {currentWeapon.fire}</p>
                <p className='weaponStat'>damage: {JSON.stringify(currentWeapon.damage)}</p>
                <p className='weaponStat'>fire Rate: {currentWeapon.fireRate} rounds/sec</p>
                <p className='weaponStat'>clip Size: {currentWeapon.clipSize}</p>
                <p className='weaponStat'>penetration: {currentWeapon.penetration}</p>
                <p className='weaponStat'>cost: {currentWeapon.cost}</p>
                <p className='weaponStat'>Csgo Equivalent: {currentWeapon.CsgoEquivalent}</p>
            </div> */}
            {currentWeaponStats}
        </div>
    );
}

export default Weapon;
