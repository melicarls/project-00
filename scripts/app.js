console.log("Script is linked!");

$(document).on("ready", function() {
  $('#whoWon').hide();
  $('#countDownBox').hide();

var horseOneAt=0;
var horseTwoAt=0;
var horseThreeAt=0;
var horseFourAt=0;

//Player move function
  $(document).on('keypress', function(e) {
    if (e.keyCode === 122) { //z
      console.log("Player one pressed.");
      $('.trackOne td img').eq(horseOneAt).addClass("empty");
      $('.trackOne td img').eq(horseOneAt+1).removeClass("empty");
      horseOneAt++;
    } else if (e.keyCode === 112) { //p
      console.log("Player one pressed.");
      $('.trackTwo td img').eq(horseTwoAt).addClass("empty");
      $('.trackTwo td img').eq(horseTwoAt+1).removeClass("empty");
      horseTwoAt++;
    } else if (e.keyCode === 109) { //m
      console.log("Player three pressed.");
      $('.trackThree td img').eq(horseThreeAt).addClass("empty");
      $('.trackThree td img').eq(horseThreeAt+1).removeClass("empty");
      horseThreeAt++;
    } else if (e.keyCode === 113) { //q
      console.log("Player four pressed.");
      $('.trackFour td img').eq(horseFourAt).addClass("empty");
      $('.trackFour td img').eq(horseFourAt+1).removeClass("empty");
      horseFourAt++;
    }
  });

  //Check for winner
  var winner;
  $(document).on('keypress', function(e) {
    if (($(".oneEnd").hasClass("empty")===false) && ($(".twoEnd").hasClass("empty")===true) && ($(".threeEnd").hasClass("empty")===true) && ($(".fourEnd").hasClass("empty")===true)) {
      alert("Player one wins!");
      winner = "Player One";
    } else if (($(".twoEnd").hasClass("empty")===false) && ($(".oneEnd").hasClass("empty")===true) && ($(".threeEnd").hasClass("empty")===true) && ($(".fourEnd").hasClass("empty")===true)) {
      alert("Player two wins!");
      winner = "Player Two";
    } else if (($(".threeEnd").hasClass("empty")===false) && ($(".oneEnd").hasClass("empty")===true) && ($(".twoEnd").hasClass("empty")===true) && ($(".fourEnd").hasClass("empty")===true)) {
      alert("Player three wins!");
      winner = "Player Three";
    } else if (($(".fourEnd").hasClass("empty")===false) && ($(".oneEnd").hasClass("empty")===true) && ($(".twoEnd").hasClass("empty")===true) && ($(".threeEnd").hasClass("empty")===true)) {
      alert("Player four wins!");
      winner = "Player Four";
    } else {
      return;
    }
    $('#whoWon').show();
    horseOneAt=0;
    horseTwoAt=0;
    horseThreeAt=0;
    horseFourAt=0;
  });

  $('.reset').on('click', function(e) {
    gameReset();
    horseOneAt=0;
    horseTwoAt=0;
    horseThreeAt=0;
    horseFourAt=0;
  });

//Adjust board depending on number of players
  $('.twoPlayers').on('click', function(e) {
    $('.bottomChoice').hide();
    $('.threeSetup').hide();
    $('.fourSetup').hide();
  });

  $('.threePlayers').on('click', function(e) {
    $('.topChoice').show();
    $('.threeSetup').show();
    $('.fourSetup').hide();
  });

  $('.fourPlayers').on('click', function(e) {
    $('.choiceSet').show();
    $('.threeSetup').show();
    $('.fourSetup').show();
  });
//End board adjustments

  $('.submit').on('click', function(e) {
    $('#selections').hide();
    $('#countDownBox').show();
  });

  $('.countdown').on('click', function(e) {
    setTimeout(function() {
      $('#num').text("3");}, 1000);
    setTimeout(function() {
      $('#num').text("2");}, 2000);
    setTimeout(function() {
      $('#num').text("1");}, 3000);
    setTimeout(function() {
      $('#num').text("Go!");}, 4000);
    setTimeout(function() {
      $('#countDownBox').hide();}, 4500);
  });
});

function displayWinner(win) {
  $('#whoWon').show();
  $('#whoWon').append("<h1>" + win + "</h1>");
}

function gameReset () {
  $('.cell').addClass("empty");
  $('.start').removeClass("empty");
  $('#whoWon').hide();
  horseOneAt=0;
  horseTwoAt=0;
  horseThreeAt=0;
  horseFourAt=0;
}

var name;
var type;
var horseUrl;
var skill;

//Object constructor to collect player preferences
function MakePlayer(name, type, horseUrl, skill) {
  name = "";
  type = "";
  horseUrl = "../images/Horse1.png";
  skill = "";
}
