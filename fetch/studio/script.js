//TODO: Add Your Code Below
window.addEventListener("load", function(){
    //let form = document.getElementById('searchForm');
    //form.addEventListener("submit", function(event){
    //event.preventDefault();
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        let astronautDiv;
        let bioDiv;
        let container = document.getElementById('container');
        for(let i = 0; i < response.length; i ++ )
        {
            const firstName = response[i].firstName;
            const lastName = response[i].lastName;
            astronautDiv = document.createElement('div');
            astronautDiv.className = 'astronaut';
            bioDiv = document.createElement('div');
            bioDiv.className = 'bio';
            bioDiv.textContent = 'This is the astronaut\'s bio.';
            astronautDiv.appendChild(bioDiv);
            container.appendChild(astronautDiv);
        }
        console.log(response);

    }




    )});
