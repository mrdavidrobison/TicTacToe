$(document).ready(function(){

  var player1;
  var player2;
  var turn=true;

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

  // switch turns after each click and replace content with player sign
  $("#1").click(function(){
    
    if (turn === true){
      $("#1").html(player1);
      $("h2").html("Player 2 go!");
      turn=false;
    } else {
      $("#1").html(player2);
      $("h2").html("Player 1 go!");
      turn=true;
    }    
  })

  $("#2").click(function(){
    
    if (turn === true){
      $("#2").html(player1);
      $("h2").html("Player 2 go!");
      turn=false;
    } else {
      $("#2").html(player2);
      $("h2").html("Player 1 go!");
      turn=true;
    }    
  })

  $("#3").click(function(){
    
    if (turn === true){
      turn=false;
      $("#3").html(player1);
      $("h2").html("Player 2 go!");
    } else {
      turn=true;
      $("#3").html(player2);
      $("h2").html("Player 1 go!");
    }    
  })

  $("#4").click(function(){
    
    if (turn === true){
      turn=false;
      $("#4").html(player1);
      $("h2").html("Player 2 go!");
    } else {
      turn=true;
      $("#4").html(player2);
      $("h2").html("Player 1 go!");
    }    
  })

  $("#5").click(function(){
    
    if (turn === true){
      turn=false;
      $("#5").html(player1);
      $("h2").html("Player 2 go!");
    } else {
      turn=true;
      $("#5").html(player2);
      $("h2").html("Player 1 go!");
    }    
  })

  $("#6").click(function(){
    
    if (turn === true){
      turn=false;
      $("#6").html(player1);
      $("h2").html("Player 2 go!");
    } else {
      turn=true;
      $("#6").html(player2);
      $("h2").html("Player 1 go!");
    }    
  })

  $("#7").click(function(){
    
    if (turn === true){
      turn=false;
      $("#7").html(player1);
      $("h2").html("Player 2 go!");
    } else {
      turn=true;
      $("#7").html(player2);
      $("h2").html("Player 1 go!");
    }    
  })

  $("#8").click(function(){
    
    if (turn === true){
      turn=false;
      $("#8").html(player1);
      $("h2").html("Player 2 go!");
    } else {
      turn=true;
      $("#8").html(player2);
      $("h2").html("Player 1 go!");
    }    
  })

  $("#9").click(function(){
    
    if (turn === true){
      turn=false;
      $("#9").html(player1);
      $("h2").html("Player 2 go!");
    } else {
      turn=true;
      $("#9").html(player2);
      $("h2").html("Player 1 go!");
    }    
  })
})