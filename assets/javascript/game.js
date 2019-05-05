$(document).ready(function(){//I need jQuery to run!
	var totalScore, targetScore, redNumber, yellowNumber, blueNumber, greenNumber;
    var targetScore;
    var totalScore = 0;
    var wims = 0;
    var losses = 0;
    var redNumber;
    var yellowNumber;
    var blueNumber;
    var greenNumber;


	var resetGame = function(){
		targetScore = Math.floor(Math.random()*101 + 19);
		totalScore = 0;
		redNumber = Math.floor(Math.random()*12);
		yellowNumber = Math.floor(Math.random()*12);
		blueNumber = Math.floor(Math.random()*12);
		greenNumber = Math.floor(Math.random()*12);
	}

	resetGame();
 
	

	$("#button-red").attr('value', redNumber);
	$("#button-yellow").attr('value', yellowNumber);
	$("#button-blue").attr('value', blueNumber);
	$("#button-green").attr('value', greenNumber);


	$('.crystal-button').click(function(){
		current += parseInt($(this).attr('value'));
		console.log(current);
	});



});