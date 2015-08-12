//import Date from "../extensions/Date.js";

class CalendarBuilder{
      constructor(publicHolidays, year) {
         try {
             this._monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
             this._publicHolidaysAsStrings = new Array();

             if(publicHolidays!==null) {
                 publicHolidays.forEach((element, index)=> {
                     this._publicHolidaysAsStrings.push(element.publicHoliday);
                 });
             }

             this._year = year;

             var year = new Date(this._year, 0, 1);

             if (year.isLeapYear()) {
                 this._monthDays[1] = 29;
             }
         }
          catch(exception){
              console.log(exception)
              throw exception;
          }

    }

    buildCalendar(){
        try {
            let calendar = new Array();
            this._monthDays.forEach((element, index)=> {
                calendar[index] = new Array();
                for (var i = 1; i <= element; i++) {
                    var calendarDate = new Date(this._year, index, i);
                    var dayViewModel = new DayViewModel(calendarDate);
                    calendar[index][i - 1] = dayViewModel;

                    if (this._publicHolidaysAsStrings.length > 0)
                    {
                       var matchedDates = this._publicHolidaysAsStrings.where(function (x) {
                           var dateAsPrettyFormat = calendarDate.formatMMDDYYYY();
                           if(x === dateAsPrettyFormat)
                           {
                               dayViewModel.setPublicHoliday(true);
                               return true;
                           }
                           return false;
                        });
                    }

                }
            });
            return calendar;
        }catch(excep){
            console.log(excep);
            throw excep;
        }
    }


}/**
 * Created by Matt on 11/08/2015.
 */
