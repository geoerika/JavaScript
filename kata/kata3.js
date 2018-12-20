function makeArrayDay() {
  let arrayDay1 = [];
  var day0 = "";
  var day1 = "";
  for (var i = 1; i <= 31; i++) {
    if (i == 1) arrayDay1.push(['01', '1st']);
    else if (i == 2) arrayDay1.push(['02', '2nd']);
    else if (i == 3) arrayDay1.push(['03', '3rd']);
    else if (i == 21) arrayDay1.push(['21', '21st']);
    else if (i == 31) arrayDay1.push(['31', '31st']);
    else if (i == 22) arrayDay1.push(['22', '22st']);
    else if (i == 23) arrayDay1.push(['23', '23rd']) ;
    else  {
      day0 = i;
      day1 = i + "th";
      arrayDay1.push([day0.toString(), day1]);
    }
  }
  return arrayDay1;
}

function makeArrayMonth() {
  var month1 = [];
  month1[0] = ['01', 'Janaury'];
  month1[1] = ['2', 'February'];
  month1[2] = ['03', 'March'];
  month1[3] = ['04', 'April'];
  month1[4] = ['05', 'May'];
  month1[5] = ['06', 'June'];
  month1[6] = ['07', 'July'];
  month1[7] = ['08', 'August'];
  month1[8] = ['09', 'September'];
  month1[9] = ['10', 'October'];
  month1[10] = ['11', 'November'];
  month1[11] = ['12', 'December'];
  return month1;
}

var talkingCalendar = function(date) {
  var arrayDay = makeArrayDay();
  var arrayMonth = makeArrayMonth();
  var year = date.slice(0, 4);
  var month = date.slice(5, 7);
  var day = date.slice(8, 10);
  var dayDate = arrayMonth[month - 1][1] + " " + arrayDay[day - 1][1] + "," + " " + year;

  return dayDate;

}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

