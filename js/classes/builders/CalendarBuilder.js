import Date from "../extensions/Date.js";

class CalendarBuilder{
      constructor(appointmentService, year) {
        this._monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
        this._appointmentService = appointmentService;
        this._year = year;

        var year = new Date(this._year,0,1);

        if(year.isLeapYear()){
            this.monthDays[1]=29;
        }

    }

    buildCalendar(){
        return new[];
    }


}/**
 * Created by Matt on 11/08/2015.
 */
