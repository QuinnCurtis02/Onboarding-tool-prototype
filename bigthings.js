var dataButtons = document.getElementsByClassName("toggle");
//declaring variables for each product
var ontrack = 0;
var companyOps = 0;
var splashkit = 0;
var artGallery = 0;
var courseFlow = 0;
//toggle function. Arguments as follows: id = array of button in ID. Should be in order. ot = ontrack, co = company operations, sk = splashkit, ag = art gallery, cf = courseflow.
function toggleButton(id, ot, co, sk, ag, cf) {
    var button = document.getElementById(dataButtons[id].id);
    //if statement uses the value of the button color to determine wether to increase or decrease the values
    if (button.style.color === "orange") {
        //first change color
        button.style.color = "black";
        //then adjust variables
        ontrack -= ot;
        companyOps -= co;
        splashkit -= sk;
        artGallery -= ag;
        courseFlow -= cf;
    }
    else {
        button.style.color = "orange";
        ontrack += ot;
        companyOps += co;
        splashkit += sk;
        artGallery += ag;
        courseFlow += cf;
    }
}
