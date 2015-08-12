describe("CalendarBuilderSpec", function()
{
      it("Year is 2016, Febuary has 29 days",function(){
        let caldendarBuilder  = new CalendarBuilder(null, 2016);
        let result = caldendarBuilder.buildCalendar();
        expect(result[1].length).toBe(29);
    });

    it("Year is 2015, Febuary has 28 days",function(){
        let caldendarBuilder  = new CalendarBuilder(null, 2015);
        let result = caldendarBuilder.buildCalendar();
        expect(result[1].length).toBe(28);
    });

    it("Year is 2015, December has 31 days",function(){
        let caldendarBuilder  = new CalendarBuilder(null, 2015);
        let result = caldendarBuilder.buildCalendar();
        expect(result[11].length).toBe(31);
    });

    it("Year is 2015, August 1st is weekend - saturday",function(){
        let caldendarBuilder  = new CalendarBuilder(null, 2015);
        let result = caldendarBuilder.buildCalendar();
        expect(result[8][1].isWeekend()).toBe(true);
    });

    it("Year is 2015, May 24th is weekend - sunday",function(){
        let caldendarBuilder  = new CalendarBuilder(null, 2015);
        let result = caldendarBuilder.buildCalendar();
        expect(result[5][24].isWeekend()).toBe(true);
    });


    it("Year is 2015, May 25th is not weekend - monday",function(){
        let caldendarBuilder  = new CalendarBuilder(null, 2015);
        let result = caldendarBuilder.buildCalendar();
        expect(result[5][25].isWeekend()).toBe(false);
    });

    it("Year is 2015, expect 2nd Jan and 8th Feb to be public holiday",function(){
        let publicHolidays =[{publicHoliday:'2015-01-02'},{publicHoliday:'2015-02-08'}];
        let caldendarBuilder  = new CalendarBuilder(publicHolidays, 2015);
        let result = caldendarBuilder.buildCalendar();
        let jan = result[1][1];
        let feb = result[2][7];
        expect(jan.isPublicHoliday()).toBe(true);
        expect(feb.isPublicHoliday()).toBe(true);
    });


});
