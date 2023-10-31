export default function getFormattedDate(
  dateString: string,
  locale: string
): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}
