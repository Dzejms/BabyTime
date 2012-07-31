var TimersCollection = function (timerNames, $parent) {
    this.timers = [];
    this.$parent = $parent;
    this.Add = function (timer) {
        this.timers.push(timer);
    };

    this.AddNewTimers = function (namesArray, $parent) {
        for (var i = 0; i < namesArray.length; i++) {
            this.Add(new Timer(namesArray[i], null, this.$parent));
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

    this.Load = function ($parent) {
        var obj = JSON.parse(localStorage.getItem("timersCollection"));
        for (var i = 0; i < obj.timers.length; i++) {
            var timer = new Timer(obj.timers[i].Name, new StopWatch(obj.timers[i].stopWatch.startTime), $parent);
            this.timers.push(timer);
        }
    };

    this.Save = function () {
        localStorage.setItem("timersCollection", JSON.stringify(timersCollection));
    };
};