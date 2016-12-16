(function dhscrolltabs() {
  var controller = function () {
    this.tabs;
    var scrollBarWidths = 300;
    var widthOfList = function () {
      var itemsWidth = 0;
      $('.list li').each(function () {
        var itemWidth = $(this).outerWidth();
        itemsWidth += itemWidth;
      });
      return itemsWidth;
    };
    var getLeftPosi = function () {
      return $('.list').position().left;
    };
    var reAdjust = function () {
      $('.scroller-right').fadeIn('slow');
      $('.scroller-left').fadeOut('slow');
      $('.list').animate({
        left: "0px"
      }, 'slow');
    };
    reAdjust();
    $(window).on('resize', function (e) {
      reAdjust();
    });
    $('.scroller-right').click(function () {
      $('.scroller-left').fadeIn('slow');
      $('.list').animate({
        left: "-=" + scrollBarWidths + "px"
      }, 'slow', function () {
        if (($('.wrapper').width()) > (widthOfList() + getLeftPosi())) {
          $('.list').animate({
            left: (-widthOfList() + $('.wrapper').width()) + "px"
          }, 'slow');
          $('.scroller-right').hide();
        }
      });
    });
    $('.scroller-left').click(function () {
      $('.scroller-right').fadeIn('slow');
      $('.list').animate({
        left: "+=" + scrollBarWidths + "px"
      }, 'slow', function () {
        if (getLeftPosi() > 0) {
          $('.list').animate({
            left: "0px"
          }, 'slow');
          $('.scroller-left').hide();
        }
      });
    });
  };
  var scrolltabs = {
    restrict: 'E',
    templateUrl: 'http://localhost:3000/web/common/scrolltabs/index.html',
    bindings: {tabs: '='},
    controllerAs: 'dhscrolltabs',
    controller: controller
  };
  headerModule = angular.module('dhscrolltabs', ['ui.router'])
    .component('dhscrolltabs', scrolltabs);
})();