/// <reference path="knockout-2.1.0.debug.js" />


$(function() {
    var data = [
        { Id: 1, Name: "Diaper"},
        { Id: 2, Name: "Food"},
        { Id: 3, Name: "Sleep"},
        { Id: 4, Name: "Music"}
    ];
    
    var viewModel = {
        // data
        timers: ko.observableArray(data),
        timerToAdd: ko.observable(""),
        selectedTimer: ko.observable(null),


        // Behavior
        addTimer: function () {
            this.timers.push({ Name: this.timerToAdd() });
            this.timerToAdd("");
        },
        selectTimer: function () {
            console.log("inside selectTimer");
            viewModel.selectedTimer(this);
        }
    };

    $(document).on("click", ".timer-delete", function() {
        var itemToRemove = ko.dataFor(this);
        viewModel.timers.remove(itemToRemove);
    });

    ko.applyBindings(viewModel);
});