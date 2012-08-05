var timers = [{ name: 'diapur', label: 'Diapur', time: new Date() }, { name: 'food', label: 'Food', time: new Date() }];

describe("Timer", function () {
    var timer;

    beforeEach(function () {
        timer = new Timer({ name: 'diapur', label: 'Diapur', time: new Date() });
    });

    it("should have a valid Date for time", function () {

        expect(timer.get('time')).toBeTruthy();

    });

});