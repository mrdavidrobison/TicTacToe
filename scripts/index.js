$(document).ready(function(){

  var player1;
  var player2;
  var totalCount = 0;
  var player1Count = 0;
  var player2Count = 0;
  
  $("#playGame").show();
  $("#player1").hide();
  $("#grid").hide();
  
  $("#begin").click(function(){
    $("#player1").show();
    $("#playGame").hide();
  })

  $("#1x, #1o").click(function(){
    $("#grid").show();
    $("#player1").hide();
    if ($("#1x").click() === true){
      player1 = "X";
      player2 = "O";
    } else {
      player1 = "O";
      player2 = "X";
    }
  })

  $("#begin").click(function(){
    $("#player1").show();
    $("#playGame").hide();
  })

  $("#x").click(function(){

  })

  $("#1, #2, #3, #4, #5, #6, #7, #8, #9").click(function(){

  })

})