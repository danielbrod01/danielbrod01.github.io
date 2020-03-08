promptUserLoc();
function promptUserLoc() {
  if (localStorage.getItem("latitude") !== null && localStorage.getItem("longitude") !== null) {
    //if latitude & longitude coordinates are saved on local storage, proceed to API query for businesses nearby
    getBusinessesNearby();
  }
  else {
    //if there is no latitude & longitude coordinates saved on local storage, grab user's location
    getUserLocation();
  }
}

//Grabs user's location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
  //if user allows geolocation tracking
    userLocSuccess,
  //if user denies geolocation access
    handleError,
  );
  }
  else {
    console.log("Geolocation is not supported on this browser");
  }
}

//executes when user allows geolocation permission
function userLocSuccess(position) {
    //store user's latitude and longitude
    localStorage.setItem("latitude", position.coords.latitude);
    localStorage.setItem("longitude", position.coords.longitude);

    //proceed to API query for businesses
    getBusinessesNearby();
}

//executes when geolocation permission is denied
function handleError(error) {
  alert("Geolocation access permission denied");

  //proceed to API query for businesses without a user location (default coordinates as parameters used)
  getBusinesses();
}
