export const formatSchedules = (
  schedules: { scheduleId: string; datetime: string }[]
): Record<string, { time: string; scheduleId: string }[]> => {
  const result: Record<string, { time: string; scheduleId: string }[]> = {};

  schedules.forEach(({ scheduleId, datetime }) => {
    const dateObj = new Date(datetime);

    const dateKey = dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Manila",
    });

    const time = dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Asia/Manila",
    });

    if (!result[dateKey]) {
      result[dateKey] = [];
    }

    result[dateKey].push({ time, scheduleId });
  });

  return result;
};

export default formatSchedules;
