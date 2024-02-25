import React, { useState, useEffect } from "react";
import axios from "axios";
import './acmeApp.scss'
import TeamCard from "./TeamCard";
import NFLlogo from "./assets/NFLLogo.png";

function ACMEApp() {
  const [allTeams, setAllTeams] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const options = {
        method: 'GET',
        url: 'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'nfl-api-data.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setAllTeams(response.data);
        setTeams(response.data);
      } catch (error) {
        console.error(error);
        setAllTeams([]);
        setTeams([]);
      }
    };

    fetchData();
  }, []);

  const searchCards = (event) => {
    const value = event.target.value.toLowerCase();
    const searchTeams = allTeams.filter((team) =>
      `${team.team.name} ${team.team.nickname} ${team.team.location}`.toLowerCase().includes(value)
    );
    setTeams(searchTeams);
  };

  return (
    <div className="acme__app">
      <div className="acme__NFL-teams">
        <div className="acme__left-side">
          <img className="acme__NFL-logo" src={NFLlogo} title="NFL Logo" alt="NFL Logo"></img>
          <h1>NFL Teams</h1>
        </div>
        <input className="acme__search-box" onInput={searchCards} placeholder="Search by team name or location" />
      </div>

      <div className="acme__cards-container">
        {teams.map((team, index) => (
          <TeamCard key={index} teamData={team.team} />
        ))}
      </div>
    </div>
  );
}

export default ACMEApp;

<div className="acme__left-side">
          <img className="acme__NFL-logo" src={NFLlogo} title="NFL Logo" alt="NFL Logo"></img>
          <h1>NFL Teams</h1>
        </div>