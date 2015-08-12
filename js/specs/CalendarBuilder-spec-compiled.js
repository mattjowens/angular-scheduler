"use strict";

describe("CalendarBuilderSpec", function () {
    // var CalendarBuilder = require('../../scripts/classes/builders/CalendarBuilder-compiled');

    it("Year is 2016, Febuary has 29 days", function () {
        var caldendarBuilder = new CalendarBuilder(null, 2016);
        var result = caldendarBuilder.buildCalendar();
        expect(result[1].length).toBe(29);
    });
});

//# sourceMappingURL=CalendarBuilder-spec-compiled.js.map