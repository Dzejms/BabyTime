var Timer = function (name, sw, $tb) {
    this.Name = name || "Other";
    this.stopWatch = sw || new StopWatch();
    var $textBox = $tb || $("#" + this.Name + "TimerTextBox");
    var $button = $textBox.siblings(".startbutton");
    var self = this;

    $button.click(function (event) {
        self.Reset();
        event.preventDefault();
    });

    this.Reset = function () {
        this.stopWatch.ResetTime();
        timersCollection.Save();
    };

    this.ShowTime = function () {
        $textBox.text(self.stopWatch.GetFormattedTime());
    };

    this.Rename = function (newName) {
        $textBox.attr("name", newName + "TimerTextBox");
        $textBox.attr("id", newName + "TimerTextBox");
        $button.attr("name", newName + "Button");
        $button.attr("id", newName + "Button");
        this.Name = newName;
    };

    this.Start = function () {
        setInterval(self.ShowTime, 100);
    };

    this.Start();
};
