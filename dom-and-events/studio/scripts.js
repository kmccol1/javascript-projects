// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function()
{
    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(){
        window.confirm("Confirm that the shuttle is ready for takeoff.")
    })
}
)
