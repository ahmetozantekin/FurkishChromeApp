// src : http://stackoverflow.com/questions/2752349/fast-rectangle-to-rectangle-intersection
var intersectRect = function (r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
};

var game = setInterval(function () {
  var $tava = $('.logo');
  var $kafa = $('.kafa');

  if ($kafa.length === 0) {
    clearInterval(game);
    $("#result").html("<h1>GAME OVER</h1>");
  }

  $kafa.each(function() {
    var $flake = $(this);
    var _furkan = {
      left: $flake.offset().left,
      top: $flake.offset().top,
      right: $flake.offset().left + 40,
      bottom: $flake.offset().top + 56
    };

    var _tava = {
      left: $tava.offset().left,
      top: $tava.offset().top,
      right: $tava.offset().left + 100,
      bottom: $tava.offset().top + 48
    };


    if (intersectRect(_furkan, _tava)) {
      $(this).remove();
    }
  });
}, 100);

var KafaAt = function () {
  var $kafa = $();

  var createkafa = function () {
    var qt = 50;
    for (var i = 0; i < qt; ++i) {
      var $gaffa = $('<div class="kafa" id="' + i + '"></div>');
      $gaffa.css({
        'left': (Math.random() * $('#site').width()) + 'px',
        'top': (- Math.random() * $('#site').height()) + 'px'
      });
      $kafa = $kafa.add($gaffa);
    }
    $('#snowZone').prepend($kafa);
  };

  var kafaYagmur = function() {
    $kafa.each(function() {
      var singleAnimation = function($flake) {
        $flake.animate({
          top: "500px",
          opacity : "0",
        }, Math.random()*-4000 + 5000, function () {
          $flake.css({
            'left': (Math.random() * $('#site').width()) + 'px',
            'top': (- Math.random() * $('#site').height()) + 'px',
            'opacity': 1
          });
          singleAnimation($flake);
        });
      };

      singleAnimation($(this));
    });
  };

  createkafa();
  kafaYagmur();
};

KafaAt();

$('#site').mousemove(function(e) {
  $('.logo').offset({
    left: e.pageX - 50,
    top: e.pageY - 24
  });
});
