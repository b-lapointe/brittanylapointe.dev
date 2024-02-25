import React from 'react';
import './TeamCard.scss';

const TeamCard = ({ teamData }) => {
  const teamLogo = teamData.logos && teamData.logos.length > 0 ? teamData.logos[0].href : '';
  const teamLink = teamData.links && teamData.links.length > 0 ? teamData.links[0].href : '';

  return (
    <div className="acme__card">
      <div className="acme__team-logo">
        <img src={teamLogo} alt={teamData.displayName} title={teamData.displayName}></img>
      </div>

      <div className="acme__card-body">
        <a className="acme__card-title" href={teamLink} target="_blank" rel="noopener noreferrer">
          {teamData.displayName}
        </a>
        <p className="acme__card-info">Location: {teamData.location}</p>
      </div>
    </div>
  );
};

export default TeamCard;