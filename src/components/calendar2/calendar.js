import React, { useState, useEffect } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import '../../styles/calender.scss'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { API_URL } from '../../configs/Config'
import axios from 'axios'
import moment from 'moment'
import { withRouter } from 'react-router'

class DemoApp extends React.Component {
  state = {
    weekendsVisible: true,
    currentEvents: [],
  }

  render() {
    let sitter = JSON.parse(localStorage.getItem('id'))

    return (
      <div className="demo-app">
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'timeGridWeek,timeGridDay',
            }}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            selectMirror={true}
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            }}
            allDaySlot={false}
            dayMaxEvents={false}
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
              url: `${API_URL}/calendar/sitter/${sitter.petSitterId}`,
              method: 'GET',
              // extraParams: {
              //   custom_param1: 'something',
              //   custom_param2: 'somethingelse'
              // },
              failure: function () {
                alert('there was an error while fetching events!')
              },
            }} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:*/
            eventAdd={function (event) {
              axios.post({
                url: `${API_URL}/calendar/sitter/time_insert`,

                data: {
                  start: moment(event.start).toDate(),
                  end: moment(event.end).toDate(),
                  title: event.title,
                  pet_sitter_id: sitter.petSitterId,
                },
              })
            }}
            eventChange={function () {}}
            eventRemove={function () {}}
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-end">
          <div className="col-3  ">
            <div className="demo-app-sidebar">
              <div className="demo-app-sidebar-section">
                <h3>All Events ({this.state.currentEvents.length})</h3>
                <ul>{this.state.currentEvents.map(renderSidebarEvent)}</ul>
              </div>
              <div className="demo-app-sidebar-section">
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.weekendsVisible}
                    onChange={this.handleWeekendsToggle}
                  ></input>
                  toggle weekends
                </label>
              </div>
            </div>
          </div>
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
    let title = prompt('請輸入售價')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection
    axios.post(`${API_URL}/calendar/sitter/time_insert`)
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      })
    }
  }

  handleEventClick = (clickInfo) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(`確認刪除這筆資料嗎？ 金額'${clickInfo.event.title}'`)
    ) {
      clickInfo.event.remove()
    }
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
export default withRouter(DemoApp)
