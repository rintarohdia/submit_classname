

function dayer(dow){
  var today = new Date();
  var date = today.getDate();
  var day_num = today.getDay();
  var that_day = parseInt(date) - parseInt(day_num)+7+parseInt(dow);
  return that_day;
}


function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}




function submit(dow,start_h,start_m,end_h,end_m,title) {
  var var0=new Date();
  var var1=dayer(dow);
  var test1=new Date(var0.getFullYear(),var0.getMonth(),var1,Number(start_h),Number(start_m),0,0);
  var test2=new Date(var0.getFullYear(),var0.getMonth(),var1,Number(end_h),Number(end_m),0,0);
  var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(title,
    test1,
    test2,
    CalendarApp.newRecurrence().addWeeklyRule());
}
