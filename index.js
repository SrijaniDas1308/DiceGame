// -----------------------------PLATER 1 DICE

// Generate random numbers
var random1 = Math.floor(Math.random()*6)+1;

// Binding generated random numbers to file name
var randomDice1 = "dice"+random1+".png";
var randomImg1 = "./images/"+randomDice1;

// Changing src string for player1
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1);

// -----------------------------PLATER 2 DICE

// Generate random numbers
var random2 = Math.floor(Math.random()*6)+1;

// Binding generated random numbers to file name
var randomDice2 = "dice"+random2+".png";
var randomImg2 = "./images/"+randomDice2;

// Changing src string for player2
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2);

// -----------------------------GAME RULES

if (random1>random2)
{
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins"
}
else if (random1<random2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆"
}
else
{
    document.querySelector("h1").innerHTML = "🏆 It's a Tie 🏆"
}