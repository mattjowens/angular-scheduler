"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _extensionsDateJs = require("../extensions/Date.js");

var _extensionsDateJs2 = _interopRequireDefault(_extensionsDateJs);

var CalendarBuilder = (function () {
    function CalendarBuilder(appointmentService, year) {
        _classCallCheck(this, CalendarBuilder);

        this._monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this._appointmentService = appointmentService;
        this._year = year;

        var year = new _extensionsDateJs2["default"](this._year, 0, 1);

        if (year.isLeapYear()) {
            this.monthDays[1] = 29;
        }
    }

    /**
    * Created by Matt on 11/08/2015.
    */

    _createClass(CalendarBuilder, [{
        key: "buildCalendar",
        value: function buildCalendar() {
            return new []();
        }
    }]);

    return CalendarBuilder;
})();

//# sourceMappingURL=CalendarBuilder-compiled.js.map