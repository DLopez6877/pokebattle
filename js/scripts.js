$(document).ready(function () {
  var cleanPikaLog = function() {
    $("#pika-log li:nth-child(7)").remove();
  };

  $(".attack-panel .btn").prop('disabled', true);

  var cleanSquirtleLog = function () {
    $("#squirtle-log li:nth-child(7)").remove();
  };

  //fight button to toggle attacks
  $("#pikachu .fight-button").click(function () {
    $("#pikachu .attack-panel").animate({opacity: 1});
    $('#pikachu .attack-panel .btn').prop('disabled', false);
  });

  $("#squirtle .fight-button").click(function () {
    $("#squirtle .attack-panel").animate({opacity: 1});
    $('#pikachu .attack-panel .btn').prop('disabled', false);
  });

  $(".attack-panel .btn").click(function() {
    $(".attack-panel").animate({opacity: 0});
    $(".attack-panel .btn").prop('disabled', true);
  });

  $("#shock").click(function () {
    $("#pika-log").prepend("<li>Pikachu used Shock!</li>");
    cleanPikaLog();
  });

  $("#pika-tackle").click(function () {
    $("#pika-log").prepend("<li>Pikachu used Tackle!</li>");
    cleanPikaLog();
  });

  $("#water-jet").click(function () {
    $("#squirtle-log").prepend("<li>Squirtle used Water Jet!</li>");
    cleanSquirtleLog();
  });

  $("#squirtle-tackle").click(function () {
    $("#squirtle-log").prepend("<li>Squirtle used Tackle!</li>");
    cleanSquirtleLog();
  });

  //run away button to pop alert that the other wins and fade out their picture
  $("#pikachu .run-away").click(function() {
    $("#pikachu img").animate({opacity: 0}, 950);
    setTimeout(function() { alert("Squirtle has won!"); }, 1000);
  });

  $("#squirtle .run-away").click(function() {
    $("#squirtle img").animate({opacity: 0}, 950);
    setTimeout(function() { alert("Pikachu has won!"); }, 1000);
  });
  //each attack or run away needs to pop info into log
});
