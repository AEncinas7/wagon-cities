/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    if (!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Please select a city...</p>
        </div>
      );
    }

    const src = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`;

    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={src} width="100%" />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
