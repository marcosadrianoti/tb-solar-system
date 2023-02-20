import React from 'react';
import PropTypes from 'prop-types';
import '../styles/planetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, orbting, clasName } = this.props;
    return (
      <div className="planet-card" data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <div className="image-planet-container">

          <button
            type="button"
            onClick={ orbting }
          >
            <img
              id="planetImage"
              className={ `${clasName}` }
              src={ planetImage }
              alt={ `Planeta ${planetName}` }
            />
          </button>
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
  orbting: PropTypes.func,
  clasName: PropTypes.string,
}.isRequired;

export default PlanetCard;
