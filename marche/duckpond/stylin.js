console.log('yo we made it!');
var $ = function(thingy) {
  var things$cando = {
    ready: function(callback){
      document.addEventListener("DOMContentLoaded", function(){
        callback();
      })
    },

    click: function(callback){
      document.getElementById(thingy).addEventListener("click", function(){
        callback();
      })
    },



  }
  return things$cando;
}

$(document).ready(function(){
  console.log('THE DOCUMENT IS MOST READY SIRRRR');
  $('alanstyle').click(function(){
    console.log('you clicked');
    $('styler').href = './css/pond.css';
  });
  $('katiestyle').click(function(){
    console.log('you clicked');
    document.getElementById('styler').href = './css/teamkatie.css';
  });

})
