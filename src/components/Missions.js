import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../styles/missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        <ul>
          { missions.map((mission) => (
            <li key={ mission.name }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default Missions;
