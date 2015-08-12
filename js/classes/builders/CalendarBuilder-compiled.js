//import Date from "../extensions/Date.js";

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalendarBuilder = (function () {
    function CalendarBuilder(publicHolidays, year) {
        var _this = this;

        _classCallCheck(this, CalendarBuilder);

        try {
            this._monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            this._publicHolidaysAsStrings = new Array();

            if (publicHolidays !== null) {
                publicHolidays.forEach(function (element, index) {
                    _this._publicHolidaysAsStrings.push(element.publicHoliday);
                });
            }

            this._year = year;

            var year = new Date(this._year, 0, 1);

            if (year.isLeapYear()) {
                this._monthDays[1] = 29;
            }
        } catch (exception) {
            console.log(exception);
            throw exception;
        }
    }

    /**
    * Created by Matt on 11/08/2015.
    */

    _createClass(CalendarBuilder, [{
        key: "buildCalendar",
        value: function buildCalendar() {
            var _this2 = this;

            var calendar = new Array();
            this._monthDays.forEach(function (element, index) {
                var realIndex = index + 1;
                calendar[index] = new Array();
                console.log(realIndex);
                for (var i = 0; i < element; i++) {
                    var calendarDate = new Date(_this2._year, index - 1, i);
                    var dayViewModel = new DayViewModel(calendarDate);
                    calendar[index][i] = dayViewModel;

                    if (_this2._publicHolidaysAsStrings.length > 0) {
                        var matchedDates = _this2._publicHolidaysAsStrings.where(function (x) {
                            return x === calendarDate.formatMMDDYYYY();
                        });

                        if (matchedDates.length > 0) {
                            dayViewModel.setPublicHoliday(true);
                        }
                    }
                }
            });
            return calendar;
        }
    }]);

    return CalendarBuilder;
})();

//# sourceMappingURL=CalendarBuilder-compiled.js.map