let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: '800',
    start: '2021-11-14' + 'T12:00:00',
    end: '2021-11-14' + 'T16:00:00',
  },
  {
    id: createEventId(),
    title: '900',
    start: '2021-11-17' + 'T12:00:00',
    end: '2021-11-17' + 'T16:00:00',
  },
  {
    id: createEventId(),
    title: '700',
    start: '2021-11-19' + 'T16:00:00',
    end: '2021-11-19' + 'T20:00:00',
  },
]

export function createEventId() {
  return String(eventGuid++)
}
