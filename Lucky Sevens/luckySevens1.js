function luckySevens() {
	var startingBet = document.getElementById("bet").value;
    var bet = startingBet;
    var betArr = [bet];

	
	if (bet<=0) {
	alert("Starting bet must be greater than 0");
	return false;
   }

    while (bet > 0) {
	var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var diceRoll = die1 + die2;
        if(diceRoll == 7) {
            bet += 4
        } else { 
            bet -= 1
        }
        betArr.push(bet)
    }
	
	var largest=[0];
	 //find the largest num; can also be done with Math.max(...betArr)
	for(var i=0;i<betArr.length;i++){
		var comp=(betArr[i]-largest[0])>0;
			if(comp){
			largest =[];
			largest.push(betArr[i]);
			}
	}
	
	 
	 //find the index of 'betArr'; can also be done with betArr.indexOf(Math.max(...betArr))
	 var arrIndex=[];
	 for(var i=0;i<betArr.length;i++){
		var comp=betArr[i]-largest[0]==0;
		if(comp){
		arrIndex.push(i);
		}
	 }

    var totalRolls = betArr.length;
 	
	document.getElementById("results").style.display = "block";
	document.getElementById("starting").innerText = startingBet;
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("max").innerText = largest;
	document.getElementById("rollCount").innerText = arrIndex;
	return false;
}
	