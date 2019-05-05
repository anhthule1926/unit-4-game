$(document).ready(function(){
var totalScore, targetScore, redNumber, yellowNumber, blueNumber, greenNumber;
var targetScore;
var totalScore = 0;
var wins = 0;
var losses = 0;
var red;
var yellow;
var green;
var blue;



	function newNumbers() {
		targetScore = Math.floor(Math.random() * 101 + 19);
		red = Math.floor(Math.random() * 12);
		yellow = Math.floor(Math.random() * 12);
		green = Math.floor(Math.random() * 12);
		blue = Math.floor(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#targetScore").text(targetScore);
		$("#totalScore").text(totalScore);
		$("#red").attr("value", red);
		$("#yellow").attr("value", yellow);
		$("#green").attr("value", green);
		$("#blue").attr("value", blue);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");
    }

	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".crystals").on("click", function() {
		if (totalScore >= targetScore) {
			return;
		}

		var value = $(this).attr("value");
		value = parseInt(value);
		totalScore += value;
		$("#totalScore").text(totalScore);

		if (totalScore === targetScore) {
			youWin();
		} else if (totalScore > targetScore) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
        newGame();
    
	});

});