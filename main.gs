
function hour(time){
  return parseInt(time[0]+time[1]);
}
function minitus(time){
  return parseInt(time[3]+time[4]);
}


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

function doPost(e){  //このeの中にPOSTされてきた情報が入っている（オブジェクト形式）

  var name=e.parameter.text;
  var dow=e.parameter.dow;
  var start_time=e.parameter.start_time;
  var end_time=e.parameter.end_time;
  var location=e.parameter.location;
  var details=e.parameter.details;
  submit(dow,start_time,end_time,name);
  return HtmlService.createHtmlOutput('<p>戻るボタンで戻れます　正しく登録できたかgoogle カレンダーを確認してください</p>');;
}


function submit(dow,start_time,end_time,title) {
  var var0=new Date();
  var var1=dayer(dow);
  var test1=new Date(var0.getFullYear(),var0.getMonth(),var1,hour(start_time),minitus(start_time),0,0);
  var test2=new Date(var0.getFullYear(),var0.getMonth(),var1,hour(end_time),minitus(end_time),0,0);
  var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries(title,
    test1,
    test2,
    CalendarApp.newRecurrence().addWeeklyRule());
}
