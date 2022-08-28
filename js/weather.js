"use strict";
//2e3b73b60da2a50638d21ed7963ca7ae

function selected() {
  let selectedCountry = document.getElementById("country").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${selectedCountry}&appid=2e3b73b60da2a50638d21ed7963ca7ae`;

  console.log(url);

  $.ajax({
    url: url,
    success: function (result) {
      console.log(selectedCountry);

      console.log(result);
      let F = Math.round(result.main.temp * (9 / 5) - 459.67);
      let Fahrenheit = F.toString();
      let celsius = Math.round((Fahrenheit - 32) / 1.8);
      $("#temp").html(
        Fahrenheit + "&#176;F" + " " + "/" + " " + celsius + "&#176;C"
      );

      let wind = Math.round(result.wind.speed / 0.44704);
      $("#wind").text(
        wind + "mph" + " " + "/" + " " + Math.round(wind * 1.609) + "km/h"
      );

      let humidity = result.main.humidity;
      $("#humidity").text(humidity + "%");

      $("#location").text(result.name);
      $("#sky").text(result.weather[0].description);
    },
  });
}

let backgroundImage = [
  "avenue-2215317_1920.jpg",
  "flowers-276014.jpg",
  "forest-1072828_1920.jpg",
  "hd-wallpaper-2836301_1920.jpg",
  "hintersee-3601004_1920.jpg",
  "nature-wallpaper-3622519_1920.jpg",
  "tree-832079.jpg",
];

let index = 0;
const bodyImage = document.getElementById("bgImage");

setInterval(function () {
  bodyImage.classList.add("fadeIn");
  if (index > 5) {
    index = 0;
  } else {
    index++;
  }

  bodyImage.src = `images/${backgroundImage[index]}`;
  // console.log(bodyImage.style.backgroundImage);
  bodyImage.classList.remove("fadeIn");

  console.log(bodyImage.src);
}, 5000);
