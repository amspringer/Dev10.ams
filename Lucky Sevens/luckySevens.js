function luckySevens() {
	var startingBet = document.getElementById("bet").value;
    var bet = startingBet;
 	
	//verifying user placed bet
	if (bet<=0) {
	alert("Starting bet must be greater than 0");
	return false;
	}else{
	var money = parseInt(startingBet);	
	var betArr = [];
	betArr.unshift(money);
   }
    
	//loop for playing until money is gone
	while (money > 0) {
	var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = die1 + die2;
        if(diceRoll == 7) {
            money += 4
			betArr.push(money)
        } else { 
            money -= 1
			betArr.push(money)
        }
	}
	
	//total rolls before going broke
	var totalRolls = betArr.length -1;
	//highest amount won
	var largest = Math.max(...betArr);
	//roll count at highest amount won
	var arrIndex = betArr.indexOf(largest);

	document.getElementById("results").style.display = "block";
	document.getElementById("starting").innerText = "$" + startingBet + ".00";
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("max").innerText = "$" + largest + ".00";
	document.getElementById("rollCount").innerText = arrIndex;
	
	
	console.log("Current Bet: " + money);
	console.log("Starting Bet: " + startingBet);
	console.log("All Money in Hand: " + betArr);
	console.log("Total Rolls Before Going Broke: " + totalRolls)
	console.log("Highest Amount Won: " + largest);
	console.log("Array of Idex for Highest Amount Won: " + arrIndex);
	return false;
}