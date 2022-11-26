import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../styles/solarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          { Planets.map((planet) => (
            <li key={ planet.name }>
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
