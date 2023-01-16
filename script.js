
const form = document.getElementById('search-form')

// assign API URL to variables
const characterURL =`https://rickandmortyapi.com/api/character`
const locationsURL =`https://rickandmortyapi.com/api/location`
const episodesURL = 'https://rickandmortyapi.com/api/episode'


// fetch(characterURL)
//     .then(response => response.json())
//     //.then(data => data.results.forEach(characterInfo => displayCharacter(characterInfo)))
//     .then(data => console.log(data.results))

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const search = document.getElementById('search').value
    const searchQuery = search.split(' ')
    const firstName = searchQuery[0];
    const lastName = searchQuery[1]
    const fullName = firstName+(' ')+lastName
    const status= document.getElementById('charcter-status').value

    console.log(firstName)
    console.log(lastName)
    console.log(fullName)
    console.log(status)
})

//create buttons
const btn1 = document.getElementById('characters')
const btn2 = document.getElementById('locations')
const btn3 = document.getElementById('episodes')

// create event listners for character, location and episode data
btn1.addEventListener('click', (e)=>{
    let mainHeader = document.getElementById('characterHeaders')
    let header1 = document.createElement('th')
    let header2 = document.createElement('th')

    header1.innerText ="Character Name"
    header2.innerText = "Character Information"

    mainHeader.appendChild(header1)
    mainHeader.appendChild(header2)

    fetch(characterURL)
    .then(response => response.json())
    //.then(data => data.results.forEach(characterInfo => displayCharacter(characterInfo)))
    .then(data => console.log(data.results))

},{once: true})

btn2.addEventListener('click', (e)=>{
    let tableHeader = document.getElementById("locationHeaders")
    let header1 = document.createElement('th')
    let header2 = document.createElement('th')
    let header3 = document.createElement('th')

    header1.innerText ="Name"
    header2.innerText = "Type"
    header3.innerText = "Dimension"

    tableHeader.appendChild(header1)
    tableHeader.appendChild(header2)
    tableHeader.appendChild(header3)



    fetch(locationsURL)
    .then(response => response.json())
    .then(data => data.results.forEach(locationInfo => displayLocation(locationInfo)))
},{once: true})

btn3.addEventListener('click', (e) =>{
    
    let tableHeader = document.getElementById("episodesHeaders")
    let header1 = document.createElement('th')
    let header2 = document.createElement('th')
    let header3 = document.createElement('th')

    header1.innerText ="Name"
    header2.innerText = "Air Date"
    header3.innerText = "Characters"

    tableHeader.appendChild(header1)
    tableHeader.appendChild(header2)
    tableHeader.appendChild(header3)
    
    fetch(episodesURL)
    .then(response => response.json())
    .then(data => data.results.forEach(episodeInfo => displayEpisodes(episodeInfo)))
    //.then(data => console.log(data.results))
},{once: true})

// display API data
function displayCharacter(info){
    
    let table = document.getElementById("characterTableBody")

    let row = document.createElement('tr')

    let name = document.createElement('td')
    let img = document.createElement('img')
    
    let gender = document.createElement('ul')
    let species = document.createElement('ul')
    let status = document.createElement('ul')

    name.innerText= `${info.name}`
    img.src = `${info.image}`
    gender.innerText= `Gender: ${info.gender}`
    species.innerText= `Species: ${info.species}`
    status.innerText= `Status: ${info.status}`

    row.appendChild(name)
    name.appendChild(img)
    row.appendChild(gender)
    row.appendChild(species)
    row.appendChild(status)

    table.appendChild(row)

}

function displayLocation(info){
    let table = document.getElementById("locationTableBody")

    let row = document.createElement('tr')

    let name = document.createElement('td')
    
    let type = document.createElement('td')
    let dimension = document.createElement('td')

    name.innerText= `${info.name}`
    type.innerText = `${info.type}`
    dimension.innerText= `${info.dimension}`

    row.appendChild(name)
    row.appendChild(type)
    row.appendChild(dimension)

    table.appendChild(row)
}

function displayEpisodes(info){

    let table = document.getElementById("episodesTableBody")

    let row = document.createElement('tr')

    let name = document.createElement('td')
    
    let airDate = document.createElement('td')
    let characters = document.createElement('ul')

    name.innerText= `${info.name}`
    airDate.innerText = `${info.air_date}`
    //characters.innerH=`${info.characters}`

    row.appendChild(name)
    row.appendChild(airDate)
   // row.appendChild(characters)

    table.appendChild(row)
    




}