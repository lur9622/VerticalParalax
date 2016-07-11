$( document ).ready(function() {
	//

	$.fn.isOnScreen = function(){
	  var win = $(window);

	  var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	  };
	  viewport.right = viewport.left + win.width();
	  viewport.bottom = viewport.top + win.height();

	  var bounds = this.offset();
	  bounds.right = bounds.left + this.outerWidth();
	  bounds.bottom = bounds.top + this.outerHeight();

	  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};
    var $win = $(window);
    function calcStartingPoint($el) {
      return $win.scrollTop() + $win.height() - $el.offset().top;
    }

    function calcStopingPoint(elHeight) {
      return elHeight + $win.height();
    }

    function parallax() {
		console.log('a');
      if ($win.width() < 1024) {return;}

      $('.paralaxImg').each(function () {
        var $el = $(this);

        if ($el.isOnScreen()) {
          var elHeight = $el.height();
          var diffHor = 80;
          var diffVer = 80;

          var perc = calcStartingPoint($el) / calcStopingPoint(elHeight);
          var moveHor = Math.floor(perc * diffHor);
          var moveVer = Math.floor(perc * diffVer);
          var dir = $el.data('prxDir');

          if (dir === "L") {
            $el.css('transform', 'translate3d(' + -moveHor + 'px, 0px, 0px)');
          } else if(dir === "R") {
            $el.css('transform', 'translate3d(' + -(diffHor - moveHor) + 'px, 0px, 0px)');
          } else if (dir === "T") {
            $el.css('transform', 'translate3d(0px,  ' + -moveVer + 'px, 0px)');
          } else if (dir === "D") {
            $el.css('transform', 'translate3d(0px,  ' + -(diffVer - moveVer) + 'px, 0px)');
          }
        }
      });
    }
	$win.scroll(parallax);
    $win.resize(parallax);
    parallax();
});