import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import SunCard from './SunCard';
import '../styles/solarSystem.css';

class SolarSystem extends React.Component {
  state = ({
    orb: false,
  });

  isOrbiting = () => {
    const { orb } = this.state;
    this.setState({
      orb: !orb,
    });
  };

  render() {
    const { orb } = this.state;
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          <SunCard orbiting={ this.isOrbiting } />
          { Planets.map((planet) => (
            <li key={ planet.name }>
              <PlanetCard
                planetName={ planet.name }
                planetImage={ planet.image }
                orbting={ this.isOrbiting }
                orb={ orb }
                clasName={ `${planet.name} ${orb ? `orb-${planet.name
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()}` : ''}` }
              />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
