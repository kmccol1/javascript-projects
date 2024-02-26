function updateParagraph()
{
    paragraph = document.getElementById("statusReport");
    paragraph.innerHTML= "Houston, we have liftoff!";
}

function updateButtonBackgroundColor()
{
    myButton = document.getElementById("abortMission");
    myButton.style.background = "red";
}

function resetButtonBackgroundColor()
{
    myButton = document.getElementById("abortMission");
    myButton.style.background = "";
}

function abortButtonFunc()
{
    let result = window.confirm("Are you sure you want to abort the mission?");

    if ( result == true)
    {
        paragraph = document.getElementById("statusReport");
        paragraph.innerHTML= "Mission aborted! Space shuttle returning home";

    }
}

function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", updateParagraph)
    missionAbort.addEventListener("mouseover", updateButtonBackgroundColor)
    missionAbort.addEventListener("mouseout", resetButtonBackgroundColor)
    missionAbort.addEventListener("click", abortButtonFunc)
    
}

window.addEventListener("load", init);
