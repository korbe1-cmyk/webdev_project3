function initMap() {
  const campus = {
    lat: 41.8349,
    lng: -87.6270
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: campus,
    zoom: 16
  });

  // Feature 1: Campus marker
  const marker = new google.maps.Marker({
    position: campus,
    map: map,
    title: "Illinois Institute of Technology"
  });

  // Feature 2: Clickable information window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3>" +
      "<p>My university in Chicago, Illinois.</p>"
  });

  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });

  // Feature 3: Highlighted campus area
  new google.maps.Circle({
    map: map,
    center: campus,
    radius: 300,
    strokeColor: "#304b63",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#6489a8",
    fillOpacity: 0.25
  });
}

// Questions button event listener
const questionsButton = document.getElementById("questions-button");

if (questionsButton) {
  questionsButton.addEventListener("click", function() {
    alert("If you have questions, contact me at:\nkorbe1@hawk.illinoistech.edu");
  });
}