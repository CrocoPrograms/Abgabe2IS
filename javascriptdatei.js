const d = new Date();

function currentDay(){
    const Wochentage = ["Sonntag","Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    const Monate = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    const Wochentag = Wochentage[d.getDay()];
    const Monat = Monate[d.getMonth()]

    console.log(Wochentag);
    console.log(d.getDate());
    console.log(Monat);
    console.log(d.getFullYear());
    /* gemacht: in richtige Reihenfolge bringen und arays anlegen dass Namen statt Zahlen dastehen
für den Wochentag und Monate*/ 
    /* gemacht: Für wochentag und monate i definieren und abrufen*/

}

function currentTime(){}