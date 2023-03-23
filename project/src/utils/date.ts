import dayjs from 'dayjs';

const DATE_FORMAT_SIMPLE = 'YYYY-MM-DD';
const DATE_FORMAT_VIEW = 'MMMM YYYY';

const bringToSimpleDate = (date: Date) => date ? dayjs(date).format(DATE_FORMAT_SIMPLE) : '';
const bringToViewDate = (date: Date) => date ? dayjs(date).format(DATE_FORMAT_VIEW) : '';

export { bringToSimpleDate, bringToViewDate };
