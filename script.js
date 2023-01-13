const form = document.getElementById('rick-form')
const characterURL =`https://rickandmortyapi.com/api/character/?`

form.addEventListener('submit',function(event){
    event.preventDefault()
    const inputValue =  document.getElementById('search').value
    const searchQuery = inputValue.trim().split(' ')

    fetch(characterURL + 'name=' + searchQuery[0] + '&status=' + searchQuery[1] + '&species=' + searchQuery[2] + '&type=' + searchQuery[3] + '&gender=' + searchQuery[4])
    .then(response => response.json())
    .then(charData => console.log(charData))

})
