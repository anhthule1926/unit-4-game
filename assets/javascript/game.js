$(document).ready(function(){
var totalScore, targetScore, redNumber, yellowNumber, blueNumber, greenNumber;
var targetScore;
var totalScore = 0;
var wins = 0;
var losses = 0;
var redNumber;
var yellowNumber;
var greenNumber;
var blueNumber;



	function newNumbers() {
		magicNumber = Math.floor(Math.random() * 101 + 19);
		redNumber = Math.floor(Math.random() * 12);
		yellowNumber = Math.floor(Math.random() * 12);
		greenNumber = Math.floor(Math.random() * 12);
		blueNumber = Math.floor(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#targetScore").text(targetScore);
		$("#totalScore").text(totalScore);
		$("#redNumber").attr("value", redNumber);
		$("#yellowNumber").attr("value", yellowNumber);
		$("#greenNumber").attr("value", greenNumber);
		$("#blueNumber").attr("value", blueNumber);
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