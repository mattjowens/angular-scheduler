/**
 * Created by matthewo on 12/08/2015.
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LocationDateValidator = (function () {
    function LocationDateValidator(appointments) {
        _classCallCheck(this, LocationDateValidator);

        this._appointments = appointments;
    }

    _createClass(LocationDateValidator, [{
        key: 'validate',
        value: function validate(appointmentViewModel) {

            /*
              Currently this doesn't consider location of the appointment, it needs to do that by
              using the location identifier.
             */

            if (this._appointments == null || this._appointments.length == 0) {
                return {
                    outcome: true,
                    reason: '',
                    conflictId: 0
                };
            } else {
                var result = this._appointments.where(function (appointment) {
                    if (appointment.startDate.toString() === appointmentViewModel.startDate.toString() && appointment.endDate.toString() === appointmentViewModel.endDate.toString()) {
                        return true;
                    }

                    //(StartA <= EndB)  and  (EndA >= StartB)
                    if (appointment.startDate <= appointmentViewModel.endDate && appointmentViewModel.endDate >= appointment.startDate) {
                        return true;
                    }

                    return false;
                });

                if (result.length > 0) {
                    return {
                        outcome: false,
                        reason: 'There is already an appointment scheduled for this location on this date',
                        conflictId: result[0].id
                    };
                } else {
                    return {
                        outcome: true,
                        reason: '',
                        conflictId: 0
                    };
                }
            }
        }
    }]);

    return LocationDateValidator;
})();

//# sourceMappingURL=LocationDateValidator-compiled.js.map