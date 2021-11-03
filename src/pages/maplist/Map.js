import React, { useState } from "react";
import Navbar from "../../components/Calendar/Navbar";

import InfoBoard from "../../components/Calendar/InfoBoard";
import CustomFullCalender from "../../components/Calendar/CustomFullCalender";
export default function App() {
  const [eventsCounter, setEventsCounter] = useState(2);
  //const [startDate, setStartDate] = useState({});
  //const [endDate, setendDate] = useState({});
  const [events, setEvents] = useState([
    {
      id: "0",
      title: "BCH237",
      start: "2021-03-01T10:30:00",
      end: "2021-03-01T11:30:00"
    },
    {
      id: "1",
      title: "BCH238",
      start: "2021-03-02T10:30:00",
      end: "2021-03-02T11:30:00"
    }
  ]);
  function deleteAllEvents() {
    setEvents([]);
    setEventsCounter(0);
  }
  // //verwijderen van week ben ik niet aan toe gekomen
  // function setDateRangeForWeekRemoval(info) {
  //   console.log(info.view.activeStart);
  //   setStartDate(info.view.activeStart);
  //   setendDate(info.view.activeEnd);
  // }
  // //verwijderen van week ben ik niet aan toe gekomen
  // function deleteWeekEvents(info) {
  //   var dateStart = new Date(startDate);
  //   console.log(dateStart.getFullYear());
  //   events.forEach((item) => {
  //     if (new Date(item.start).getFullYear() === dateStart.getFullYear()) {
  //       if (new Date(item.start).getMonth() === dateStart.getMonth()) {
  //         if (new Date(item.start).getDay() >= dateStart.getDay()) {
  //           console.log("hit");
  //         }
  //       }
  //     }
  //   });
  // }
  return (
    <div className="App">
      <Navbar />
      <main>
        <CustomFullCalender
          events={events}
          setEvents={setEvents}
          eventsCounter={eventsCounter}
          setEventsCounter={setEventsCounter}
          //firstDayOfTheWeek={setDateRangeForWeekRemoval}
        />
        <InfoBoard
          deleteAllEvents={deleteAllEvents}
          //deleteWeekEvents={deleteWeekEvents}
        />
      </main>
    </div>
  );
}
