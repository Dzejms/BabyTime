var StopWatch = function (time) {
    this.startTime = time ? new Date(time) : new Date();
    var obj = { "h": 0, "m": 0, "s": 0 };
    
    this.GetFormattedTime = function () {
        var diff = new Date() - this.startTime;
        var t = this.secondsToTime(diff / 1000);
        
        return t.h + ':' + t.m + ':' + t.s;
    },
    this.secondsToTime = function (secs) {
        var hours = Math.floor(secs / (60 * 60));

        var divisorForMinutes = secs % (60 * 60);
        var minutes = Math.floor(divisorForMinutes / 60);

        var divisorForSeconds = divisorForMinutes % 60;
        var seconds = Math.ceil(divisorForSeconds);
        
        
        obj.h = hours < 10 ? "0" + hours : hours,
        obj.m = minutes < 10 ? "0" + minutes : minutes,
        obj.s = seconds < 10 ? "0" + seconds : seconds

        if (obj.s == 60) {
            obj.s = "00";
            obj.m++;
        }
        return obj;
    };
};
