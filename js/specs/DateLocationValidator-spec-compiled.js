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
        try {
            var appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2))];
            var validator = new DateLocationValidator(appointments);
            var appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2));
            var result = new validator.validate(appointmentViewmodel);
            expect(result.outcome).toBe(false);
        } catch (excep) {
            console.log(excep);
            expect(true).toBe(false);
        }
    });
});

//# sourceMappingURL=DateLocationValidator-spec-compiled.js.map