class DayViewModel{

    constructor(date){
        if(date==null) {
            throw 'date constructor argument cannot be null';
        }

        this._date = date;
        this._isPublicHoliday = false;
    }

    getDate(){
        return this._date;

    }

    toString(){
        return this._date;
    }

    isWeekend(){
        var day = this._date.getDay();
        var isWeekend = (day == 6) || (day == 0);
        return isWeekend;
    }

    isPublicHoliday(){
        return this._isPublicHoliday;
    }

    setPublicHoliday(value){
            this._isPublicHoliday= value;
    }

}