import React from 'react';
import PropTypes from 'prop-types';
import calendarIcon from '../images/calendar.svg';
import localIcon from '../images/local.svg';
import destinyIcon from '../images/destiny.svg';

class Icon extends React.Component {
  render() {
    const { iconName } = this.props;
    let iconPath;
    if (iconName === 'calendar') {
      iconPath = calendarIcon;
    } else if (iconName === 'local') {
      iconPath = localIcon;
    } else {
      iconPath = destinyIcon;
    }
    return (
      <img src={ iconPath } alt="calendario" />
    );
  }
}

Icon.propTypes = {
  iconName: PropTypes.string,
}.isRequired;

export default Icon;
