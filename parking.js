// script.js
function addVehicle() {
  var vehicleNumber = document.getElementById("vehicleNumber").value;
  if (vehicleNumber.trim() === "") {
      alert("Please enter a vehicle number.");
      return;
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              listParkedVehicles();
              document.getElementById("vehicleNumber").value = "";
          } else {
              alert('Error: ' + xhr.status);
          }
      }
  };
  xhr.open("POST", "add_vehicle.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("vehicle_number=" + encodeURIComponent(vehicleNumber));
}

function listParkedVehicles() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              document.getElementById("vehicleList").innerHTML = xhr.responseText;
          } else {
              alert('Error: ' + xhr.status);
          }
      }
  };
  xhr.open("GET", "list_vehicles.php", true);
  xhr.send();
}
