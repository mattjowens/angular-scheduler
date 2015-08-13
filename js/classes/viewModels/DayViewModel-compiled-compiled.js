'use strict';

var _createClass = (function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var DayViewModel = (function () {
    function DayViewModel(date) {
        _classCallCheck(this, DayViewModel);

        if (date == null) {
            throw 'date constructor argument cannot be null';
        }

        this._date = date;
        this._isPublicHoliday = false;
    }

    _createClass(DayViewModel, [{
        key: 'getDate',
        value: function getDate() {
            return this._date;
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this._date;
        }
    }, {
        key: 'isWeekend',
        value: function isWeekend() {
            var day = this._date.getDay();
            var isWeekend = day == 6 || day == 0;
            return isWeekend;
        }
    }, {
        key: 'isPublicHoliday',
        value: function isPublicHoliday() {
            return this._isPublicHoliday;
        }
    }, {
        key: 'setPublicHoliday',
        value: function setPublicHoliday(value) {
            this._isPublicHoliday = value;
        }
    }]);

    return DayViewModel;
})();

//# sourceMappingURL=DayViewModel-compiled.js.map

//# sourceMappingURL=DayViewModel-compiled-compiled.js.map