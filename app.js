$(document).ready( function() {

  var interval = setInterval(getTime, 1000);

});


var getTime = function(){
  var now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  $('#clock').text(hours + ":" + minutes + ":" + seconds);
}

// $('h2').click(function (){
//   if ($('h2').attr('class') == 'brightred'){
//     $('h2').attr('class', '');
//   } else {
//     $('h2').attr('class', 'brightred');
//   }
// });
