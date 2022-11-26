import React from 'react';
import PropTypes from 'prop-types';
import '../styles/missionCard.css';
import Icon from './Icon';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <div className="mission-datas">
          <p data-testid="mission-year">
            <Icon iconName="calendar" />
            &nbsp;
            { year }
          </p>
          <p data-testid="mission-country">
            <Icon iconName="local" />
            &nbsp;
            { country }
          </p>
          <p data-testid="mission-destination">
            <Icon iconName="destiny" />
            &nbsp;
            { destination }
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
