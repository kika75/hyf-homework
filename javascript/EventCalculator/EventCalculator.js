


function eventWeekday (inSomeDays){
    
    var daysOfWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var todayIs = new Date;
    var todayIsNumber = todayIs.getDay();
    var totalDays =todayIsNumber + inSomeDays;
    var daysToEvent = (totalDays %7);
    var eventDay = daysOfWeek[daysToEvent];

    var output = ("today is " + todayIs + " " + "the event is in "+ inSomeDays + " days. Therefore the event is on " + " " + 
    eventDay);
    return output;
}