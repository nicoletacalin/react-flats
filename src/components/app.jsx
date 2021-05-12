import React, { Component } from 'react';
import flats from '../../data/flats.js';
import Cards from './cards';
// import ReactMapboxGl from 'react-mapbox-gl';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }


  center(){
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index)=> {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render() {
    return (
      <div>
        <Cards
          flats={this.state.flats}
          selectedFlat= {this.state.selectedFlat}
        />
        <div className="map-container">
           <GoogleMapReact
              defaultCenter={this.center()}
              defaultZoom={11}
            >
            <Marker
                lat={this.state.selectedFlat.lat}
                lng={this.state.selectedFlat.lng}
              />
            </GoogleMapReact>
        </div>
      </div>

    )
  };
}

export default App;
