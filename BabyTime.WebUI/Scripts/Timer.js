var Timer = function (name, sw, $tb) {
    this.Name = name || "Other";
    this.stopWatch = sw || new StopWatch();
    var $textBox = $tb || $("#" + this.Name + "TextBox");
    var $button = $textBox.siblings(".startbutton");

    var interval = setInterval(this.ShowTime, 100);

    $button.click(function (event) {
        var self = this;
        self.stopWatch.ResetTime();
    });

    this.ShowTime = function () {
        $textBox.val(this.stopWatch.GetFormattedTime());
    };

    this.Rename = function (newName) {
        $textBox.attr("name", newName + "TextBox");
        $textBox.attr("id", newName + "TextBox");
        $button.attr("name", newName + "Button");
        $button.attr("id", newName + "Button");
        this.Name = newName;
    };
};

var TimersCollection = function (timerNames) {
    this.timers = timerNames ? this.AddNewTimers(timerNames) : [];

    this.Add = function (timer) {
        this.timers.push(timer);
    };

    this.ClearTimers = function () {

    };

    this.AddNewTimers = function (namesArray) {
        for (var i = 0; i < namesArray.length(); i++) {
            this.Add(new Timer(namesArray[i]));
        }
    };
};
