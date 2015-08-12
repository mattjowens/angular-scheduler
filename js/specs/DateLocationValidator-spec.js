describe("DateLocationValidator", function()
{
    it("Passes when null appointment array is passed",function(){
        let validator  = new DateLocationValidator(null);
        let result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    it("Passes when null appointment array is length 0",function(){
        let validator  = new DateLocationValidator([]);
        let result = new validator.validate(new AppointmentViewModel());
        expect(result.outcome).toBe(true);
    });

    it("Fails when appointment clashes exactly",function(){
        try {
            let appointments = [new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2))];
            let validator = new DateLocationValidator(appointments);
            let appointmentViewmodel = new AppointmentViewModel(1, new Date(2015, 1, 1), new Date(2015, 1, 2));
            let result = new validator.validate(appointmentViewmodel);
            expect(result.outcome).toBe(false);
        }
        catch(excep){
            console.log(excep)
            expect(true).toBe(false);
        }
    });
});