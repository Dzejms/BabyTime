FixName = function (name) {
    name = name.replace(/[^a-zA-Z 0-9]+/g,'');
    return name.replace(' ', '');
};

InsertNewTimerHtml = function(name, label, $parent) {
    var html = '<form method="POST" action="" id="' + name + 'Timer">';
    html += '<div class="label" contenteditable="true" id="' + name + 'TimerLabel">' + label + '</div>';
    html += '<div class="timeandbutton"><span class="timerDisplay" id="' + name + 'TimerTextBox" data-fromTime=""></span>';
    html += '<button name="' + name + 'Button" id="' + name + 'Button" class="startbutton"></button></div>';
    html += '</form>';
    $parent.append(html);
};

var Timer = function (name, sw, $parent) {
    this.LabelText = name || "Other";
    this.Name = FixName(name) || "Other";
    this.stopWatch = sw || new StopWatch();

    InsertNewTimerHtml(this.Name, this.LabelText, $parent);

    var $textBox = $parent.find("#" + this.Name + "TimerTextBox");
    var $button = $textBox.siblings(".startbutton");
    var $label = $textBox.parent().siblings(".label");
    var self = this;

    $button.on("click", function (event) {
        self.Reset();
        event.preventDefault();
    });


    $label.on("blur", function (event) {
        self.Rename($label.text());
    });

    this.Reset = function () {
        this.stopWatch.ResetTime();
        timersCollection.Save();
    };

    this.ShowTime = function () {
        $textBox.text(self.stopWatch.GetFormattedTime());
    };

    this.Rename = function (newName) {
        name = FixName(newName);
        $textBox.attr("id", name + "TimerTextBox");
        $button.attr("name", name + "Button");
        $button.attr("id", name + "Button");
        this.LabelText = newName;
        this.Name = name;
        timersCollection.Save();
    };

    this.BindToElements = function () {
        $textBox = $("#" + this.Name + "TimerTextBox");
        $button = $textBox.siblings(".startbutton");
        $label = $textBox.siblings("div");
        $button.click(function (event) {
            self.Reset();
            event.preventDefault();
        });
        $label.on("blur", function (event) {
            self.Rename($label.text());
            console.log("blur");
        });
    };

    this.Start = function () {
        setInterval(self.ShowTime, 100);
    };

    this.Start();
};
