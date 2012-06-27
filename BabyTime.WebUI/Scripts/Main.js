var timersCollection;
var defaultTimers = ["Diaper", "Food", "Sleep", "Music"];

function GetTimers(defaultTimers) {
    if (!localStorage.getItem("timersCollection")) {
        return new TimersCollection(defaultTimers);
    } else {
        return JSON.parse(localStorage.getItem("timersCollection"));
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
    timersCollection = GetTimers(defaultTimers);
    var $timers = $("#timers");
    for (var i = 0; i < defaultTimers.length; i++) {
        InsertNewTimerHtml(defaultTimers[i], $timers);
    }

    $("#clearAllTimers").click(function (event) {
        timersCollection.ClearTimers();
        timersCollection.SaveTimers();
    });
});
