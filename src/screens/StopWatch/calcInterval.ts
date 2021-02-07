import moment from 'moment';

export const calcInterval = (interval: number): string => {
  const pad = (n: number) => (n < 10 ? '0' + n : n);
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return `${pad(duration.minutes())}:${pad(duration.seconds())},${pad(centiseconds)}`;
};
