const url = 'https://ergast.com/api/f1/2013/driverstandings.json';

const pos = document.querySelector('.pos');
const driver = document.querySelector('.driver');
const skor = document.querySelector('.point');
const constructor = document.querySelector('.constructor');

const displayStandings = (standings) => {
    console.log(standings);

    standings.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach((standing) => {
        driver.innerHTML += `${standing.Driver.givenName} ${standing.Driver.familyName}<br>`;
        constructor.innerHTML += `${standing.Constructors[0].name}<br>`;
        skor.innerHTML += `${standing.points}<br>`;
    });
};

fetch(url)
    .then(response => response.json())
    .then(displayStandings)
    .catch(error => console.error('Error fetching data:', error));
