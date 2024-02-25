import React from 'react'
import './acmeHeader.scss';
import ACMElogo from './assets/ACMESportsWhite.png';
import meatballMenu from './assets/meatballWhite.png';

/*  NOT functional, for context reasons only*/

const ACMEHeader = () => {
    
    return (
        <div title="Only for context, not yet functional">
            <div className="acme__header">
                <div className="acme__left-content"> {/* Divides header into 2 parts for spacing */}
                    <img className="acme__logo" src={ACMElogo} alt="ACME Logo"></img>
                    <h1 className="acme__leagues">NFL</h1>
                    <h1 className="acme__leagues">NHL</h1>
                    <h1 className="acme__leagues">NBA</h1>
                    <h1 className="acme__leagues">MLB</h1>
                    <h1 className="acme__leagues">Soccer</h1>
                    <img className="acme__menu-icon" src={meatballMenu} alt="meatball menu icon"></img> {/* If functional would open a dropdown menu for the other sports */}
                </div>

                <input className="acme__search" placeholder="Search Sports, Teams, Players, etc.." readOnly/> 
            </div>

            {/* Done simply for context reasons, I would have otherwise made this functional but this is just for show */}
            <div className="acme__drop-menu">
                <h2 className="acme__options">Home</h2>
                <h2 className="acme__options">Scores</h2>
                <h2 className="acme__options">Schedule</h2>
                <h2 className="acme__options">Standings</h2>
                <h2 className="acme__options">Stats</h2>
                <h2 className="acme__options-selected">Teams</h2>
                <h2 className="acme__options">Fantasy Football</h2>
            </div>
        </div>
    )
};

export default ACMEHeader;