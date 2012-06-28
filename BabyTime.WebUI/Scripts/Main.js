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
    html += '<button name="' + name + 'Button" id="' + name + 'Button" class="startbutton">' + name + '</button>';
    html += '<input type="text" name="' + name + 'TimerTextBox" id="' + name + 'TimerTextBox" value="" data-fromTime="">';
    html += '<span class="alert"></span>';
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


