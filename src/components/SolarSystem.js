import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
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
