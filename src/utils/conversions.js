let months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export const dateConversion = (date) => {
  date = date.split('-');
  const year = Number(date[0]);
  const month = Number(date[1]);
  const day = Number(date[2]);
  return `${months[month]} ${day}, ${year}`;
};

export const timeConversion = (time) => {
  time = String(time.split(':'));

  const hours = Number(time[0]);
  const minutes = Number(time[1]);

  // calculate
  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = '' + hours;
  } else if (hours > 12) {
    timeValue = '' + (hours - 12);
  } else if (hours == 0) {
    timeValue = '12';
  }

  timeValue += minutes < 10 ? ':0' + minutes : ':' + minutes; // get minutes
  timeValue += hours >= 12 ? ' PM' : ' AM'; // get AM/PM
  return timeValue;
};
