import './App.css';
import './Maps.js';
import {GoogleMap, Marker, InfoWindow, Map, GoogleApiWrapper } from "google-maps-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Press the button below to find our location 
        </p>
        <a
          className="App-link"
          href="./Maps.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'}/>
                <InfoWindow onLose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow>
      </Map>

    </div>
  );
}
      

export default GoogleApiWrapper({
  apiKey: ("333c62d1-3cc2-4ea8-8425-aec80a427386", "i took a rondom api adress bc i can't get one ")
})(App)
