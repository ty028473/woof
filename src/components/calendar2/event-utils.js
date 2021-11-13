let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: '800',
    start: '2021-11-11' + 'T12:00:00',
    end: '2021-11-11' + 'T16:00:00',
  },
  {
    id: createEventId(),
    title: '900',
    start: '2021-11-12' + 'T12:00:00',
    end: '2021-11-12' + 'T16:00:00',
  },
  {
    id: createEventId(),
    title: '700',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T16:00:00',
  },
]

export function createEventId() {
  return String(eventGuid++)
}
