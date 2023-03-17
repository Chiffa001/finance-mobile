const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false,
} as const;

export const getDateTime = (date: Date | string) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const [formattedDate, time] = new Intl.DateTimeFormat('ru', options)
    .format(date)
    .split(', ');

  return {date: formattedDate, time};
};
