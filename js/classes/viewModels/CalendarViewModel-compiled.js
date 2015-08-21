/**
 * Created by matthewo on 12/08/2015.
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CalendarViewModel = (function () {
    function CalendarViewModel(year) {
        _classCallCheck(this, CalendarViewModel);

        this._appointments = [];
        this._errors = [];
        this._issues = [];
        this._year = year;
    }

    _createClass(CalendarViewModel, [{
        key: 'addAppointment',
        value: function addAppointment(appointmentViewModel) {

            //set location errors here
            var locationResult = new LocationDateValidator(this._appointments).validate(appointmentViewModel);

            //set trainer errors here
            var trainerResult = new TrainerDateValidator(this._appointments).validate(appointmentViewModel);

            //then add error view model to errors
            //example
            this.errors.push(new ErrorViewModel('test', new Date(), appointmentViewModel));
        }
    }, {
        key: 'errors',
        get: function get() {
            return this._errors;
        }
    }]);

    return CalendarViewModel;
})();

//# sourceMappingURL=CalendarViewModel-compiled.js.map