const form = document.getElementById('rick-form')
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
.then(charData => charData.results.forEach(charInfo => displayChar(charInfo)))

function displayChar(charInfo){
    let li = document.createElement('li')
    document.getElementById('character-list').appendChild(li)
    
    
    let p = document.createElement('p')
    p.innerHTML = `${charInfo.name}` 
    li.appendChild(p)
    
}
    