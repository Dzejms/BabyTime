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
        diaperTimer = new Timer(JSON.parse(localStorage.getItem("diaperTimer")).startTime);
        foodTimer = new Timer(JSON.parse(localStorage.getItem("foodTimer")).startTime);
        sleepTimer = new Timer(JSON.parse(localStorage.getItem("sleepTimer")).startTime);
        otherTimer = new Timer(JSON.parse(localStorage.getItem("otherTimer")).startTime);
    }
}

function SaveTimers() {
    localStorage.setItem("diaperTimer", JSON.stringify(diaperTimer));
    localStorage.setItem("foodTimer", JSON.stringify(foodTimer));
    localStorage.setItem("sleepTimer", JSON.stringify(sleepTimer));
    localStorage.setItem("otherTimer", JSON.stringify(otherTimer));
}

function ClearAllTimers() {
    diaperTimer = new Timer();
    foodTimer = new Timer();
    sleepTimer = new Timer();
    otherTimer = new Timer();
}

function StartClock() {
    interval = setInterval(UpdateTimes(), 1000);
}

function StopClock() {
    clearInterval(interval);
}

$(function () {
    GetTimers();
    UpdateTimes();
    SaveTimers();
    var interval = setInterval("UpdateTimes();", 1000);

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
        StopClock();
        StartClock();
        SaveTimers();
    });
});
