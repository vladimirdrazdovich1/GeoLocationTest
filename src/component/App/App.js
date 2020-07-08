import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getGeoLocations } from '../../utils/getGeoLocation';

import './App.css';

function App({
  google,
}) {
  const [ coords, setCoords ] = useState({});
  useEffect(() => {
    const getCoords = async () => {
      try{
        const coords = await getGeoLocations();
        setCoords(coords);    
      }
      catch (err){
        console.log(err);
      }      
    }
    getCoords();
  }, [])
  return (
    <div className="App">
      <Map
        google={google}
        center={coords}
      >  
        <Marker
          position={coords} />        
       </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(App);
