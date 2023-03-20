const d = new Date();

function addLeadingZero(value){
    if (value < 10){
        return "0" + value;
    }else {return value};

}

function currentDay(){
    const wochentage = ["Sonntag","Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    const wochentag = wochentage[d.getDay()];
    const monat = monate[d.getMonth()];
    const datum = d.getDate();
    const formatDatum = addLeadingZero(datum);
    const jahr = d.getFullYear();

    return `${wochentag}, ${formatDatum}. ${monat} ${jahr}`;
    /* gemacht: in richtige Reihenfolge bringen und arays anlegen dass Namen statt Zahlen dastehen
für den Wochentag und Monate*/ 
    /* gemacht: Für wochentag und monate i definieren und abrufen*/

}

function currentTime(){
    const hours = (d.getHours());
    const formatHours = addLeadingZero(hours);
    const minutes = (d.getMinutes());
    const formatMinutes = addLeadingZero(minutes);
    const seconds = (d.getSeconds());
    const formatSeconds = addLeadingZero(seconds);
    return `${formatHours}: ${formatMinutes}: ${formatSeconds}`;

}

function timeOnPage() {
    const elapsedTime = new Date() - new Date(performance.timeOrigin);
    const elapsedHours = elapsedTime / 3600000 | 0;
    const formatElapsedHours = addLeadingZero(elapsedHours);
    const elapsedMinutes = (elapsedTime / 60000 | 0) % 60;
    const formatElapsedMinutes = addLeadingZero(elapsedMinutes);
    const elapsedSeconds = (elapsedTime / 1000 | 0) % 60;
    const formatElapsedSeconds = addLeadingZero(elapsedSeconds);
    const timeString = `${formatElapsedHours} : ${formatElapsedMinutes}: ${formatElapsedSeconds}`;
    window.localStorage.setItem("Verbrachte Zeit auf der Website", timeString);
    return timeString;
  }
  
  window.onbeforeunload = function() {
    window.localStorage.setItem("Verbrachte Zeit auf der Website", "00:00:00");
  };
  

function refresh(){
    location.reload();
}