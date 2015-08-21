/**
 * Created by matthewo on 12/08/2015.
 */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TrainerDateValidator = (function () {
    function TrainerDateValidator(appointments) {
        _classCallCheck(this, TrainerDateValidator);

        this._appointments = appointments;
    }

    _createClass(TrainerDateValidator, [{
        key: 'validate',
        value: function validate(appointmentViewModel) {
            /*
               Here we have to see if any of the trainers in the collection inside appointmentViewModel
               are training in other appointments at the same time. Remember there can be more than one trainer.
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
                        reason: 'This has to fail',
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

    return TrainerDateValidator;
})();

//# sourceMappingURL=TrainerDateValidator-compiled.js.map