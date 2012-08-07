/// <reference path="backbone.js" />
/// <reference path="underscore.js" />
/// <reference path="jquery-1.7.2.js" />


//var timersCollection;
//var defaultTimers = ["Diaper", "Food", "Sleep", "Music", "Dance", "Fun"];

//function GetTimers(defaultTimers, $parent) {
//    if (!localStorage.getItem("timersCollection")) {
//        return new TimersCollection(defaultTimers, $parent);
//    } else {
//        var timers = new TimersCollection();
//        timers.Load($parent);
//        return timers;
//    }
//}



//$(function () {
//    var $timersDiv = $("#timers");
//    timersCollection = GetTimers(defaultTimers, $timersDiv);
//    timersCollection.Start();

//    $("#clearAllTimers").click(function (event) {
//        timersCollection.Clear();
//        timersCollection.Save();
//        event.preventDefault();
//    });
//});


$(function () {
    
    // Model
    window.Timer = Backbone.Model.extend({
        isStarted: function () {
            return false;
        }
    });

    // Collection
    window.Timers = Backbone.Collection.extend({
        model: Timer,
        url: '/api/timers'
    });

    // View
    window.TimerView = Backbone.View.extend({
        tagName: 'li',

        className: 'timer',

        initialize: function () {
            _.bindAll(this, 'render');
            this.model.bind('change', this.render);
            this.template = _.template($("#timerTemplate").html());
        },

        render: function () {
            var renderedContent = this.template(this.model.toJSON());
            this.$el.html(renderedContent);
            return this;
        },
        
    });

    window.TimersListView = Backbone.View.extend({
        tagName: 'section',
        className: 'timersListView',
        initialize: function () {
            _.bindAll(this, 'render');
            this.template = _.template($('#timersListTemplate').html());
            this.collection.bind('reset', this.render);
        },
        render: function () {
            var $timers;
            var collection = this.collection;

            this.$el.html(this.template({ Username: 'Jimmy' }));
            $timers = this.$el;
            collection.each(function(timer) {
                var view = new TimerView({ model: timer, collection: collection });
                $timers.append(view.render().el);
            });
            return this;
        }
    });






});
