var location = 3 ;
var location = 4 ;
var location = 5 ;
var guess;
var hits =0;
var guesses =0;
var isSunk = false;

// game logic 
while (isSunk == false) {
    guess = prompt("Ready, Aim , Fire");
    
    if(guess < 0 || guess > 6){
        alert("Enter a valid Number");
    } else{
        guesses += 1;

        if(guess == location1 || guess == location2 || guess == location3) {
            hits +=  1;

            if(hits ==3) {
                isSunk = true;
                alert("you die in my ship hahahaha");
            }
        }else {
            alert("Miss!");
        }
    }
}
var stats = "You Used" + guesses + "hits." + "Your accuracy is " + (3/guesses) * 100;
alert("stats")
