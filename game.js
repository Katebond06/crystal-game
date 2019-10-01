// computer gives a random number;
// asign value to each crystal;
// user clicks on the crystal;
// the total score updates;
// check if user wins or losses
// random numbers under crystals are going to update, after the game ends (user wins/losses);
// wins and losses score updates;

$(document).ready(function() {
  var random = Math.floor(Math.random() * 101) + 19;
  $("#random").text(random);

  var crystal1 = Math.floor(Math.random() * 11) + 1;
  var crystal2 = Math.floor(Math.random() * 11) + 1;
  var crystal3 = Math.floor(Math.random() * 11) + 1;
  var crystal4 = Math.floor(Math.random() * 11) + 1;

  var wins = 0;
  var losses = 0;
  var score = 0;

  $("#wins").text(wins);
  $("#losses").text(losses);
  $("#score").text(score);

  function reset() {
    random = Math.floor(Math.random() * 101) + 19;
    $("#random").text(random);

    crystal1 = Math.floor(Math.random() * 11) + 1;
    crystal2 = Math.floor(Math.random() * 11) + 1;
    crystal3 = Math.floor(Math.random() * 11) + 1;
    crystal4 = Math.floor(Math.random() * 11) + 1;

    score = 0;
    $("#score").text(score);
  }

  $("#img01").on("click", function() {
    score = score + crystal1;
    $("#score").text(score);
    checkWinsLosses();
  });

  $("#img02").on("click", function() {
    score = score + crystal2;
    $("#score").text(score);
    checkWinsLosses();
  });

  $("#img03").on("click", function() {
    score = score + crystal3;
    $("#score").text(score);
    checkWinsLosses();
  });

  $("#img04").on("click", function() {
    score = score + crystal4;
    $("#score").text(score);
    checkWinsLosses();
  });

  // total score has to match with random number the computer gave us - user wins;
  // if the total score isn't (more than) random number - user losses;

  function checkWinsLosses() {
    if (score === random) {
      wins++;
      $("#wins").text(wins);
      reset();
    } else if (score > random) {
      losses++;
      $("#losses").text(losses);
      reset();
    }
  }
});
