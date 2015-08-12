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
        let calendar=new Array();
        this._monthDays.forEach((element,index)=>{
            calendar[index]=new Array();
            for(var i =0; i < element;i++){
               var calendarDate = new Date(this._year,index-1,i);
                var dayViewModel = new DayViewModel(calendarDate);
                calendar[index][i]=dayViewModel;

                if(this._publicHolidaysAsStrings.length>0) {
                    var matchedDates = this._publicHolidaysAsStrings.where(function(x){
                        return x===calendarDate.formatMMDDYYYY();
                    });

                    if (matchedDates.length > 0) {
                        dayViewModel.setPublicHoliday(true);
                    }
                }

            }
        });
         return calendar;
    }


}/**
 * Created by Matt on 11/08/2015.
 */
