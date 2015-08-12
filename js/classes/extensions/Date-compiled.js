'use strict';

Date.prototype.getFirstDay = function () {
    var newDate = new Date(this.getFullYear(), this.getMonth(), 0);
    return newDate.getDay();
};

Date.prototype.formatMMDDYYYY = function () {
    var month = this.getMonth() + 1 < 10 ? '0' + (this.getMonth() + 1) : String(this.getMonth() + 1);
    var date = this.getDate() < 10 ? '0' + this.getDate() : String(this.getDate());

    return this.getFullYear() + "-" + month + "-" + date;
};

Date.prototype.getFirstDayAsText = function () {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var newDate = new Date(this.getFullYear(), this.getMonth(), 0);
    return days[newDate.getDay()];
};

Date.prototype.withoutTime = function () {
    var d = new Date(this);
    d.setHours(0, 0, 0, 0, 0);
    return d;
};
Date.prototype.isLeapYear = function () {
    var year = this.getFullYear();
    return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
};

//# sourceMappingURL=Date-compiled.js.map