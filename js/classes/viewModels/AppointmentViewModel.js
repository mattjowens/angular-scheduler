/**
 * Created by matthewo on 12/08/2015.
 */
class AppointmentViewModel {
    constructor(id, startDate, endDate) {
        this._id = id;
        this._trainers = [];
        this._startDate = startDate;
        this._endDate = endDate;
        this._location = null;
    }

    get startDate(){
        return this._startDate;
    }

    set startDate(value){
        this._startDate = value;
    }

    get endDate(){
        return this._endDate;
    }

    set endDate(value){
        this._endDate = value;
    }

    get id(){
        return this._id;
    }

    get trainers(){
        return this._trainers;
    }

    addTrainer(trainerViewModel){
        this._trainers.push(trainerViewModel);
    }
}
