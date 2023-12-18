  
  
  function calculateDemeritPoints(speed)
 {
  const speedLimit = 70;
  const pointsPerExcessSpeed = 5;
  const pointsBeforeSuspension = 12;

//for normal speed//
  if (speed < speedLimit) {
    console.log("Ok");
    return;
  }

  //to get demerit points//
  const demeritPoints = Math.floor((speed - speedLimit) / pointsPerExcessSpeed);

  // Display the result//
  if (demeritPoints <= pointsBeforeSuspension) {
    console.log(`Points: ${demeritPoints}`);
     }
        else if(demeritPoints => pointsBeforeSuspension){
    console.log("License suspended");
  }
 }
  
