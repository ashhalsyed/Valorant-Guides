import homepageImage1 from './assets/homepageImage1.png'
import homepageImage2 from './assets/homepageImage2.png'
import homepageImage3 from './assets/homepageImage3.png'
import homepageImage4 from './assets/homepageImage4.png'
import homepageImage5 from './assets/homepageImage5.png'

import brimstone from './agents/brimstone.png';
import brimstoneSmall from './agents/brimstoneSmall.png';
import jett from "./agents/jett.png";
import jettSmall from "./agents/jettSmall.png";
import pheonix from "./agents/pheonix.png";
import pheonixSmall from "./agents/pheonixSmall.png";
import sage from "./agents/sage.png";
import sageSmall from "./agents/sageSmall.png";
import sova from "./agents/sova.png";
import sovaSmall from "./agents/sovaSmall.png";
import breach from "./agents/breach.png";
import breachSmall from "./agents/breachSmall.png";
import cypher from "./agents/cypher.png";
import cypherSmall from "./agents/cypherSmall.png";
import omen from "./agents/omen.png";
import omenSmall from "./agents/omenSmall.png";
import raze from "./agents/raze.png";
import razeSmall from "./agents/razeSmall.png";
import viper from "./agents/viper.png";
import viperSmall from "./agents/viperSmall.png";

import incendiary from './agents/ability images/incendiary.svg'
import skySmoke from './agents/ability images/sky-smoke.svg'
import stimBeacon from './agents/ability images/stim-beacon.svg'
import orbitalStrike from './agents/ability images/orbital-strike.svg'
import paranoia from './agents/ability images/paranoia.svg'
import darkCover from './agents/ability images/dark-cover.svg'
import shroudedStep from './agents/ability images/shrouded-step.svg'
import fromTheShadows from './agents/ability images/from-the-shadows.svg'
import poisonCloud from './agents/ability images/poison-cloud.svg'
import toxicScreen from './agents/ability images/toxic-screen.svg'
import snakeBite from './agents/ability images/snake-bite.svg'
import vipersPit from './agents/ability images/vipers-pit.svg'
import updraft from './agents/ability images/updraft.svg'
import tailwind from './agents/ability images/tailwind.svg'
import cloudburst from './agents/ability images/cloudburst.svg'
import bladeStorm from './agents/ability images/blade-storm.svg'
import curveball from './agents/ability images/curveball.svg'
import hotHands from './agents/ability images/hot-hands.svg'
import blaze from './agents/ability images/blaze.svg'
import runItBack from './agents/ability images/run-it-back.svg'
import blastPack from './agents/ability images/blast-pack.svg'
import paintShells from './agents/ability images/paint-shells.svg'
import boomBot from './agents/ability images/boom-bot.svg'
import showstopper from './agents/ability images/showstopper.svg'
import slowOrb from './agents/ability images/slow-orb.svg'
import healingOrb from './agents/ability images/healing-orb.svg'
import barrierOrb from './agents/ability images/barrier-orb.svg'
import resurrection from './agents/ability images/resurrection.svg'
import cyberCage from './agents/ability images/cyber-cage.svg'
import spycam from './agents/ability images/spycam.svg'
import trapwire from './agents/ability images/trapwire.svg'
import neuralTheft from './agents/ability images/neural-theft.svg'
import shockBolt from './agents/ability images/shock-bolt.svg'
import reconBolt from './agents/ability images/recon-bolt.svg'
import owlDrone from './agents/ability images/owl-drone.svg'
import huntersFury from './agents/ability images/hunters-fury.svg'
import flashpoint from './agents/ability images/flashpoint.svg'
import faultLine from './agents/ability images/fault-line.svg'
import aftershock from './agents/ability images/aftershock.svg'
import rollingThunder from './agents/ability images/rolling-thunder.svg'

import classic from './weapons/classic.png'
import shorty from './weapons/shorty.png'
import frenzy from './weapons/frenzy.png'
import ghost from './weapons/ghost.png'
import sheriff from './weapons/sheriff.png'
import stinger from './weapons/stinger.png'
import spectre from './weapons/spectre.png'
import bucky from './weapons/bucky.png'
import judge from './weapons/judge.png'
import bulldog from './weapons/bulldog.png'
import guardian from './weapons/guardian.png'
import phantom from './weapons/phantom.png'
import vandal from './weapons/vandal.png'
import marshal from './weapons/marshal.png'
import operator from './weapons/operator.png'
import ares from './weapons/ares.png'
import odin from './weapons/odin.png'
import knife from './weapons/knife.png'
import lightshield from './weapons/lightshield.png'
import heavyshield from './weapons/heavyshield.png'

import code from './guides/code.png'
import getGood from './guides/getGood.png'


export const homepageImages = [
    homepageImage1,
    homepageImage2,
    homepageImage3,
    homepageImage4,
    homepageImage5,
]

export const allAgents = [
    {
        type: 'Controller',
        name: "Brimstone",
        image: brimstone,
        imageSmall: brimstoneSmall,
        abilities: [
            {
                name: 'Incendiary',
                image: incendiary,
                description: 'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floop, creating a lingering fire zone that damages players within the zone.',
                cost: '200',
                charges: 1
            },
            {
                name: 'Sky Smoke',
                image: skySmoke,
                description: 'EQUIP a tactical map. FIRE to set locations where Brimstone\'s smoke clouds will land. ATERNATIVE FIRE to confirm. launching long-lasting smoke clouds that block vision in the selected area',
                cost: '100',
                charges: 3
            },
            {
                name: 'Stim Beacon',
                image: stimBeacon,
                description: 'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimsstone. Upon landing, the stim beacon will create a field that gramts players RapidFire',
                cost: '100',
                charges: 2
            },
            {
                name: 'Orbital Strike',
                image: orbitalStrike,
                description: 'EQUIP a tactical map. FIRE to launch a lingering orbital stricke laser at the selected location, dealing high damage-over-time to platers caught in the selected area.',
                cost: '6 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Deulist',
        name: "Jett",
        image: jett,
        imageSmall: jettSmall,
        abilities: [
            {
                name: 'Updraft',
                image: updraft,
                description: 'INSTANTLY propel Jett high into the air',
                cost: '200',
                charges: 2
            },
            {
                name: 'Tailwind',
                image: tailwind,
                description: 'INSTANTLY propell jett in the direction she is moving. If Jett is standing still, she will propell upward',
                cost: 'Free',
                charges: 1
            },
            {
                name: 'Cloudburst',
                image: cloudburst,
                description: 'INSTANTLY throw a projectile that expand into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair',
                cost: '100',
                charges: 3
            },
            {
                name: 'Blade Storm',
                image: bladeStorm,
                description: 'EQUIP a set of highly accurate throwing knifes that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
                cost: '6 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Deulist',
        name: "Pheonix",
        image: pheonix,
        imageSmall: pheonixSmall,
        abilities: [
            {
                name: 'Curveball',
                image: curveball,
                description: 'EQUIP a fire orb that takes the curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right',
                cost: '100',
                charges: 2
            },
            {
                name: 'Hot Hands',
                image: hotHands,
                description: 'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground. creating a lingering fire zone that damages enemies.',
                cost: 'Free',
                charges: 1
            },
            {
                name: 'Blaze',
                image: blaze,
                description: 'EQUIP a flame wall. FIRE to create a line of flame that moves forward creating a wall of fire that blocks vision and damaged platers passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.',
                cost: '200',
                charges: 1
            },
            {
                name: 'Run It Back',
                image: runItBack,
                description: 'INSTANTLY place a marker at Pheonix\'s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Pheonic back to this location with full health',
                cost: '6 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Sentinel',
        name: "Sage",
        image: sage,
        imageSmall: sageSmall,
        abilities: [
            {
                name: 'Slow Orb',
                image: slowOrb,
                description: 'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
                cost: '100',
                charges: 2
            },
            {
                name: 'Healing Orb',
                image: healingOrb,
                description: 'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Aage is damaged to acitvate a self heal-over-time',
                cost: 'Free',
                charges: 1
            },
            {
                name: 'Barrier Orb',
                image: barrierOrb,
                description: 'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter',
                cost: '300',
                charges: 1
            },
            {
                name: 'Resurrection',
                image: resurrection,
                description: 'EQUIP a resurection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health',
                cost: '7 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Initiator',
        name: "Sova",
        image: sova,
        imageSmall: sovaSmall,
        abilities: [
            {
                name: 'Shock Bolt',
                image: shockBolt,
                description: 'EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward detonating upon collision and damagin players nearby. HOLD FIRE to extend the range of projectile. ALTERNATE FIRE to add up to two bounces to this arrow',
                cost: '100',
                charges: 2
            },
            {
                name: 'Recon Bolt',
                image: reconBolt,
                description: 'EQUIP a bow with recon bolt. FIRE to send the recon bolt forward acitvating upon colision and revealing the location of nearby enermies caught in the line of sight of the bolt. Enemies can destroy this bolt. HOLD FIRE to extend the range of the prejectile. ALTERNATE FIRE to add up to two boundes to this arrow.',
                cost: 'Free',
                charges: 1
            },
            {
                name: 'Owl Drone',
                image: owlDrone,
                description: 'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. while in control of the drone, FIRE to shott a marking dart. This dart will reveal the location of any player struck by the dart.',
                cost: '300',
                charges: 1
            },
            {
                name: 'Hunter\'s Fury',
                image: huntersFury,
                description: 'EQUIP a bow with three long-range, wall-peircing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enermies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active',
                cost: '7 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Initiator',
        name: "Breach",
        image: breach,
        imageSmall: breachSmall,
        abilities: [
            {
                name: 'FlashPoint',
                image: flashpoint,
                description: 'EQUIP a blinding charge. FIRE the charge to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
                cost: '200',
                charges: 2
            },
            {
                name: 'Fault Line',
                image: faultLine,
                description: 'EQUIP a aseismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
                cost: 'Free',
                charges: 1
            },
            {
                name: 'Aftershock',
                image: aftershock,
                description: 'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in the area.',
                cost: '100',
                charges: 1
            },
            {
                name: 'Rolling Thunder',
                image: rollingThunder,
                description: 'EQUIP a Seismic charge. FIRE to send a cascading quake through all terain in a large cone. The quake dazes and knicks up anyone caught in it.',
                cost: '7 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Sentinel',
        name: "Cypher",
        image: cypher,
        imageSmall: cypherSmall,
        abilities: [
            {
                name: 'Cyber Cage',
                image: cyberCage,
                description: 'INSTANTLY toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision and slows enemies who pass through it.',
                cost: '100',
                charges: 2
            },
            {
                name: 'SpyCam',
                image: spycam,
                description: 'EQUIP a spycam. FIRE to place the spycam at the target location. RE-USE this ability to take control of the camera\'s view. While in control of the camera. FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart',
                cost: 'Free',
                charges: 1
            },
            {
                name: 'Trapwire',
                image: trapwire,
                description: 'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite, Enemy platers who cross the tripwire will be rethered revealed and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED',
                cost: '200',
                charges: 2
            },
            {
                name: 'Neural Theft',
                image: neuralTheft,
                description: 'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
                cost: '7 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Controller',
        name: "Omen",
        image: omen,
        imageSmall: omenSmall,
        abilities: [
            {
                name: 'Paranoia',
                image: paranoia,
                description: 'INSTANTLY fire a shadow projectile forward, breifly reducing the vision range of all players it touches. This projectile can pass straight through walls.',
                cost: '200',
                charges: 1
            },
            {
                name: 'Dark cover',
                image: darkCover,
                description: 'EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATIVE FIRE while targeting to move the marker further away. HOLD the ability key while targeting to move the marker closer',
                cost: 'Free',
                charges: 2
            },
            {
                name: 'Shrouded Step',
                image: shroudedStep,
                description: 'EQUIP a shrouded step ability and see its range indicator. FIRE to begin a breif channel, then teleport to the marked location. Enemies only hear the sound from your departure location.',
                cost: '100',
                charges: 2
            },
            {
                name: 'From the Shadows',
                image: fromTheShadows,
                description: 'EQUIP  a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel the teleportation.',
                cost: '7 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Deulist',
        name: "Raze",
        image: raze,
        imageSmall: razeSmall,
        abilities: [
            {
                name: 'Blast Pack',
                image: blastPack,
                description: 'INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moviing anything hit.',
                cost: '100',
                charges: 2
            },
            {
                name: 'Paint Shells',
                image: paintShells,
                description: 'EQUIP a cluster grenade. FIRE tp throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their',
                cost: 'Free',
                charges: 2
            },
            {
                name: 'Boom Bot',
                image: boomBot,
                description: 'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The boom Bot will lock on to any enemies in its frontal cone and chase them, explosing heavy damage if it reaches them',
                cost: '200',
                charges: 1
            },
            {
                name: 'Showstopper',
                image: showstopper,
                description: 'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.',
                cost: '6 points',
                charges: 1
            },
        ]
    },
    {
        type: 'Controller',
        name: "Viper",
        image: viper,
        imageSmall: viperSmall,
        abilities: [
            {
                name: 'Poison Cloud',
                image: poisonCloud,
                description: 'EQUIP a gass emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED',
                cost: '200',
                charges: 1
            },
            {
                name: 'Toxic Screen',
                image: toxicScreen,
                description: 'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once',
                cost: 'Free',
                charges: 1
            },
            {
                name: 'Snake Bite',
                image: snakeBite,
                description: 'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.',
                cost: '100',
                charges: 2
            },
            {
                name: 'Viper\'s Pit',
                image: vipersPit,
                description: 'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.',
                cost: '7 points',
                charges: 1
            },
        ]
    },
];

export const allWeapons = [
    {
        type: 'Pistol',
        name: "Classic",
        image: classic,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 6.75,
        altFire: '3-Round Burst, increased spread',
        altFireRate: 2.22,
        clipSize: 12,
        damage: {
            '0-30': [26, 78, 22],
            '30-50': [22, 66, 18]
        },
        wallPenetration: 'Low',
        cost: 'Free',
        CsgoEquivalent: 'Glock'
    },
    {
        type: 'Pistol',
        name: "Shorty",
        image: shorty,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 3.3,
        altFire: '',
        altFireRate: '',
        clipSize: 2,
        damage: {
            '0-9': [12, 36, 10],
            '9-15': [8, 24, 6],
            '15-50': [3, 9, 2]
        },
        wallPenetration: 'Low',
        cost: '200',
        CsgoEquivalent: 'None'
    },
    {
        type: 'Pistol',
        name: "Frenzy",
        image: frenzy,
        primaryFire: 'Full-Automatic',
        primaryFireRate: 10,
        altFire: '',
        altFireRate: '',
        clipSize: 13,
        damage: {
            '0-20': [26, 78, 22],
            '20-50': [22, 63, 17]
        },
        wallPenetration: 'Low',
        cost: '400',
        CsgoEquivalent: 'CZ75'
    },
    {
        type: 'Pistol',
        name: "Ghost",
        image: ghost,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 6.75,
        altFire: '',
        altFireRate: '',
        clipSize: 15,
        damage: {
            '0-30': [30, 105, 25],
            '30-50': [25, 87, 21]
        },
        wallPenetration: 'Medium',
        cost: '500',
        CsgoEquivalent: 'USP-S'
    },
    {
        type: 'Pistol',
        name: "Sheriff",
        image: sheriff,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 4,
        altFire: '',
        altFireRate: '',
        clipSize: 6,
        damage: {
            '0-30': [55, 159, 46],
            '30-50': [50, 145, 42]
        },
        wallPenetration: 'High',
        cost: '800',
        CsgoEquivalent: 'Deagle'
    },
    {
        type: 'SMG',
        name: "Stinger",
        image: stinger,
        primaryFire: 'Full-Automatic',
        primaryFireRate: 18,
        altFire: 'Scope (1.15x), 4-Round Burst, reduced spread',
        altFireRate: 4,
        clipSize: 20,
        damage: {
            '0-20': [27, 67, 23],
            '20-50': [25, 62, 21]
        },
        wallPenetration: 'Low',
        cost: '1000',
        CsgoEquivalent: 'Mac-10'
    },
    {
        type: 'SMG',
        name: "Spectre",
        image: spectre,
        primaryFire: 'Full-Automatic',
        primaryFireRate: 13.33,
        altFire: 'Scope (1.15x), slightly reduced spread',
        altFireRate: 12,
        clipSize: 30,
        damage: {
            '0-20': [26, 78, 22],
            '20-50': [22, 66, 18]
        },
        wallPenetration: 'Medium',
        cost: '1600',
        CsgoEquivalent: 'MP5'
    },
    {
        type: 'Shotgun',
        name: "Bucky",
        image: bucky,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 1.1,
        altFire: 'Semi-Automatic Air Burst, reduced damage close up, increased damage at range',
        altFireRate: 1.1,
        clipSize: 5,
        damage: {
            '0-8': [22, 44, 19],
            '8-12': [17, 34, 14],
            '12-50': [9, 18, 8]
        },
        wallPenetration: 'Low',
        cost: '900',
        CsgoEquivalent: 'None'
    },
    {
        type: 'Shotgun',
        name: "Judge",
        image: judge,
        primaryFire: 'Full-Automatic',
        primaryFireRate: 3.5,
        altFire: '',
        altFireRate: '',
        clipSize: 7,
        damage: {
            '0-10': [17, 34, 14],
            '10-15': [13, 26, 11],
            '15-50': [10, 20, 9]
        },
        wallPenetration: 'Medium',
        cost: '1500',
        CsgoEquivalent: 'XM1014'
    },
    {
        type: 'Rifle',
        name: "Bulldog",
        image: bulldog,
        primaryFire: 'Full-Automatic',
        primaryFireRate: 9.15,
        altFire: 'Scope (1.25x), 3-Round Burst',
        altFireRate: 4,
        clipSize: 24,
        damage: {
            '0-50': [35, 116, 30]
        },
        wallPenetration: 'Medium',
        cost: '2100',
        CsgoEquivalent: 'Famas'
    },
    {
        type: 'Rifle',
        name: "Guardian",
        image: guardian,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 6.5,
        altFire: 'Scope (1.5x), slightly reduced spread',
        altFireRate: 6.5,
        clipSize: 12,
        damage: {
            '0-50': [65, 195, 49],
        },
        wallPenetration: 'Medium',
        cost: '2700',
        CsgoEquivalent: 'None'
    },
    {
        type: 'Rifle',
        name: "Phantom",
        image: phantom,
        primaryFire: 'Full-Automatic',
        primaryFireRate: 11,
        altFire: 'Scope (1.25x), slightly reduced spread',
        altFireRate: 9.9,
        clipSize: 30,
        damage: {
            '0-15': [39, 156, 33],
            '15-30': [35, 140, 30],
            '30-50': [31, 124, 26]
        },
        wallPenetration: 'Medium',
        cost: '2900',
        CsgoEquivalent: 'M4A1'
    },
    {
        type: 'Rifle',
        name: "Vandal",
        image: vandal,
        primaryFire: 'Full-Automatic',
        primaryFireRate: 9.25,
        altFire: 'Scope (1.25x), slightly reduced spread',
        altFireRate: 8.32,
        clipSize: 25,
        damage: {
            '0-50': [39, 156, 33]
        },
        wallPenetration: 'Medium',
        cost: '2900',
        CsgoEquivalent: 'AK-47'
    },
    {
        type: 'Sniper',
        name: "Marshal",
        image: marshal,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 1.5,
        altFire: 'Scope (2.5x), slightly reduced spread',
        altFireRate: 1.2,
        clipSize: 5,
        damage: {
            '0-50': [101, 202, 85]
        },
        wallPenetration: 'Medium',
        cost: '1100',
        CsgoEquivalent: 'SSG 08'
    },
    {
        type: 'Sniper',
        name: "Operator",
        image: operator,
        primaryFire: 'Semi-Automatic',
        primaryFireRate: 0.75,
        altFire: 'Dual Scope (2.5x.5x), significantly reduced spread',
        altFireRate: 0.75,
        clipSize: 5,
        damage: {
            '0-50': [150, 255, 127]
        },
        wallPenetration: 'High',
        cost: '4500',
        CsgoEquivalent: 'AWP'
    },
    {
        type: 'Heavy',
        name: "Ares",
        image: ares,
        primaryFire: 'Full-Automatic',
        primaryFireRate: '10 (increased to 13 during fire)',
        altFire: 'Scope (1.25x), slightly reduced spread',
        altFireRate: '10 (increased to 13 during fire)',
        clipSize: 50,
        damage: {
            '0-30': [30, 72, 25],
            '30-50': [28, 67, 23]
        },
        wallPenetration: 'High',
        cost: '1700',
        CsgoEquivalent: 'Negev'
    },
    {
        type: 'Heavy',
        name: "Odin",
        image: odin,
        primaryFire: 'Full-Automatic',
        primaryFireRate: '12 (increased to 15.6 during fire)',
        altFire: 'Scope (1.25x), slightly reduced spread',
        altFireRate: 15.6,
        clipSize: 100,
        damage: {
            '0-30': [38, 95, 32],
            '30-50': [31, 77, 26]
        },
        wallPenetration: 'High',
        cost: '3200',
        CsgoEquivalent: 'M249'
    },
    {
        type: 'Armor',
        name: "Light Shield",
        image: lightshield,
        primaryFire: 'Absorbs 66% of total damage taken. Breaks after it has absorbed 25 damage',
        primaryFireRate: '',
        altFire: '',
        altFireRate: '',
        clipSize: '',
        damage: '',
        wallPenetration: '',
        cost: '400',
        CsgoEquivalent: 'Kevlar + Helmet'
    },
    {
        type: 'Armor',
        name: "Heavy Shield",
        image: heavyshield,
        primaryFire: 'Absorbs 66% of total damage taken. Breaks after it has absorbed 50 damage',
        primaryFireRate: '',
        altFire: '',
        altFireRate: '',
        clipSize: '',
        damage: '',
        wallPenetration: '',
        cost: '1000',
        CsgoEquivalent: 'Kevlar + Helmet'
    },
    {
        type: 'Melee',
        name: "Tactical Knife",
        image: knife,
        primaryFire: '',
        primaryFireRate: '',
        altFire: '',
        altFireRate: '',
        clipSize: '',
        damage: {
            'Light': [3, 2],
            'Heavy': [2, 1],
        },
        wallPenetration: '',
        cost: 'Free',
        CsgoEquivalent: 'Knife'
    },
];

export const allGuides = [
    {
        type: 'Guide/Tips and Tricks',
        name: "How to code",
        image: code,
        content: 'open vscode and start googling things',
        question: false
    },
    {
        type: 'Guide/Tips and Tricks',
        name: "how to get good at valorant",
        image: getGood,
        content: 'practice, practice, practice',
        question: false
    },
    {
        type: 'FAQ',
        name: "Can You BHOP and Air Strafe in this game",
        image: '',
        content: 'Yes you can',
        question: true
    },
];

//This function can be used if the specific data list has a name property inside it 
//This acts as the key 
function CompileAllDataIntoOneList(allDataRaw) {
    let allData = []
    allDataRaw.forEach(specificList => {
        var listIdentifier;
        if (specificList === allAgents) {
            listIdentifier = 'Agents'
        } else if (specificList === allWeapons) {
            listIdentifier = 'Weapons'
        } else if (specificList === allGuides) {
            listIdentifier = 'Guides'
        }
        specificList.forEach((item) => {
            allData.push([listIdentifier, item.name])
        })
    })
    return allData
}

let allData = CompileAllDataIntoOneList([allAgents, allWeapons, allGuides])

export { allData }


