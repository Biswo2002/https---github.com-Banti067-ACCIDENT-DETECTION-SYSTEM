
var modal = document.getElementById('id01');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById('id02');


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

document.addEventListener("DOMContentLoaded", () => {
  var but = document.getElementById("but");
  var video = document.getElementById("vid");
  var mediaDevices = navigator.mediaDevices;
  vid.muted = true;
  but.addEventListener("click", () => {
    mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })

      .then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      })
      .catch(alert);
  });
});