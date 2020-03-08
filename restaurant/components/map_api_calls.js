//using LeafletJS api and Maptiler
function getMapDisplay(lat, long) {
  //construct map object
  var map = L.map('map').setView([lat, long], 15);

  //add maptiler
  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=uQBcyIYikVch5yehDzE5', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  }).addTo(map);

  //assign a map marker onto the map with the given business coordinates
  var marker = L.marker([lat, long]).addTo(map);
}
