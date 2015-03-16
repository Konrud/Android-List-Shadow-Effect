;(function ($) {

    $.fn["listShadow"] = function (prop) {

        prop = $.extend({}, $.fn.listShadow.defaults, prop);

        return this.each(function (index, elem) {

            $(elem).on("scroll mousewheel", function (eventObj) {
                var $self = $(this);
                var currentPosition = $self.scrollTop();
                var top = 0;
                var bottom = this.scrollHeight - this.clientHeight;

                if (currentPosition == top || currentPosition >= bottom) {
                    $self.addClass(prop.className, prop.addSpeed, prop.addEasing, function () {
                      var timeOut =  setTimeout(function () {
                          $self.removeClass(prop.className, prop.removeSpeed, prop.removeEasing);
                          clearTimeout(timeOut);
                        }, prop.removeTimeOut);
                    });
                }

            });

        });
    };

    /// Default properties
    $.fn.listShadow.defaults = {
        addSpeed: 400,
        addEasing: "linear",
        removeSpeed: 600,
        removeEasing: "linear",
        removeTimeOut: 700,
        className: "android-list-shadow"
    };

})(jQuery);