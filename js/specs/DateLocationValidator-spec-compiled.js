"use strict";

describe("DateLocationValidator", function () {
    it("Passes when null appointment array is passed", function () {
        var validator = new DateLocationValidator(null);
        var result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    it("Passes when null appointment array is length 0", function () {
        var validator = new DateLocationValidator([]);
        var result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    it("Fails when appointment clashes exactly", function () {
            var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2))];
            var validator = new DateLocationValidator(appointments);
            var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2));
            var result = validator.validate(appointmentViewmodel);
            expect(result.outcome).toBe(false);
    });

    it("Fails when appointment clashes exactly- with time", function () {
            var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
            var validator = new DateLocationValidator(appointments);
            var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0));
            var result = validator.validate(appointmentViewmodel);
            expect(result.outcome).toBe(false);
    });

    it("Fails when appointment falls within existing - both bounds", function () {
            var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
            var validator = new DateLocationValidator(appointments);
            var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 9, 30, 0), new Date(2015, 1, 2, 16, 30, 0));
            var result = validator.validate(appointmentViewmodel);
            expect(result.outcome).toBe(false);
    });

    it("Fails when appointment falls within existing - upper bounds", function () {
            var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
            var validator = new DateLocationValidator(appointments);
            var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 7, 30, 0), new Date(2015, 1, 2, 16, 30, 0));
            var result = validator.validate(appointmentViewmodel);
            expect(result.outcome).toBe(false);
    });

    it("Fails when appointment falls within existing - lower bounds", function () {
            var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
            var validator = new DateLocationValidator(appointments);
            var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 10, 30, 0), new Date(2015, 1, 2, 18, 30, 0));
            var result = validator.validate(appointmentViewmodel);
            expect(result.outcome).toBe(false);
    });
});

//# sourceMappingURL=DateLocationValidator-spec-compiled.js.map