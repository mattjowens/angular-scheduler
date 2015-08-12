Date.prototype.getFirstDay = function() {
    var newDate = new Date(this.getFullYear(),this.getMonth(),0);
    return newDate.getDay();
};

Date.prototype.getFirstDayAsText = function() {
    var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var newDate = new Date(this.getFullYear(),this.getMonth(),0);
    return days[newDate.getDay()];
};

Date.prototype.isLeapYear = function(){

    var year = this.getFullYear();
    console.log(year);
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}