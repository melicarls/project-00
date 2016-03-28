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
      $('.trackOne td img').eq(horseOneAt).addClass("empty");
      $('.trackOne td img').eq(horseOneAt+1).removeClass("empty");
      horseOneAt++;
    } else if (e.keyCode === 112) { //p
      $('.trackTwo td img').eq(horseTwoAt).addClass("empty");
      $('.trackTwo td img').eq(horseTwoAt+1).removeClass("empty");
      horseTwoAt++;
    } else if (e.keyCode === 109) { //m
      $('.trackThree td img').eq(horseThreeAt).addClass("empty");
      $('.trackThree td img').eq(horseThreeAt+1).removeClass("empty");
      horseThreeAt++;
    } else if (e.keyCode === 113) { //q
      $('.trackFour td img').eq(horseFourAt).addClass("empty");
      $('.trackFour td img').eq(horseFourAt+1).removeClass("empty");
      horseFourAt++;
    }
  });

  //Check for winner
  var winner;
  var pic;
  $(document).on('keypress', function(e) {
    if (($(".oneEnd").hasClass("empty")===false) && ($(".twoEnd").hasClass("empty")===true) && ($(".threeEnd").hasClass("empty")===true) && ($(".fourEnd").hasClass("empty")===true)) {
      winner = (horseOne.name);
      pic = (horseOne.horseUrl);
      horseOne.wins = horseOne.wins + 1;
      $("#oneVictories").text(horseOne.wins);
    } else if (($(".twoEnd").hasClass("empty")===false) && ($(".oneEnd").hasClass("empty")===true) && ($(".threeEnd").hasClass("empty")===true) && ($(".fourEnd").hasClass("empty")===true)) {
      winner = (horseTwo.name);
      pic = (horseTwo.horseUrl);
      horseTwo.wins = horseTwo.wins + 1;
      $("#twoVictories").text(horseTwo.wins);
    } else if (($(".threeEnd").hasClass("empty")===false) && ($(".oneEnd").hasClass("empty")===true) && ($(".twoEnd").hasClass("empty")===true) && ($(".fourEnd").hasClass("empty")===true)) {
      winner = (horseThree.name);
      pic = (horseThree.horseUrl);
      horseThree.wins = horseThree.wins + 1;
      $("#threeVictories").text(horseThree.wins);
    } else if (($(".fourEnd").hasClass("empty")===false) && ($(".oneEnd").hasClass("empty")===true) && ($(".twoEnd").hasClass("empty")===true) && ($(".threeEnd").hasClass("empty")===true)) {
      winner = (horseFour.name);
      pic = (horseFour.horseUrl);
      horseFour.wins = horseFour.wins + 1;
      $("#fourVictories").text(horseFour.wins);
    } else {
      return;
    }
    gameReset();
    displayWinner(winner, pic);
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
    numPlayers = 2;
  });

  $('.threePlayers').on('click', function(e) {
    $('.topChoice').show();
    $('.threeSetup').show();
    $('.fourSetup').hide();
    numPlayers = 3;
  });

  $('.fourPlayers').on('click', function(e) {
    $('.choiceSet').show();
    $('.threeSetup').show();
    $('.fourSetup').show();
    numPlayers = 4;
  });
//End board adjustments

//Initializes game with players' chosen preferences
  $('.submit').on('click', function(e) {
    snd.play();
    snd.currentTime=0;
    $('#selections').hide();
    $('#countDownBox').show();
    var nameOne = document.getElementById("nameEntryOne").value;
    var nameTwo = document.getElementById("nameEntryTwo").value;
    var nameThree = document.getElementById("nameEntryThree").value;
    var nameFour = document.getElementById("nameEntryFour").value;
    if (numPlayers >= 2) {
      horseOne = new MakePlayer((nameOne), "./images/Horse1.png", 0);
      horseTwo = new MakePlayer(nameTwo, "./images/Horse2.png", 0);
      playerArray.push(horseOne, horseTwo);
      $('.scoreOne').text(horseOne.name);
      $('.scoreTwo').text(horseTwo.name);
    }
    if (numPlayers >= 3) {
      horseThree = new MakePlayer(nameThree, "./images/Horse3.png", 0);
      playerArray.push(horseThree);
      $('.scoreThree').text(horseThree.name);
    }
    if (numPlayers >=4) {
      horseFour = new MakePlayer(nameFour, "./images/Horse4.png", 0);
      playerArray.push(horseFour);
      $('.scoreFour').text(horseFour.name);
    }
    return playerArray;
  });

  $('.countdown').on('click', function(e) {
    setTimeout(function() {
      $('#num').text("3");}, 500);
    setTimeout(function() {
      $('#num').text("2");}, 1500);
    setTimeout(function() {
      $('#num').text("1");}, 2500);
    setTimeout(function() {
      $('#num').text("Go!");}, 3500);
    setTimeout(function() {
      $('#countDownBox').hide();}, 4000);
  });
});
//End of document onReady


//Helper Functions
function displayWinner(win, pic) {
  $('#whoWon').show();
  $('#winnerName').text(win);
  $('#winPic').html("<img src="+pic+">");
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

//Object constructor to collect player preferences
function MakePlayer(name, horseUrl, wins) {
  this.name = name;
  this.horseUrl = horseUrl;
  this.wins=0;
}

//Variables to initialize
var numPlayers=4;
var playerArray = [];
var snd = new Audio('./bugle.wav');
