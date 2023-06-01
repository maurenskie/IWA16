const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",
    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },
      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

const createAthleteInfo = (athlete) => {
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.slice(-1);
  const { date, time } = latestRace;

  const raceDate = new Date(date);
  const day = raceDate.getDate();
  const month = MONTHS[raceDate.getMonth()];
  const year = raceDate.getFullYear();

  const total = time.reduce((acc, lapTime) => acc + lapTime, 0);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  return {
    id,
    fullName: `${firstName} ${surname}`,
    totalRaces: races.length,
    latestRaceDate: `${day} ${month} ${year}`,
    latestRaceTime: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
  };
};

const NM372 = data.response.data.NM372;
const SV782 = data.response.data.SV782;

const NM372Info = createAthleteInfo(NM372);
const SV782Info = createAthleteInfo(SV782);

console.log('Athlete:', NM372Info.fullName);
console.log('Total Races:', NM372Info.totalRaces);
console.log('Event Date (Latest):', NM372Info.latestRaceDate);
console.log('Total Time (Latest):', NM372Info.latestRaceTime);

console.log('Athlete:', SV782Info.fullName);
console.log('Total Races:', SV782Info.totalRaces);
console.log('Event Date (Latest):', SV782Info.latestRaceDate);
console.log('Total Time (Latest):', SV782Info.latestRaceTime);
