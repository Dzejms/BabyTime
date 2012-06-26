var diaperTimer, foodTimer, sleepTimer, otherTimer;

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
        diaperTimer = new Timer(getFromTime("diaperTimerTextBox"));
        foodTimer = new Timer(getFromTime("foodTimerTextBox"));
        sleepTimer = new Timer(getFromTime("sleepTimerTextBox"));
        otherTimer = new Timer(getFromTime("otherTimerTextBox"));
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

$(function () {
    GetTimers();
    UpdateTimes();
    SaveTimers();
    setInterval("UpdateTimes();", 1000);
});
