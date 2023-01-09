const form = document.getElementById('musicbrainz-form')

form.addEventListener('submit', function(e){
    e.preventDefault()
   
    const search = document.getElementById('search').value
    
    const configObj = {
        method: "GET",
        headers: {
            "Content-Type": "applicaiton/json",
            "Accept": "application/vnd.github.v3+json"
        }
    }

    fetch("http://musicbrainz.org/ws/2/artist/?query="+search, configObj)
    .then(response => response.json())
    //.then(userData => userData.items.forEach(element => displayUserInfo(element)))
})