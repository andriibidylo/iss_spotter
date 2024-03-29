const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function (passTimes) {

  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation()
  .then(flyoverTimes => printPassTimes(flyoverTimes))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });