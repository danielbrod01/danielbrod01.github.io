//Api call when user location is provided
function getBusinessesNearby() {
  var userLat = localStorage.getItem("latitude");
  var userLong = localStorage.getItem("longitude");
  console.log("Retrieved user's latitude: " + userLat);
  console.log("Retrieved user's longitude: " + userLong);

  //Retrieve user keyword input
  var keyword = localStorage.getItem("keyword");
  var offset = localStorage.getItem("offset");

  var URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';
  var API_KEY = 'IbVMdDeWsBdkD1Zi-us7VhQuMVCVFjVE5sAlkCRZNogfel6CIerA-TwIcN0VRiyWD2CbDuzIyPYMj-6D4R1CXo7MbfoJ3NXOoimwo4EF5QKEFpuKS5dTKiHXOxNfXnYx';

  //fetch data using the api endpoint
  var auth = {
    headers: {
      "Authorization": "Bearer " + API_KEY
    }
  }
  fetch(URL + '/businesses/search?categories=food,restaurants&term=' + keyword + '&latitude=' +userLat+'&longitude=' + userLong + '&offset=' + offset + '&limit=25', auth).then(response =>
    response.json()).then(data => {
    console.log(data);

    //display to user the number of search results
    document.getElementById("result-title").innerHTML = `${data.businesses.length} result(s) near you:`;

    //for every business result in businesses data, create a new row html element display
    document.getElementById("result-list").innerHTML = `${data.businesses.map(businessResultsTemplate).join('')}` +
      `<hr class="result-divider">` + fixOffsetButtons() + `<hr class="result-divider">`;
  });
}

/*--------------------------------------------------------------------------------------*/

//Api call when no user location is grabbed
function getBusinesses() {
  //Retrieve user keyword input
  var keyword = localStorage.getItem("keyword");
  var offset = localStorage.getItem("offset");

  var URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';
  var API_KEY = 'IbVMdDeWsBdkD1Zi-us7VhQuMVCVFjVE5sAlkCRZNogfel6CIerA-TwIcN0VRiyWD2CbDuzIyPYMj-6D4R1CXo7MbfoJ3NXOoimwo4EF5QKEFpuKS5dTKiHXOxNfXnYx';

  //fetch data using the api endpoint
  var auth = {
    headers: {
      "Authorization": "Bearer " + API_KEY
    }
  }
  //default location latitude and longitude from San Francisco
  fetch(URL + '/businesses/search?term=' + keyword +'&latitude=37.7749&longitude=-122.4194' + '&offset=' + offset + '&limit=25', auth).then(response =>
    response.json()).then(data => {
    console.log(data);

    document.getElementById("result-title").innerHTML = `
    ${data.businesses.length} result(s): <span class="text-danger">Default location in San Francisco, CA</span>`;

    //for every business result in businesses data, create a new row html element display
    document.getElementById("result-list").innerHTML = `${data.businesses.map(businessResultsTemplate).join('')}`;
  });
}

/*--------------------------------------------------------------------------------------*/

//Api call to query business details by id
function getBusinessDetails() {
  //Retrieve user keyword input
  var id = localStorage.getItem("business-id");

  var URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';
  var API_KEY = 'IbVMdDeWsBdkD1Zi-us7VhQuMVCVFjVE5sAlkCRZNogfel6CIerA-TwIcN0VRiyWD2CbDuzIyPYMj-6D4R1CXo7MbfoJ3NXOoimwo4EF5QKEFpuKS5dTKiHXOxNfXnYx';

  //fetch data using business id in the api endpoint
  var auth = {
    headers: {
      "Authorization": "Bearer " + API_KEY
    }
  }

  fetch(URL + '/businesses/' + id, auth).then(response =>
    response.json()).then(data => {
    console.log(data);

    //fill the top of the page with the restaurant's photos
    document.getElementById("image-row").innerHTML = `${data.photos.map(businessPhotosTemplate).join('')}`;

    //display the business name and category title link
    document.getElementById("business-name").innerHTML = `${data.name}
    <a onclick="submitKeyword('${data.categories[0].title}')">
      <span class="text-danger">${data.categories[0].title}
      </span>
    </a>`;

    //fill the page with business details
    document.getElementById("business-details").innerHTML = `${businessDetailsTemplate(data)}`;

    //plot down a map with a marker
    getMapDisplay(data.coordinates.latitude, data.coordinates.longitude);
  });
}
