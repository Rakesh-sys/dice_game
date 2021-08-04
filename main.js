

function dice(){
    var a = Math.floor(Math.random()*6)+ 1;
    var imageValue = "images/dice" + a + ".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",imageValue);

    var b = Math.floor(Math.random()*6)+ 1;
    var imageValue = "images/dice" + b + ".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",imageValue);

    if (a>b){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }


    else if (a<b){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else if (a==b){
        document.querySelector("h1").innerHTML = "Draw !";
    }
    }


document.querySelector(".btnd").addEventListener("click",dice);