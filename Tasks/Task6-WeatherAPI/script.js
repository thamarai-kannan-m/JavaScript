const APIkey = "810321f88588cb5e27cae5a0e0735fa4";
const url ="https://pro.openweathermap.org/data/2.5/forecast/hourly?units=metric&q=banglore";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");

async function weatherCheck(city) {
    const response = await fetch(url+ city+'&appid=${APLKey}');
        if(response.status==401){
            console.log("Error in fetching API");
            const error= document.querySelector(".error");
            error.innerHTML="Error In fetching API";
            document.querySelector(".weather-icon").style.display ="none";
         document.querySelector(".error").style.display = "block";

        }else if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-icon").style.display ="none";

    }else {
    let = data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp )+"°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.wind').innerHTML = data.wind.speed+ "km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="images/cloudy.png";

    }else  if(data.weather[0].main=="Clear"){
        weatherIcon.src ="images/sun.png";

    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="images/heavy-rain.png";

    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="images/drizzle.png";

    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="images/fog.png";

    }
    const weatherDisp =document.querySelector(".weather-icon");
    weatherDisp.style.display ="block";
    document.querySelector(".error").style.display = "none";
}


}
searchBtn.addEventListener("click",()=>{
    weatherCheck(searchBox.value);


} )
