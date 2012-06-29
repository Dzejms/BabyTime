var timersCollection;
var defaultTimers = ["Diaper", "Food", "Sleep", "Music", "Dance", "Fun"];

function GetTimers(defaultTimers) {
    if (!localStorage.getItem("timersCollection")) {
        return new TimersCollection(defaultTimers);
    } else {
        var timers = new TimersCollection();
        timers.Load();
        return timers;
    }
}

function InsertNewTimerHtml(name, $parent) {
    var html ='<form method="POST" action="" id="' + name + 'Timer">';
    html += '<div contenteditable="true" id="' + name + 'TimerLabel" for="' + name + 'TimerTextBox">' + name + '</div>';
    html += '<span class="timerDisplay" id="' + name + 'TimerTextBox" data-fromTime=""></span>';
    html += '<button name="' + name + 'Button" id="' + name + 'Button" class="startbutton"></button>';
    html += '</form>';
    $parent.append(html);
}

$(function () {
    var $timersDiv = $("#timers");
    timersCollection = GetTimers(defaultTimers);

    for (var i = 0; i < timersCollection.timers.length; i++) {
        InsertNewTimerHtml(timersCollection.timers[i].Name, $timersDiv);
    }

    timersCollection.ReBind();
    timersCollection.Start();

    $("#clearAllTimers").click(function (event) {
        timersCollection.Clear();
        timersCollection.Save();
    });
});


