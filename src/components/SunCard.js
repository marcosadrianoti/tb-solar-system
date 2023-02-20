import React from 'react';
import PropTypes from 'prop-types';
import SunImg from '../images/Sun.png';
import '../styles/sunCard.css';

class SunCard extends React.Component {
  render() {
    const { orbiting } = this.props;
    return (
      <div className="sun-card" data-testid="sun-card">
        <p className="sun">Sol</p>
        <div className="image-sun-container">
          <input
            type="image"
            className="sun"
            src={ SunImg }
            alt="Sol"
            onClick={ orbiting }
          />
        </div>
      </div>
    );
  }
}

SunCard.propTypes = {
  orbiting: PropTypes.func,
}.isRequired;

export default SunCard;
