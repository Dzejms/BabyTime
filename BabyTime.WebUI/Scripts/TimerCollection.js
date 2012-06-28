var TimersCollection = function (timerNames) {
    this.timers = [];
    this.Add = function (timer) {
        this.timers.push(timer);
    };

    this.AddNewTimers = function (namesArray) {
        for (var i = 0; i < namesArray.length; i++) {
            this.Add(new Timer(namesArray[i]));
        }
    };

    if (timerNames && timerNames.length > 0) this.AddNewTimers(timerNames);

    this.Start = function () {
        for (var i = 0; i < this.timers.length; i++) {
            this.timers[i].Start();
        }
    };

    this.Clear = function () {
        for (var i = 0; i < this.timers.length; i++) {
            this.timers[i].Reset();
        }
    };

    this.Load = function () {
        var obj = JSON.parse(localStorage.getItem("timersCollection"));
        for (var i = 0; i < obj.timers.length; i++) {
            var timer = new Timer(obj.timers[i].Name, new StopWatch(obj.timers[i].stopWatch.startTime));
            this.timers.push(timer);
        }
    };

    this.Save = function () {
        localStorage.setItem("timersCollection", JSON.stringify(timersCollection));
    };
};