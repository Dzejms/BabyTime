var Timer = function (name, sw, $tb) {
    this.Name = name || "Other";
    this.stopWatch = sw || new StopWatch();
    var $textBox = $tb || $("#" + this.Name + "TimerTextBox");
    var $button = $textBox.siblings(".startbutton");
    var self = this;

    $button.click(function (event) {
        self.stopWatch.ResetTime();
    });

    this.ShowTime = function () {
        $textBox.val(self.stopWatch.GetFormattedTime());
    };

    this.Rename = function (newName) {
        $textBox.attr("name", newName + "TimerTextBox");
        $textBox.attr("id", newName + "TimerTextBox");
        $button.attr("name", newName + "Button");
        $button.attr("id", newName + "Button");
        this.Name = newName;
    };
    setInterval(self.ShowTime   , 100);
};

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

    this.ClearTimers = function () {

    };

};
