/**
 * Created by matthewo on 12/08/2015.
 */
class CalendarViewModel{
    constructor(year){
        this._appointments = [];
        this._errors = [];
        this._issues = []
        this._year = year;
    }

    addAppointment(appointmentViewModel){

        //set location errors here
        var locationResult =   new LocationDateValidator(this._appointments).validate(appointmentViewModel);

        //set trainer errors here
        var trainerResult =   new TrainerDateValidator(this._appointments).validate(appointmentViewModel);

        //then add error view model to errors
        //example
        this.errors.push(new ErrorViewModel('test',new Date(),appointmentViewModel));
    }

    get errors(){
        return this._errors;
    }


}