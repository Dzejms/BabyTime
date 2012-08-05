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
        
        // Behavior
        addTimer: function () {
            this.timers.push({ Name: this.timerToAdd() });
            this.timerToAdd("");
        }
    };

    ko.applyBindings(viewModel);
});