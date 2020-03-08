//function to display elements in results.html page
function businessResultsTemplate(business) {
  return `
  <div id="business-result" class="row">
    <hr class="result-divider">
        <div class="col-md-7 order-md-2">

    <!-- display the business name, and category title in the heading -->
          <a onclick="saveBusinessId('${business.id}', '${metersToMilesFixed(business.distance)}')" class="business-link">
            <h2 class="city" id="business-name">${business.name}  <span class="text-danger">${business.categories[0].title}</span></h2>
          </a>

    <!-- display the rating stars & review count -->
            <h4 id="business-rating">${business.rating}/5 stars,  <span class="text-muted">${business.review_count} review(s)</span></h4>

    <!-- display the business status (shop open or closed) and the distance from user location to business destination -->
              <h5 id="business-status">
                ${(business.is_closed) ? `<span class="text-danger">Closed</span>` : `<span class="text-success">Open</span>`} -
                <span class="text-muted">${metersToMilesFixed(business.distance)} mi</span><span class="glyphicon glyphicon-map-marker"></span>
              </h5>

    <!-- display the phone and address -->
            <p id="phone-number">${business.display_phone}</p>
            <p>${business.location.display_address[0]}, ${business.location.display_address[1]}</p>
        </div>

    <!-- display the business image -->
        <div class="col-md-5 order-md-1">
          <img src="${business.image_url}" height="250" width="350">
        </div>
  </div>
  `
}

//function to display elements in details.html page
function businessDetailsTemplate(details) {
  return `
  <div class="row">
    <hr class="result-divider">
        <div class="col-md-5 order-md-2">

      <!-- display the rating stars, review count, and price range -->
            <h3 id="business-rating">${details.rating}/5 stars, <span class="text-muted">${details.review_count} review(s)</span></h3>
            <h4 id="business-price">Price Range: ${details.price} <span class ="text-muted">(${priceRange(details.price)})</span></h4>
    <hr class="result-divider">

      <!-- display the business hours -->
          <div id="business-hours">
            <h3>Business Hours</h3>
            <h5>Mon   <span class="text-muted">${timeFix(details.hours[0].open[0].start)} - ${timeFix(details.hours[0].open[0].end)}</span></h5>
            <h5>Tue   <span class="text-muted">${timeFix(details.hours[0].open[1].start)} - ${timeFix(details.hours[0].open[1].end)}</span></h5>
            <h5>Wed   <span class="text-muted">${timeFix(details.hours[0].open[2].start)} - ${timeFix(details.hours[0].open[2].end)}</span></h5>
            <h5>Thu   <span class="text-muted">${timeFix(details.hours[0].open[3].start)} - ${timeFix(details.hours[0].open[3].end)}</span></h5>
            <h5>Fri   <span class="text-muted">${timeFix(details.hours[0].open[4].start)} - ${timeFix(details.hours[0].open[4].end)}</span></h5>
            <h5>Sat   <span class="text-muted">${timeFix(details.hours[0].open[5].start)} - ${timeFix(details.hours[0].open[5].end)}</span></h5>
            <h5>Sun   <span class="text-muted">${timeFix(details.hours[0].open[6].start)} - ${timeFix(details.hours[0].open[6].end)}</span></h5>
          </div>
        </div>

      <!-- display the business status (shop open or closed) and the distance from user location to business destination -->
        <div class="col-md-7 order-md-1">
          <h3 id="business-status">${(details.is_closed) ? `<span class="text-danger">Closed</span>` : `<span class="text-success">Open</span>`} -
            <span class="text-muted">${localStorage.getItem("distance")} mi</span>
            <span class="glyphicon glyphicon-map-marker"></span>
          </h3>

      <!-- display the phone and address -->
            <h5 id="phone-number">${details.display_phone}</h5>
            <h5>${details.location.display_address[0]}, ${details.location.display_address[1]}</h5>
      <hr class="result-divider">

      <!-- display the location on the map with a map marker -->
          <div class="container flex-container mb-3 bg-light rounded border"
              <div id="map"></div>
          </div>
        </div>
      <hr class="result-divider">
  </div>
  `
}

//helpfer function to create html elements to display business images
function businessPhotosTemplate(photo) {
  return `
  <div class="col">
    <img src="${photo}" height="250" width="350">
  </div>
  `
}

function priceRange(price) {
  if(price == "$") {
    return `under $10`
  }
  if(price == "$$") {
    return `$11-$30`
  }if(price == "$$$") {
    return `$31-$60`
  }if(price == "$$$$") {
    return `over $61`
  }
}

function timeFix(string) {
  return string.substr(0,2) + ':' + string.substr(2,2);
}
