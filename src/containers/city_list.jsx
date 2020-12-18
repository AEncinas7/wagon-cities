/* eslint-disable object-shorthand */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city';

class CityList extends Component {
  componentWillMount() {
    // TODO: dispath an action to update the Redux State tree (cities)
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => (
          <City
            key={city.name}
            city={city}            
          />
        ))}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
