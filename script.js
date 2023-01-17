
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
    //.then(data => data.results.forEach(characterInfo => displayCharacter(characterInfo)))
    .then(data => console.log(data.results))

    // alerts user if they type in a wrong character name
    .catch((error)=>{alert('Error: Please search for a Rick and Morty Character')})
    
},{once: true})


// fucntion created to help display character info
function displayCharacter(info){
    let table = document.getElementById("characterTableBody")

    let row = document.createElement('tr')
    let name = document.createElement('td')
    let btn1 = document.createElement('button')


    name.innerText= info.name
    btn1.innerText= "Character Information"
    
   // add event listner to display character info
    btn1.addEventListener('click', (e)=>{

        let showData= document.createElement('ul')
        
        let image = document.createElement('img')
        let species = document.createElement('li')
        let location = document.createElement('li')
        let origin = document.createElement('li')
        let episodes = document.createElement('li')

        image.src = info.image
        species.innerText= "Species: " + info.species
        location.innerText= "Last known location: " + info.location.name
        origin.innerText= "Origin: " + info.origin.name
        
        episodes.innerText= "Number of Episodes: " + info.episode.length
        
        // Event to execute every time the cursor is moved over a different list item
        showData.addEventListener("mouseover",(e)=>{
            e.target.style.color ="orange"
            
            // reset the color after 5 sec
            setTimeout(()=>{
                e.target.style.color ="";
            },500)
        }, false)

        showData.appendChild(image)
        showData.appendChild(species)
        showData.appendChild(location)
        showData.appendChild(origin)
        showData.appendChild(episodes)

        row.appendChild(showData)

        //allows event to only trigger once
    }, {once: true})

    row.appendChild(name)
    row.appendChild(btn1)

    table.appendChild(row)

}
