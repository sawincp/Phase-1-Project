const characterURL ="https://rickandmortyapi.com/api/character"
const locationsURL = "https://rickandmortyapi.com/api/location"
const episodesURL = "https://rickandmortyapi.com/api/episode"

const configObj = {
    method: "GET",
    headers: {
        "Content-Type": "applicaiton/json",
    }
}
const characterData = 
fetch(characterURL, configObj)
    .then(response => response.json())
    //.then(userData => userData.items.forEach(element => displayUserInfo(element)))
    .then(apiData => console.log(apiData))

const locationData = 
    fetch(locationsURL, configObj)
    .then(response => response.json())
    //.then(userData => userData.items.forEach(element => displayUserInfo(element)))
    .then(apiData => console.log(apiData))

const episodeData = 
    fetch(episodesURL, configObj)
    .then(response => response.json())
    //.then(userData => userData.items.forEach(element => displayUserInfo(element)))
    .then(apiData => console.log(apiData))
