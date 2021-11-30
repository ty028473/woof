import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { API_URL } from '../../configs/Config'
import { withRouter } from 'react-router'
class ViewApp extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  }

  render() {
    return (
      <div className="demo-app">
        {/* {this.renderSidebar()} */}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'timeGridWeek,timeGridDay',
            }}
            initialView="timeGridWeek"
            editable={false}
            selectable={false}
            selectMirror={true}
            allDaySlot={false}
            dayMaxEvents={true}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            slotLabelInterval="04:00:00"
            slotDuration="04:00:00"
            slotLabelFormat={function (date) {
              if (date.date.minute == 0)
                return (
                  date.date.hour.toString().padStart(2, '0') +
                  ':00' +
                  ' + ' +
                  '4hr'
                )
              return date.date.minute
            }}
            weekends={this.state.weekendsVisible}
            initialEvents={{
              url: `${API_URL}/calendar/${this.props.match.params.reserveId}`,
              method: 'GET',
              // extraParams: {
              //   custom_param1: 'something',
              //   custom_param2: 'somethingelse'
              // },
              failure: function () {
                alert('there was an error while fetching events!')
              },
            }} // alternatively, use the `events` setting to fetch from a feed
            // select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  handleEventClick = (clickInfo) => {
    alert(
      '確定預約:價錢 ' +
        clickInfo.event.title +
        '   ' +
        clickInfo.event.start.toLocaleString() +
        '至' +
        clickInfo.event.end.toLocaleString()
    )
    // this.setState({
    //   start: clickInfo.event.start,
    //   end: clickInfo.event.end,
    //   title: clickInfo.event.title,
    // })
    this.props.setObj({
      start: clickInfo.event.start,
      end: clickInfo.event.end,
      title: clickInfo.event.title,
    })
    clickInfo.el.style.backgroundColor = '#51535b'

    // renderSidebarEvent((event) => {
    //   return (
    //     <li key={event.id}>
    //       <b>
    //         {formatDate(event.start, {
    //           year: 'numeric',
    //           month: 'short',
    //           day: 'numeric',
    //         })}
    //       </b>
    //       <i>{event.title}</i>
    //     </li>
    //   )
    // })
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    })
  }
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </b>
      <i>{event.title}</i>
    </li>
  )
}
export default withRouter(ViewApp)
