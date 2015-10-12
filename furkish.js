var _kafa = 100;
var cache = {};
$("#best").html(localStorage.getItem("_kafaPoint") || 0);

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
    cache.end = new Date();

    clearInterval(game);

    var i = (cache.end.getTime() - cache.start.getTime());
    var s = i / 1000;
    var p = parseInt(s);

    var point = parseInt(_kafa / p);
    $("#result").html("<h1>GAME OVER</h1></br><h2>#" + point + "</h2>");

    var oldPoint = localStorage.getItem("_kafaPoint") || 0;
    var r = point > oldPoint ? localStorage.setItem("_kafaPoint", point) : 0;
  }

  $kafa.each(function() {
    var $flake = $(this);

    if (intersectRect({
      left: $flake.offset().left,
      top: $flake.offset().top,
      right: $flake.offset().left + 40,
      bottom: $flake.offset().top + 56
    }, {
      left: $tava.offset().left,
      top: $tava.offset().top,
      right: $tava.offset().left + 100,
      bottom: $tava.offset().top + 48
    })) {
      $flake.remove();
    }
  });
});

var KafaAt = function () {
  cache.start = new Date();

  var $kafa = $();

  var createkafa = function () {
    for (var i = 0; i < _kafa; ++i) {
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
        }, Math.random() *- 4000 + 5000, function () {
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
