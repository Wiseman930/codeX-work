"use strict";

function getDay(inputDate) {
  var date = new Date(inputDate);
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekDays[date.getDay()];
}

console.log(getDay('2012-02-13'));