import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import StyleWrapper from "./styleWrapper";

function CustomFullCalender(props) {
  //tijdelijke oplossing om database na te bootsen

  return (
    <div class="calendar">
      <StyleWrapper>
        <FullCalendar
          customButtons={{
            agendaButton: {
              text: "Agenda",
              click: function () {
                alert("clicked the custom button!");
              }
            },
            weekButton: {
              text: "Week",
              click: function () {
                alert("clicked the custom button!");
              }
            }
          }}
          theme={false}
          locale={"nl-be"}
          firstDay={1}
          plugins={[timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev next title",
            right: "agendaButton weekButton"
          }}
          initialView="timeGridWeek"
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          allDaySlot={false}
          eventOverlap={false}
          eventColor={"#4caf50"}
          //state inladen
          events={props.events}
          //aanmaken van event in state
          select={function (info) {
            props.setEventsCounter(props.eventsCounter + 1);
            props.setEvents(
              props.events.concat({
                id: props.eventsCounter.toString(),
                title: "Beschikbaar",
                start: info.start,
                end: info.end
              })
            );
          }}
          //update van event in state
          eventChange={function (info) {
            //is me niet gelukt om de oude te verwijderen.
            props.setEvents(
              props.events.filter((item) => item.id !== info.oldEvent.id)
            );
            props.setEventsCounter(props.eventsCounter + 1);
            props.setEvents(
              props.events.concat({
                id: props.eventsCounter.toString(),
                title: "Beschikbaar",
                start: info.event.start,
                end: info.event.end
              })
            );
          }}
          //verwijderen van event in state
          //hierbij lukt het dan weer wel
          eventClick={function (info) {
            props.setEvents(
              props.events.filter((item) => item.id !== info.event.id)
            );
          }}
          //data ophalen voor het vrwijderen van de week
          eventDidMount={props.firstDayOfTheWeek}
        />
      </StyleWrapper>
    </div>
  );
}

export default CustomFullCalender;
