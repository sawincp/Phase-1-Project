
const form = document.getElementById('search-form')

// assign API URL to variable
const characterURL =`https://rickandmortyapi.com/api/character/?`


let mainHeader = document.getElementById('characterHeaders')
        let header1 = document.createElement('th')
    
        header1.innerText ="Character Name"
    
        mainHeader.appendChild(header1)

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    const search = document.getElementById('search').value
    const status = document.getElementById('charcter-status').value
    const gender = document.getElementById('character-gender').value

    fetch(characterURL+"name="+ search + "&status="+ status +"&gender="+gender)
    .then(response => response.json())
    .then(data => data.results.forEach(characterInfo => displayCharacter(characterInfo)))
    //.then(data => console.log(data.results))
},)


// display Character Data
function displayCharacter(info){
    let table = document.getElementById("characterTableBody")

    let row = document.createElement('tr')

    let name = document.createElement('td')
    let img = document.createElement('img')
    let btn1 = document.createElement('button')


    name.innerText= info.name
    img.src = info.image
    btn1.innerText= "Character Information"
    
   
    btn1.addEventListener('click', (e)=>{
        let species = document.createElement('ul')
        let location = document.createElement('ul')
        let origin = document.createElement('ul')
        let episodes = document.createElement('ul')

        species.innerText= "Species: " + info.species
        location.innerText= "Last known location: " + info.location.name
        origin.innerText= "Origin: " + info.origin.name
        
        //console.log(arrayEpisodes.length)
        episodes.innerText= "Number of Episodes: " + info.episode.length
        
        row.appendChild(species)
        row.appendChild(location)
        row.appendChild(origin)
        row.appendChild(episodes)


    }, {once: true})

    row.appendChild(name)
    name.appendChild(img)
    row.appendChild(btn1)

    table.appendChild(row)

}
