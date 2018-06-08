
$(document).ready(function () {



    // create variables for wins, losses, and score
    var wins = 0;
    var losses = 0;
    var score = 0;
    var targetNumber = Math.floor(Math.random() * 101) + 19;



    // assign 4 random number between 1- 12 to each crystal
    var hiddenValue1 = Math.floor(Math.random() * 12) + 1;
    var hiddenValue2 = Math.floor(Math.random() * 12) + 1;
    var hiddenValue3 = Math.floor(Math.random() * 12) + 1;
    var hiddenValue4 = Math.floor(Math.random() * 12) + 1;



    // give values to images
    $("#crystal1").val(hiddenValue1);
    $("#crystal2").val(hiddenValue2);
    $("#crystal3").val(hiddenValue3);
    $("#crystal4").val(hiddenValue4);

    function reset() {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        hiddenValue1 = Math.floor(Math.random() * 12) + 1;
        hiddenValue2 = Math.floor(Math.random() * 12) + 1;
        hiddenValue3 = Math.floor(Math.random() * 12) + 1;
        hiddenValue4 = Math.floor(Math.random() * 12) + 1;
    }

    $(".image").on("click", function () {
        var number = $(this).val();
        var num = parseInt(number);




        $("#score").text(score += num);

        if (score > targetNumber) {
            losses++;
            console.log("loss");
            return score = 0;
            // reset();
            // return targetNumber = Math.floor(Math.random() * 101) + 19;
        }



        if (score === targetNumber) {
            wins++;
            console.log("win");
            return score = 0;
        }

        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";

        document.querySelector("#win-tracker").innerHTML = html;
       

    })


    // combine values of crystal continually

    // add hidden values to make score in score div
    // $("#score").append(score);

    // Create random target number that player will need to match
    // var targetNumber = Math.floor(Math.random() * 101) + 19;

    console.log(targetNumber);
    console.log(score);

    // Assign target number to div 
    $("#number-match-box").text(targetNumber);





    // Create on click functions in jquery with if statements if after a click the score is equal to target add win
    // else keep going else if over add to loose

})