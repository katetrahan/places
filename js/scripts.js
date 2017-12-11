//business logic
function Place(landmark, time, tips) {
  this.landmarkEpic = landmark;
  this.timeOfYear = time;
  this.tipsForTrip = tips;
}
Place.prototype.fullLocation = function (){
  return this.landmarkEpic + " " + this.timeOfYear + " " + this.tipsForTrip;
}




//user interface
$(document).ready(function() {
  $("form#placesForm").submit(function(event) {
    event.preventDefault();
    // debugger;

    var selectedLocation = $("select#placesDropDown").val();
    // var result = new Place(selectedLocation);
    var arizona = new Place("Grand Canyon", "October", "Wear good shoes");
    var montana = new Place("Glacier National Park", "July", "Bring bear spray");
    var florida = new Place("Siesta Key Beach", "May", "Stay Hydrated");
    var australia = new Place("Sydney Opera House", "June", "Bring a Camera");
    var canada = new Place("Whistler", "January", "Wear a ski helmet");
    var colorado = new Place("Breckenridge Ski Resort", "January", "Make sure you pack warm socks");

    if (selectedLocation === "arizona") {
      $("#showPlace h2").text("Arizona");
      $(".landmark").text(arizona.landmarkEpic);
      $(".timeOfYear").text(arizona.timeOfYear);
      $(".tips").text(arizona.tipsForTrip);
    } else if (selectedLocation === "montana") {
      $("#showPlace h2").text("montana");
      $(".landmark").text(montana.landmarkEpic);
      $(".timeOfYear").text(montana.timeOfYear);
      $(".tips").text(montana.tipsForTrip);
    }






    //   // debugger;

  // console.log(result);

  });
});
