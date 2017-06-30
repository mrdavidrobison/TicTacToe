$(document).ready(function(){

  var player1;
  var player2;
  var totalCount = 0;
  var turn = player1;
  
  // declare the first page 
  $("#grid").hide();
  $("#playGame").show();
  $("#player1").hide();
  $("#X").hide();
  $("#O").hide();
  
  // declare the second page after "begin" button is clicked
  $("#begin").click(function(){
    $("#player1").show();
    $("#playGame").hide();
    // declare the third page after either "X's" or "O's" buttons are clicked
    $("#1x, #1o").click(function(){
      $("#grid").show();
      $("#player1").hide();
    })
  })

  // assign X's and O's to player 1 and 2
  $("#1x").click(function(){
    player1 = "X";
    player2 = "O";
  })

  $("#1o").click(function(){
    player1 = "O";
    player2 = "X";
  })

  // change squares to X's and O's
  $("#1").click(function(){
      $("#1").html(player1);
  
  })

})