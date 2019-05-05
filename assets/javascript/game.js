$(document).ready(function(){//I need jQuery to run!
    var targetScore, totalScore, red, yellow, blue, green;

    var randNumber = Math.floor(Math.random() * 120 + 19);
    $('#randNum').html(randNumber);

    //each crystal has a hidden value i.e. random number between1 and 12
    var red = Math.floor(Math.random() * 12) + 1;
    var green = Math.floor(Math.random() * 12) + 1;
    var yellow = Math.floor(Math.random() * 12) + 1;
    var blue = Math.floor(Math.random() * 12) + 1;

    //player clicks the crystals to display value to totScore
    var wins = 0; //#wins
    var losses = 0;  //#losses

    var totalScore = 0;
    $('#totalScore').text(totalScore);

    function win() {
        wins = wins + 1;
        $('#wins').text(wins);
         reset();
    }

  