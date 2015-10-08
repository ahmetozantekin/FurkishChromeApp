
        function KafaAt() {
            var $kafa = $(),
                createkafa = function () {
                    var qt = 100;
                    for (var i = 0; i < qt; ++i) {
                        var $gaffa = $('<div class="kafa"></div>');
                        $gaffa.css({
                            'left': (Math.random() * $('#site').width()) + 'px',
                            'top': (- Math.random() * $('#site').height()) + 'px'
                        });
                        $kafa = $kafa.add($gaffa);
                    }
                    $('#snowZone').prepend($kafa);
                },
                kafaYagmur = function() {
                    $kafa.each(function() {
                        var singleAnimation = function($flake) {
                            $flake.animate({
                                top: "500px",
                                opacity : "0",
                            }, Math.random()*-4000 + 5000, function(){
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
        }
        KafaAt();


        $('#site').mousemove(function(e) {
        $('.logo').offset({
            left: e.pageX,
            top: e.pageY + 20
        });
    });
