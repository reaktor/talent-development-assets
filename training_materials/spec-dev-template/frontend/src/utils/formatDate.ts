/**
 * Format a date for display in a pragmatic way
 * Same day: "Today at 2:34 PM"
 * Previous day: "Yesterday at 2:34 PM"
 * Older: "Oct 24"
 */
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const daysDiff = Math.floor((todayStart.getTime() - dateStart.getTime()) / (1000 * 60 * 60 * 24));
  
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  
  if (daysDiff === 0) {
    return `Today at ${timeFormatter.format(date)}`;
  } else if (daysDiff === 1) {
    return `Yesterday at ${timeFormatter.format(date)}`;
  } else {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    });
    return dateFormatter.format(date);
  }
}
