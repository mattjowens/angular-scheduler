/**
 * Created by matthewo on 12/08/2015.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppointmentViewModel = (function () {
    function AppointmentViewModel(id, startDate, endDate) {
        _classCallCheck(this, AppointmentViewModel);

        this._id = id;
        this._trainers = [];
        this._startDate = startDate;
        this._endDate = endDate;
    }

    _createClass(AppointmentViewModel, [{
        key: "addTrainer",
        value: function addTrainer(trainerViewModel) {
            this._trainers.push(trainerViewModel);
        }
    }, {
        key: "startDate",
        get: function get() {
            return this.startDate;
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
})();

//# sourceMappingURL=AppointmentViewModel-compiled.js.map