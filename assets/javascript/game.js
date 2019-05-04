$(document).ready(function(){//I need jQuery to run!
    var targetScore;
    var totalScore = 0
    var wins = 0;
    var losses = 0;
    var redNum;
    var blueNum;
    var greenNum;
    var yelloowNum;
    
    function(){
        var targetScore = Math.floor(Math.random() * (120 - 19)) +19;
	    var redNumber = Math.floor(Math.random()*12);
	    var yellowNumber = Math.floor(Math.random()*12);
	    var blueNumber = Math.floor(Math.random()*12);
	    var greenNumber = Math.floor(Math.random()*12);
    }
	$("#button-red").attr('value', redNumber);
	$("#button-blue").attr('value', blueNumber);
	$("#button-green").attr('value', greenNumber);
	$("#button-yellow").attr('value', yellowNumber);

	$('.crystal-button').click(function(){

		console.log($(this).attr('value'));4n

    for(var i = 0; 1 < 4; i++){
        var crystal = $("<div>");

        $(".cystals").crystals();
        console.log(Crystal)
    }

    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#total").html(totalScore);

	});

});

