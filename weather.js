function gotPlace() {

  var inp = document.getElementById("input2").value;
  var script = document.createElement('script');




  script.src = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + inp + "')&format=json&callback=callbackFunction";
  script.id = "jsonpCall";



  var oldScript = document.getElementById("jsonpCall");
  if (oldScript != null) {

    document.body.removeChild(oldScript);
  }
  document.body.appendChild(script);
}

function callbackFunction(data) {
  var we1 = document.getElementById("w1");
  var we2 = document.getElementById("w2");
  var we3 = document.getElementById("w3");
  var we4 = document.getElementById("w4");
  var we5 = document.getElementById("w5");
  var we6 = document.getElementById("w6");
  var we7 = document.getElementById("w7");
  var we8 = document.getElementById("w8");
  var we9 = document.getElementById("w9");
  var we10 = document.getElementById("w10");
  var citi = document.getElementById("city");

  var time1 = document.getElementById("time");
  var date1 = document.getElementById("date");
  var cTemp = document.getElementById("cTemp");
  var tDate = "";
  var perc = document.getElementById("cPerc");
  var wind = document.getElementById("cWind");
  var cImg = document.getElementById("cImg");

  var rawDate = data.query.results.channel.lastBuildDate;
  citi.innerHTML = data.query.results.channel.location.city + ", " + data.query.results.channel.location.region;
  cTemp.innerHTML = data.query.results.channel.item.condition.temp + " " + "F";
  perc.innerHTML = data.query.results.channel.atmosphere.humidity + "%";
  wind.innerHTML = data.query.results.channel.wind.speed + " mph";


  var CuText = data.query.results.channel.item.condition.text;
  var cImage = "";

  if (CuText === "Partly Cloudy" | CuText === "Mostly Cloudy" | CuText === "Breezy" | CuText === "Cloudy") {
    cImage = "../WeatherApp/cloudy.png";
  } else if (CuText === "Mostly Sunny" | CuText === "Sunny") {
    cImage = "../WeatherApp/sunny.png";
  } else if (CuText === "Partly Sunny") {
    cImage = "../WeatherApp/part-sun.png";
  } else if (CuText === "Snow") {
    cImage = "../WeatherApp/snow.png";
  } else if (CuText === "Rain" | CuText === "Showers") {
    cImage = "../WeatherApp/rain.png";
  } else if (CuText === "Thunder" | CuText === "Scattered Thunderstorms") {
    cImage = "../WeatherApp/thunder.png";
  }

  cImg.innerHTML = '<img src ="' + cImage + '" width="100%">';


  var sTime = "";

  for (i = 16; i < 25; i++) {

    sTime += rawDate[i];
  }
  for (i = 5; i < 17; i++) {

    tDate += rawDate[i];
  }

  time1.innerHTML = sTime;
  date1.innerHTML = tDate;



  we1.innerHTML = populate(data, 0).date + "<br>" + populate(data, 0).pic + "<br>" + populate(data, 0).temph + "\xB0" + " " + populate(data, 0).templ + "\xB0" + "<br>" + populate(data, 0).stat;
  we2.innerHTML = populate(data, 1).date + "<br>" + populate(data, 1).pic + "<br>" + populate(data, 1).temph + "\xB0" + " " + populate(data, 1).templ + "\xB0" + "<br>" + populate(data, 1).stat;
  we3.innerHTML = populate(data, 2).date + "<br>" + populate(data, 2).pic + "<br>" + populate(data, 2).temph + "\xB0" + " " + populate(data, 2).templ + "\xB0" + "<br>" + populate(data, 2).stat;
  we4.innerHTML = populate(data, 3).date + "<br>" + populate(data, 3).pic + "<br>" + populate(data, 3).temph + "\xB0" + " " + populate(data, 3).templ + "\xB0" + "<br>" + populate(data, 3).stat;
  we5.innerHTML = populate(data, 4).date + "<br>" + populate(data, 4).pic + "<br>" + populate(data, 4).temph + "\xB0" + " " + populate(data, 4).templ + "\xB0" + "<br>" + populate(data, 4).stat;
  we6.innerHTML = populate(data, 5).date + "<br>" + populate(data, 5).pic + "<br>" + populate(data, 5).temph + "\xB0" + " " + populate(data, 5).templ + "\xB0" + "<br>" + populate(data, 5).stat;
  we7.innerHTML = populate(data, 6).date + "<br>" + populate(data, 6).pic + "<br>" + populate(data, 6).temph + "\xB0" + " " + populate(data, 6).templ + "\xB0" + "<br>" + populate(data, 6).stat;
  we8.innerHTML = populate(data, 7).date + "<br>" + populate(data, 7).pic + "<br>" + populate(data, 7).temph + "\xB0" + " " + populate(data, 7).templ + "\xB0" + "<br>" + populate(data, 7).stat;
  we9.innerHTML = populate(data, 8).date + "<br>" + populate(data, 8).pic + "<br>" + populate(data, 8).temph + "\xB0" + " " + populate(data, 8).templ + "\xB0" + "<br>" + populate(data, 8).stat;
  we10.innerHTML = populate(data, 9).date + "<br>" + populate(data, 9).pic + "<br>" + populate(data, 9).temph + "\xB0" + " " + populate(data, 9).templ + "\xB0" + "<br>" + populate(data, 9).stat;

}

function populate(data, iterations) {


  var date = data.query.results.channel.item.forecast[iterations].date;
  var cond = data.query.results.channel.item.forecast[iterations].text;
  var day = "";
  var month = "";
  var choosePic = "";


  if (cond === "Partly Cloudy" | cond === "Mostly Cloudy" | cond === "Breezy" | cond === "Cloudy") {
    choosePic = "../WeatherApp/cloudy.png";
  } else if (cond === "Mostly Sunny" | cond === "Sunny" | cond === "Mostly Clear" | cond === "Clear") {
    choosePic = "../WeatherApp/sunny.png";
  } else if (cond === "Partly Sunny") {
    choosePic = "../WeatherApp/part-sun.png";
  } else if (cond === "Snow") {
    choosePic = "../WeatherApp/snow.png";
  } else if (cond === "Rain" | cond === "Showers" | cond === "Scattered Showers") {
    choosePic = "../WeatherApp/rain.png";
  } else if (cond === "Thunder" | cond === "Thunderstorms" | cond === "Scattered Thunderstorms" | cond === "Scattered Thundershowers") {
    choosePic = "../WeatherApp/thunder.png";
  }


  for (i = 0; i < 2; i++) {
    day += date[i];
  }
  for (i = 3; i < 6; i++) {
    month += date[i];
  }


  var pop = {
    date: data.query.results.channel.item.forecast[iterations].day,
    temph: data.query.results.channel.item.forecast[iterations].high,
    templ: data.query.results.channel.item.forecast[iterations].low,
    pic: '<img src ="' + choosePic + '" width="90%">',
    stat: cond

  };

  return pop;

}
dis = 0;

function moveRight() {
  if (dis > -100) {
    dis = dis - 20;
    document.getElementById("w1").style.marginLeft = dis + "%";
  }

}

function moveLeft() {
  if (dis <= -100 || dis < 0) {
    dis = dis + 20;
    document.getElementById("w1").style.marginLeft = dis + "%";
  }

}
