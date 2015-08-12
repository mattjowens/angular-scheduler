/**
 * Created by matthewo on 12/08/2015.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalendarViewModel = (function () {
    function CalendarViewModel(year) {
        _classCallCheck(this, CalendarViewModel);

        this._appointments = [];
        this._issues = [];
        this._year = year;
    }

    _createClass(CalendarViewModel, [{
        key: "addAppointment",
        value: function addAppointment() {}
    }]);

    return CalendarViewModel;
})();

//# sourceMappingURL=CalendarViewModel-compiled.js.map