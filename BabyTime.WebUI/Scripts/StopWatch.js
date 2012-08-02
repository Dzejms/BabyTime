//new StopWatch({startTime: new Date(time)});
StopWatch = Backbone.Model.extend({
    initialize: function() {

    },
    defaults: function() {
        startTime: new Date();
    },
    resetTime: function() {
        this.set({startTime: new Date()});
    },
    getFormattedTime: function() {
        var diff = new Date() - this.get("startTime");
        var t = this.secondsToTime(diff / 1000);
        return t.h + ':' + t.m + ':' + t.s;
    },
    secondsToTime: function(secs) {
        var obj = {};
        var hours = Math.floor(secs / (60 * 60));

        var divisorForMinutes = secs % (60 * 60);
        var minutes = Math.floor(divisorForMinutes / 60);

        var divisorForSeconds = divisorForMinutes % 60;
        var seconds = Math.ceil(divisorForSeconds);


        obj.h = hours < 10 ? "0" + hours : hours;
        obj.m = minutes < 10 ? "0" + minutes : minutes;
        obj.s = seconds < 10 ? "0" + seconds : seconds;

        if (obj.s == 60) {
            obj.s = "00";
            obj.m++;
        }
        // Add unit tests so 00:01:60 can't happen
        return obj;
    }
});