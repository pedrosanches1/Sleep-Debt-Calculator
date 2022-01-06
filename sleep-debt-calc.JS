const getSleepHours = day => {
switch (day) {
  case 'monday':
  return 1
  case 'tuesday':
  return 2
  case 'wednesday':
  return 3
  case 'thursday':
  return 4
  case 'friday':
  return 5
  case 'saturday':
  return 6
  case 'sunday':
  return 7
  default:
  return 'Error! Default statement on switch statement';
}
}

const getActualSleepHours = () => {
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
};

const getIdealSleepHours = (idealHours) => {
return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualHours = getActualSleepHours();
  const idealHours = getIdealSleepHours(7);
  if (actualHours === idealHours){
    console.log('You received the perfect amount of sleep, which is 49 hours of sleep per week!')
  } if (actualHours > idealHours) {
    console.log(`Congratulations! You have sleept more than you need per week. You are ${actualHours - idealHours} hours of sleep over the ideal.`)
  } if (actualHours < idealHours) {
    console.log(`Unfortunately you have not reached the required hours of sleep weekly. Time to focus on your bedtime. You are ${idealHours - actualHours} hours of sleep under the ideal.`)
}
}

calculateSleepDebt()
