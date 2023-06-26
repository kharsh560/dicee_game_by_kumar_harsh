var randomNumber1 = (Math.floor((Math.random())*6)) + 1;
var randomNumber2 = (Math.floor((Math.random())*6)) + 1;

document.querySelector("body .dice .img1").setAttribute("src", "dice" + randomNumber1 + ".png");
document.querySelector("body .dice .img2").setAttribute("src", "dice" + randomNumber2 + ".png");

if (randomNumber1>randomNumber2) {
    document.querySelector("body h1").innerHTML = "Player-1 Wins!";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("body h1").innerHTML = "Player-2 Wins!";
}
else {
    document.querySelector("body h1").innerHTML = "Its a DRAW!";
}
