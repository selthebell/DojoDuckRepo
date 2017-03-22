// lets make this interactive!
// $(document).ready(function() { do the things here! })

var $ = function (thingy) {

  var stuffthingycando = {
          ready:  function(callback) {
            document.addEventListener('DOMContentLoaded', function (){
              callback();
            })
          },

          click: function(callback) {
            document.getElementById(thingy).addEventListener('click', function() {
              callback();
            })
          }
  };

  return stuffthingycando;

}


$(document).ready(function(){
  console.log('the document is ready!');
  document.getElementById('styler').href = './css/teamkatie.css';

  $('katiestyle').click(function(){
    document.getElementById('styler').href = './css/teamkatie.css';
  });

  $('alanstyle').click(function(){
    document.getElementById('styler').href = './css/pond.css';
  });

  $('mikestyle').click(function(){
    document.getElementById('styler').href = './css/teammike.css';
  });

  $('none').click(function(){
    document.getElementById('styler').href = './css/none.css';
  })

});
