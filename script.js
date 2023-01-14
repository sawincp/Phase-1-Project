const form = document.getElementById('search-form')
const characterURL =`https://rickandmortyapi.com/api/character`

fetch(characterURL)
    .then(response => response.json())
    //.then(data => console.log(data.results))
    .then(data => data.results.forEach(characterInfo => displayCharacter(characterInfo)))

function displayCharacter(info){
    let table = document.getElementById("tableBody")

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


// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     const inputValue =  document.getElementById('search').value
//     const searchQuery = inputValue.trim()
    

//     fetch(characterURL+searchQuery)
//     .then(response => response.json())
//     //.then(charData => console.log(charData.results))
//     .then(charData => charData.results.forEach(character => display(character)))
// })
