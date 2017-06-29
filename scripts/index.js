$(document).ready(function(){

  var player;
  var totalCount = 0;
  var player1Count = 0;
  var player2Count = 0;
  
  $("#playGame").show();
  $("#player1").hide();
  $("#player2").hide();
  $("#grid").hide();
  
  $("#begin").click(function(){
    $("#player1").show();
    $("#playGame").hide();
  })

  $("#1x, #1o").click(function(){
    $("#player2").show();
    $("#player1").hide();
  })

  $("#2x, #2o").click(function(){
    $("#grid").show();
    $("#player2").hide();
  })

  $("#begin").click(function(){
    $("#player1").show();
    $("#playGame").hide();
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