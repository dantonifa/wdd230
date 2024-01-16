function lastModified() {
  var lastMod = new Date(document.lastModified);
  var day = lastMod.getDay();
  var month = lastMod.getMonth() + 1;
  var year = lastMod.getFullYear();
  var date = lastMod.getDate();
  var hour = lastMod.getHours();
  var minute = lastMod.getMinutes();
  var second = lastMod.getSeconds();
  var ampm = "AM";
  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }
  if (hour == 0) {
    hour = 12;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
}
document.write(
  "Last Updated: " +
    month +
    "/" +
    date +
    "/" +
    year +
    " " +
    hour +
    ": " +
    minute +
    " " +
    ampm +
    " "
);

