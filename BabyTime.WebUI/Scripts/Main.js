var timersCollection;
var defaultTimers = ["Diaper", "Food", "Sleep", "Music", "Dance", "Fun"];

function GetTimers(defaultTimers) {
    if (!localStorage.getItem("timersCollection")) {
        return new TimersCollection(defaultTimers);
    } else {
        var timers = new TimersCollection();
        timers.Load();
        timers.Start();
        return timers;
    }
}

function InsertNewTimerHtml(name, $parent) {
    var html ='<form method="POST" action="" id="' + name + 'Timer">';
    html += '<label  id="' + name + 'TimerLabel" for="' + name + 'TimerTextBox">' + name + '</label>';
    html += '<span class="timerDisplay" id="' + name + 'TimerTextBox" data-fromTime=""></span>';
    html += '<button name="' + name + 'Button" id="' + name + 'Button" class="startbutton">*</button>';
    html += '</form>';
    $parent.append(html);
}

$(function () {
    var $timersDiv = $("#timers");
    for (var i = 0; i < defaultTimers.length; i++) {
        InsertNewTimerHtml(defaultTimers[i], $timersDiv);
    }

    timersCollection = GetTimers(defaultTimers);

    $("#clearAllTimers").click(function (event) {
        timersCollection.Clear();
        timersCollection.Save();
    });
});


