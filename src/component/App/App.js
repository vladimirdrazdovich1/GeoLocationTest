import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, GoogleAPI, Marker, IMarkerProps, IMapProps } from 'google-maps-react';

import './App.css';

function App({
  google,
}) {
  return (
    <div className="App">
      <Map
        google={google}
      />   
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(App);
