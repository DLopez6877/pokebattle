$(document).ready(function () {
  var cleanPikaLog = function() {
    $("#pika-log li:nth-child(7)").remove();
  };

  var cleanSquirtleLog = function () {
    $("#squirtle-log li:nth-child(7)").remove();
  };

  //fight button to toggle attacks
  $("#pikachu .fight-button").click(function () {
    $("#pikachu .attack-panel").show();
  });

  $("#squirtle .fight-button").click(function () {
    $("#squirtle .attack-panel").show();
  });

  $(".attack-panel .btn").click(function() {
    $(".attack-panel").hide();
  });

  $('#shock').click(function () {
    $("#pika-log").prepend("<li>Pikachu used Shock!</li>");
    cleanPikaLog();
  });

  $('#pika-tackle').click(function () {
    $("#pika-log").prepend("<li>Pikachu used Tackle!</li>");
    cleanPikaLog();
  });

  $('#water-jet').click(function () {
    $("#squirtle-log").prepend("<li>Squirtle used Water Jet!</li>");
    cleanSquirtleLog();
  });

  $('#squirtle-tackle').click(function () {
    $("#squirtle-log").prepend("<li>Squirtle used Tackle!</li>");
    cleanSquirtleLog();
  });

  //run away button to pop alert that the other wins and fade out their picture

  //each attack or run away needs to pop info into log
});
