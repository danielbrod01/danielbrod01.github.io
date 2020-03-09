//function that checks if onkeypress event is "return" or "enter" key
function detectEnterKey(event) {
  if (event.keyCode == 13 || event.which == 13) {
    submitSearchForm();
  }
}

//Function to save keyword into local storage
 function submitSearchForm() {
   var key = document.getElementById("form-text").value;
   localStorage.setItem("keyword",key);
   var num = 0;
   localStorage.setItem("offset", num);
   window.document.location = '../restaurant/results.html';
 }

//Function to save keyword into local storage
 function submitKeyword(key) {
   localStorage.setItem("keyword",key);
   var num = 0;
   localStorage.setItem("offset", num);
   window.document.location = '../restaurant/results.html';
 }

//set the offset to offset+25 for next api query
 function nextResults() {
   var num = parseInt(localStorage.getItem("offset"));
   num += 25;
   localStorage.setItem("offset", num);
   window.document.location = '../restaurant/results.html';
 }

//set the offset to offset-25 for the next api query
 function prevResults() {
   var num = parseInt(localStorage.getItem("offset"));
   if(num < 25) {
     document.getElementById("result-title").innerHTML = `There are no more results before that`;
     return;
   }
   num -= 25;
   localStorage.setItem("offset", num);
   window.document.location = '../restaurant/results.html';
 }

 //function to save business result's id for api query
  function saveBusinessId(id, dist) {
    localStorage.setItem("business-id", id);

    //also save the distance from user's location to the destination
    saveDistance(dist);

    //proceed to details.html page
    window.document.location = '../restaurant/details.html';
  }

//saves the distance from user's location to the destination
 function saveDistance(dist) {
   localStorage.setItem("distance", dist);
 }

//convert meters to miles and round to 1 decimal place
 function metersToMilesFixed(meters) {
   var num = meters * 0.00062137;
   return num.toFixed(1);
 }

//helper event target function
 function getEventTarget(e) {
   e = e || window.event;
   return e.target || e.srcElement;
 }

//setup event listener for user clicks, submit keyword that corresponds to the innerHTML of the event target
 var ul = document.getElementById("bulk");
 ul.onclick = function(e) {
   var target = getEventTarget(event);
   submitKeyword(target.innerHTML);
 }
