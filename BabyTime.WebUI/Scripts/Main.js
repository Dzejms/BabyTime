var timersCollection;
var defaultTimers = ["Diaper", "Food", "Sleep", "Music", "Dance", "Fun"];

function GetTimers(defaultTimers, $parent) {
    if (!localStorage.getItem("timersCollection")) {
        return new TimersCollection(defaultTimers);
    } else {
        var timers = new TimersCollection();
        timers.Load($parent);
        return timers;
    }
}



$(function () {
    var $timersDiv = $("#timers");
    timersCollection = GetTimers(defaultTimers, $timersDiv);
    timersCollection.Start();

    $("#clearAllTimers").click(function (event) {
        timersCollection.Clear();
        timersCollection.Save();
    });
});


