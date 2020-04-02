
function test(){
    var textBox = document.getElementById("moreBio");
    if (textBox.style.display == "none") {
        textBox.style.display = "block";
        //Change button text to "Hide"
        textBox.value = "Hide"
    }
    else {
        textBox.style.display = "none"; 
        //Revert button text back to "More about me"
    }
    
}
