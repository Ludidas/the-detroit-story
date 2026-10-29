const detroitDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'America/Detroit' });
const plainDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });

/**
  "October 28, 2026". A bare date ("2026-10-28") is shown as written; a full
  date-time (what Sanity stores) is shown in Detroit time, so a story published
  at 9pm doesn't show up dated the next day.
*/
export function formatDate(iso: string): string {
  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(iso);
  return (isDateOnly ? plainDate : detroitDate).format(new Date(iso));
}
