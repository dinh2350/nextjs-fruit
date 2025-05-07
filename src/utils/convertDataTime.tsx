export const getTimeParts = (value: string) => {
  const targetTime = new Date(value);
  const now = new Date();

  const diffMs = targetTime.getTime() - now.getTime();
  const diffSec = Math.max(0, Math.floor(diffMs / 1000));

  const days = Math.floor(diffSec / (24 * 3600));
  const hours = Math.floor((diffSec % (24 * 3600)) / 3600);
  const minutes = Math.floor((diffSec % 3600) / 60);
  const seconds = diffSec % 60;

  return { days, hours, minutes, seconds };
};
