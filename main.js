console.log("page called")
function addListeners () {
    console.log("addlistners called")
    var all =document.getElementsByClassName("btn");
    for (let i =0; i < all.length; i++) {
        var element = all[i];
        element.addEventListener("click", function() { clicked(element.getAttribute("id"))}
    }
}

window.onload = addListeners();

function clicked(g) {
    console.log("clicked called");
}