$(document).ready(function(){//I need jQuery to run!
 
	var redNumber = Math.floor(Math.random()*12);
	var purpleNumber = Math.floor(Math.random()*12);
	var blueNumber = Math.floor(Math.random()*12);
	var greenNumber = Math.floor(Math.random()*12);

	$("#button-red").attr('value', redNumber);
	$("#button-blue").attr('value', blueNumber);

	$('.crystal-button').click(function(){

		console.log($(this).attr('value'));

	});

});