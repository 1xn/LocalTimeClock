function updateTime() {
    let currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Berlin"})); /* Update the Europe/Berlin timezone to your local timezone */
    var hours = currentTime.getHours() % 12 || 12;
    var minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var d = new Date();
    var amOrPm = (d.getHours() < 12) ? "AM" : "PM";
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes + " " + amOrPm;
}
setInterval(updateTime, 1000);
