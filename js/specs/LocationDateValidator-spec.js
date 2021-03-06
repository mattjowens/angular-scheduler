describe("LocationDateValidator", function()
{
    it("Passes when null appointment array is passed",function(){
        let validator  = new LocationDateValidator(null);
        let result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    it("Passes when null appointment array is length 0",function(){
        let validator  = new LocationDateValidator([]);
        let result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    describe('When the location is not the same location',function() {

        it("Passes when appointment clashes exactly", function () {
            try {
                let appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2))];
                let validator = new LocationDateValidator(appointments);
                let appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2));
                let result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(true);
            }
            catch (excep) {
                console.log(excep)
                expect(true).toBe(false);
            }
        });

        it("Passes when appointment clashes exactly- with time, for same location", function () {
            try {
                let appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                let validator = new LocationDateValidator(appointments);
                let appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0));
                let result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(true);
            }
            catch (excep) {
                console.log(excep)
                expect(true).toBe(false);
            }
        });


        it("Passes when appointment falls within existing - both bounds, for same location", function () {
            try {
                let appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                let validator = new LocationDateValidator(appointments);
                let appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 9, 30, 0), new Date(2015, 1, 2, 16, 30, 0));
                let result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(true);
            }
            catch (excep) {
                console.log(excep)
                expect(true).toBe(false);
            }
        });
    });


    describe('When the location is the same location',function() {
        it("Fails when appointment clashes exactly", function () {
            try {
                let appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2))];
                let validator = new LocationDateValidator(appointments);
                let appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2));
                let result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(false);
            }
            catch (excep) {
                console.log(excep)
                expect(true).toBe(false);
            }
        });

        it("Fails when appointment clashes exactly- with time, for same location", function () {
            try {
                let appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                let validator = new LocationDateValidator(appointments);
                let appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0));
                let result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(false);
            }
            catch (excep) {
                console.log(excep)
                expect(true).toBe(false);
            }
        });


        it("Fails when appointment falls within existing - both bounds, for same location", function () {
            try {
                let appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1, 8, 30, 0), new Date(2015, 1, 2, 17, 30, 0))];
                let validator = new LocationDateValidator(appointments);
                let appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1, 9, 30, 0), new Date(2015, 1, 2, 16, 30, 0));
                let result = validator.validate(appointmentViewmodel);
                expect(result.outcome).toBe(false);
            }
            catch (excep) {
                console.log(excep)
                expect(true).toBe(false);
            }
        });
    });

});
