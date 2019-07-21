/**
 * Simple JQuery Count Down
 * By Hossein Badrnezhad
 * Version : 1.0.0
 * Developer Website : http://hosseinbadrnezhad.ir
 */

var countDownOptionList = [];
var _defaultOptions = {
    number: 10,
    radius: 18,
    circleX: 20,
    circleY: 20,
    removeOnEnd: true
};

function SimpleCountDown(elemnetId, options) {
    try {
        if ($("#" + elemnetId) == undefined || $("#" + elemnetId) == null) throw "Please select an element";
        if (options == undefined || options == null) {
            options = _defaultOptions;
        } else {
            options.number = options.number == undefined ? _defaultOptions.number : options.number;
            options.radius = options.radius == undefined ? _defaultOptions.radius : options.radius;
            options.circleX = options.circleX == undefined ? _defaultOptions.circleX : options.circleX;
            options.circleY = options.circleY == undefined ? _defaultOptions.circleY : options.circleY;
            options.removeOnEnd = options.removeOnEnd == undefined ? _defaultOptions.removeOnEnd : options.removeOnEnd;
        }

        var countDownId = "simpleCD_" + this.SimpleCountDown_GuidMaker();

        this.SimpleCountDown_AddOption(countDownId, options);

        var body = this.SimpleCountDown_GetCountDownHTML(options);
        body = body.replace('___SCDID___', countDownId);
        $("#" + elemnetId).wrap(body);
        $("#" + countDownId + " .countdown").css({
            "height": options.circleX * 2 + "px",
            "width": options.circleY * 2 + "px"
        });
        $("#" + countDownId + " svg").css({
            "height": options.circleX * 2 + "px",
            "width": options.circleY * 2 + "px"
        });

        $("#" + countDownId + " .countdown-number").css({
            "line-height": options.circleX * 2 + "px"
        });

        var countdownNumberElement = $("#" + countDownId + " .countdown-number");

        var countdown = options.number;
        var countdownInterval = setInterval(function () {
                countdown = countdown - 1;
                if (countdown < 0) {
                    countdown = 0;
                    try {
                        clearInterval(countdownInterval);
                        if (options.removeOnEnd)
                            $("#" + countDownId).remove();
                    } catch (ex) {
                        console.error(ex);
                    }
                }
                $(countdownNumberElement).html(countdown);
            },
            1000);


    } catch (e) {
        console.error("[SIMPLE-COUNT-DOWN] : " + e);
    }
}

this.SimpleCountDown_GuidMaker = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

this.SimpleCountDown_GetCountDownHTML = function (options) {
    return (
        "<div id='___SCDID___' class='simple-count-down'>" +
        "   <div class='countdown'>" +
        "       <div class='countdown-number'></div>" +
        "           <svg>" +
        "               <circle r='" + options.radius + "' cx='" + options.circleX + "' cy='" + options.circleY + "'></circle>" +
        "           </svg>" +
        "      </div>" +
        "   </div>" +
        "</div>");
}

this.SimpleCountDown_AddOption = function (id, options) {
    countDownOptionList.push({id: id, options: options});
}

this.SimpleCountDown_GetOption = function (id) {
    countDownOptionList.map((item, index) => {
        if (item.id == id)
            return item.options;
    })
}
