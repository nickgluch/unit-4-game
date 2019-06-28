
$(document).ready(function () {

    //    $(window).onload(function game() {


    var randomNumber = Math.floor(Math.random() * 101)
    $('#RandomNumber').html(randomNumber);

    var win = 0;
    var lose = 0;



    var currentScore = 0;

    var currentScoreElement = $('#totalScoreNumber');
    currentScoreElement.html(0);


    function checkWin() {
        if (currentScore === randomNumber) {
            alert('You won!')
            win++;
            $("#wins").text('Wins: ' + win);

            console.log(win);

            randomNumber = Math.floor(Math.random() * 101)
            $('#RandomNumber').html(randomNumber);
            currentScore = 0;
            currentScoreElement.html(0);


        }

        if (currentScore > randomNumber) {
            alert('Lost!');
            lose++;
            $("#losses").text('Losses: ' + lose);


            randomNumber = Math.floor(Math.random() * 101)
            $('#RandomNumber').html(randomNumber);
            currentScore = 0;
            currentScoreElement.html(0);



        }
    }

    $('#ruby').click(function () {
        currentScore += 5;
        currentScoreElement.html(currentScore);
        checkWin()

        //evalutate win or loss condition
        //if match then win
        //once past number loss

    });


    $('#bluegem').click(function () {
        currentScore += 3;
        currentScoreElement.html(currentScore);
        checkWin()
    });

    $('#yellowgem').click(function () {
        currentScore += 7;
        currentScoreElement.html(currentScore);
        checkWin()
    });


    $('#emerald').click(function () {
        currentScore += 4;
        currentScoreElement.html(currentScore);
        checkWin()
    });


    //end of entire function
});