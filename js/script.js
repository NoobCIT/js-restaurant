//$('#content').append('<img src="http://cdn.dota2.com/apps/dota2/images/heroes/pudge_full.png?v=4195662?v=4195662">');
$(document).ready(function() {
  $('#content').append('<h1>Pudges Diner</h1>');
  $('#content').append('<img src="http://cdn.dota2.com/apps/dota2/images/heroes/pudge_full.png?v=4195662?v=4195662">');
  $('#content').append('<h5>The great food will surely hook you in!</h5>');
  $('#content').append('<button id="about">About Him</button>');
  $('#content').append('<button id="menu">Menu</button>');
  $('#content').append('<button id="cost">Cost</button>');

  $('#about').on("click", function() {
    $('p').remove();
    $('#content').append('<p>I am a DOTA2 Hero!</p>');
  });

  $('#menu').on("click", function() {
    $('p').remove();
    $('#content').append('<p>Rot Pot</p>');
  });

  $('#cost').on("click", function() {
    $('p').remove();
    $('#content').append('<p>Bounty Runes</p>');

  });
});
