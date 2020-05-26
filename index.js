
function toggleBio(){
    var textBox = document.getElementById("moreBio");
    var button = document.querySelector("#moreBtn");

    if (textBox.style.display == "none") {
        textBox.style.display = "block";
        button.textContent = "Show less";
    }
    else {
        textBox.style.display = "none";
        button.textContent= "Show more";
    }
}


function expandImg() {
    
}