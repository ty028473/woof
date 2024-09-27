import React from 'react'
import FullCalendar from '@fullcalendar/react'
import '../../styles/calender.scss'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { API_URL } from '../../configs/Config'
import axios from 'axios'
import swal from 'sweetalert'

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
            //停止拖曳日期效果
            eventStartEditable={false}
            //停止拉伸日期效果
            eventDurationEditable={false}
            eventEditable
            allDaySlot={false}
            dayMaxEvents={true}
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

              failure: function () {
                // alert('未連結到後端資料庫')
                swal({
                  title: '失敗!',
                  text: '未連結保母資訊!',
                  icon: 'error',
                })
              },
            }}
            select={this.handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
            //事件新增刪除
            eventAdd={(event) => this.handleEventAdd(event)}
            eventRemove={(event) => this.handleEventRemove(event)}
          />
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    })
  }
  //新增時段
  handleEventAdd = async (data) => {
    console.log(data.event)
    console.log(data.event._def.extendedProps.pet_sitter_id)
    await axios.post(`${API_URL}/calendar/sitter/time_insert`, data.event)
  }
  handleDateSelect = (selectInfo) => {
    let title = prompt('請輸入售價')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      let sitter = JSON.parse(localStorage.getItem('id'))
      calendarApi.addEvent({
        pet_sitter_id: sitter.petSitterId,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      })
    }
  }

  //刪除時段
  handleEventRemove = async (data) => {
    await axios.post(`${API_URL}/calendar/sitter/time_removed`, data.event)
  }
  handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    let sitter = JSON.parse(localStorage.getItem('id'))
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`確認刪除這筆資料嗎？ 金額'${clickInfo.event.title}'`)) {
      clickInfo.event.remove(sitter.petSitterId)
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

export default withRouter(DemoApp)
