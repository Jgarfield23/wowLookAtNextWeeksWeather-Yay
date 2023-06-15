var apiKey = "b2a3d794234a2e76abf165d172c1074d";
var cityUserInput;
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityUserInput}&units=imperial&appid=${apiKey}`
async function getData(){
    const response = await fetch(queryURL)
    console.log(response)
    const data = await response.json()
    console.log(data);
}
getData();