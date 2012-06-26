var diaperTimer, foodTimer, sleepTimer, otherTimer, interval;

function getFromTime(id) {
    return jQuery('#' + id, "#timers").data("fromtime");
}

function setTimeValue(id, value) {
    jQuery('#' + id).val(value);
}

function UpdateTimes() {
    setTimeValue("diaperTimerTextBox", diaperTimer.GetFormattedTime());
    setTimeValue("foodTimerTextBox", foodTimer.GetFormattedTime());
    setTimeValue("sleepTimerTextBox", sleepTimer.GetFormattedTime());
    setTimeValue("otherTimerTextBox", otherTimer.GetFormattedTime());
}

function GetTimers() {
    if (!localStorage.getItem("diaperTimer")) {
        ClearAllTimers();
    } else {
        diaperTimer = new StopWatch(JSON.parse(localStorage.getItem("diaperTimer")).startTime);
        foodTimer = new StopWatch(JSON.parse(localStorage.getItem("foodTimer")).startTime);
        sleepTimer = new StopWatch(JSON.parse(localStorage.getItem("sleepTimer")).startTime);
        otherTimer = new StopWatch(JSON.parse(localStorage.getItem("otherTimer")).startTime);
    }
}

function SaveTimers() {
    localStorage.setItem("diaperTimer", JSON.stringify(diaperTimer));
    localStorage.setItem("foodTimer", JSON.stringify(foodTimer));
    localStorage.setItem("sleepTimer", JSON.stringify(sleepTimer));
    localStorage.setItem("otherTimer", JSON.stringify(otherTimer));
}

function ClearAllTimers() {
    diaperTimer = new StopWatch();
    foodTimer = new StopWatch();
    sleepTimer = new StopWatch();
    otherTimer = new StopWatch();
}

$(function () {
    GetTimers();
    UpdateTimes();
    SaveTimers();
    var interval = setInterval("UpdateTimes();", 250);

    $("#diaperTimer").find(":submit").click(function (event) {
        event.preventDefault();
        diaperTimer.startTime = new Date();
        SaveTimers();
    });

    $("#foodTimer").find(":submit").click(function (event) {
        event.preventDefault();
        foodTimer.startTime = new Date();
        SaveTimers();
    });

    $("#sleepTimer").find(":submit").click(function (event) {
        event.preventDefault();
        sleepTimer.startTime = new Date();
        SaveTimers();
    });

    $("#otherTimer").find(":submit").click(function (event) {
        event.preventDefault();
        otherTimer.startTime = new Date();
        SaveTimers();
    });
    $("#clearAllTimers").click(function (event) {
        event.preventDefault();
        ClearAllTimers();
        SaveTimers();
    });
});
