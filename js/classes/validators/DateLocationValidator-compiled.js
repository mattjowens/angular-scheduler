/**
 * Created by matthewo on 12/08/2015.
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DateLocationValidator = (function () {
    function DateLocationValidator(appointments) {
        _classCallCheck(this, DateLocationValidator);

        this._appointments = appointments;
        console.log(this._appointments);
    }

    _createClass(DateLocationValidator, [{
        key: 'validate',
        value: function validate(appointmentViewModel) {
            console.log('validating');

            if (this._appointments == null || this._appointments.length == 0) {
                console.log('appointments null');
                console.log(this._appointments);
                return {
                    outcome: true,
                    reason: '',
                    conflictId: 0
                };
            } else {

                console.log('appointments not null');
                var result = this._appointments.where(function (appointment) {
                    console.log('searching');
                    if (appointment.startDate == appointmentViewModel.startDate && appointment.startDate == appointmentViewModel.startDate) {
                        console.log('found');
                        return true;
                    }
                });

                if (result.length > 0) {
                    return {
                        outcome: true,
                        reason: 'There is already an appointment scheduled for this location on this date',
                        conflictId: result[0].id
                    };
                }
            }
        }
    }]);

    return DateLocationValidator;
})();

//# sourceMappingURL=DateLocationValidator-compiled.js.map