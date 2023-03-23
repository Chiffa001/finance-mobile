const staticOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
} as const;

export const getDateTime = (date: Date | string, timeZone?: string) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const options = timeZone ? {...staticOptions, timeZone} : staticOptions;
  const [formattedDate, time] = new Intl.DateTimeFormat('ru', options)
    .format(date)
    .split(', ');

  return {date: formattedDate, time};
};
