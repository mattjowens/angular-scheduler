/**
 * Created by matthewo on 12/08/2015.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppointmentViewModel = (function (_ErrorReportingViewModel) {
    _inherits(AppointmentViewModel, _ErrorReportingViewModel);

    function AppointmentViewModel(id, startDate, endDate) {
        _classCallCheck(this, AppointmentViewModel);

        _get(Object.getPrototypeOf(AppointmentViewModel.prototype), "constructor", this).call(this);
        this._id = id;
        this._trainers = [];
        this._startDate = startDate;
        this._endDate = endDate;
        this._location = null;
    }

    _createClass(AppointmentViewModel, [{
        key: "addTrainer",
        value: function addTrainer(trainerViewModel) {
            this._trainers.push(trainerViewModel);
        }
    }, {
        key: "startDate",
        get: function get() {
            return this._startDate;
        },
        set: function set(value) {
            this._startDate = value;
        }
    }, {
        key: "endDate",
        get: function get() {
            return this._endDate;
        },
        set: function set(value) {
            this._endDate = value;
        }
    }, {
        key: "id",
        get: function get() {
            return this._id;
        }
    }]);

    return AppointmentViewModel;
})(ErrorReportingViewModel);

//# sourceMappingURL=AppointmentViewModel-compiled.js.map