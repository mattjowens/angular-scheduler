"use strict";

describe("DateLocationValidator", function () {
    it("Passes when null appointment array is passed", function () {
        var validator = new TrainerDateValidator(null);
        var result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    it("Passes when null appointment array is length 0", function () {
        var validator = new TrainerDateValidator([]);
        var result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    describe('When the trainer is not working same date', function () {

        it("Passes when appointment clashes exactly", function () {
            try {
                var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2))];
                var validator = new TrainerDateValidator(appointments);
                var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2));
                var result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(true);
            } catch (excep) {
                console.log(excep);
                expect(true).toBe(false);
            }
        });

        it("Passes when appointment clashes exactly- with time, for same location", function () {
            try {
                var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                var validator = new TrainerDateValidator(appointments);
                var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0));
                var result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(true);
            } catch (excep) {
                console.log(excep);
                expect(true).toBe(false);
            }
        });

        it("Passes when appointment falls within existing - both bounds, for same location", function () {
            try {
                var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                var validator = new TrainerDateValidator(appointments);
                var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 9, 30, 0), new Date(2015, 1, 2, 16, 30, 0));
                var result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(true);
            } catch (excep) {
                console.log(excep);
                expect(true).toBe(false);
            }
        });
    });

    describe('When the trainer is working same date', function () {
        it("Fails when appointment clashes exactly", function () {
            try {
                var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2))];
                var validator = new TrainerDateValidator(appointments);
                var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2));
                var result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(false);
            } catch (excep) {
                console.log(excep);
                expect(true).toBe(false);
            }
        });

        it("Fails when appointment clashes exactly- with time, for same trainer", function () {
            try {
                var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                var validator = new TrainerDateValidator(appointments);
                var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0));
                var result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(false);
            } catch (excep) {
                console.log(excep);
                expect(true).toBe(false);
            }
        });

        it("Fails when appointment falls within existing - both bounds, for same trainer", function () {
            try {
                var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                var validator = new TrainerDateValidator(appointments);
                var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 9, 30, 0), new Date(2015, 1, 2, 16, 30, 0));
                var result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(false);
            } catch (excep) {
                console.log(excep);
                expect(true).toBe(false);
            }
        });
    });
});

//# sourceMappingURL=TrainerDateValidator-spec-compiled.js.map