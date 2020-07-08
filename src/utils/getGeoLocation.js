

export const getGeoLocations = () => {  
  return new Promise((resolve, reject) => {
    const location = (position) => {
      resolve({ 
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      })
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location);
    } else {
      reject('Geolocation is not supported by this browser')
    }
  })
  
}