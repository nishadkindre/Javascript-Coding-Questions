let rand = Math.floor(Math.random()*100 + 1)
let chance = 0;
let guess;
while(guess!=rand){
    guess = Number.parseInt(prompt("Guess the Number"));
    if (guess < rand) {
        alert("The guessed number is more than "+ guess)
        console.log("The guessed number is more than", guess)
    }
    else if (guess > rand) {
        alert("The guessed number is less than "+ guess)
        console.log("The guessed number is less than", guess)
    }
    else{
        alert("The actual number is "+ rand + ". Your score is " + (100-chance));
        console.log("The actual number is", rand, "Your score is ", (100-chance), "You took ", chance, "chances." );
    }
    chance++
}