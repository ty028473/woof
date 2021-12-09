import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { API_URL } from '../../configs/Config'
import { withRouter } from 'react-router'
import swal from 'sweetalert'
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
              //抓取保母id事件
              url: `${API_URL}/calendar/${this.props.match.params.reserveId}`,
              method: 'GET',

              failure: function () {
                swal({
                  title: '失敗!',
                  text: '找不到此保母!',
                  icon: 'error',
                })
              },
            }}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}
          />
        </div>
      </div>
    )
  }

  handleEventClick = (clickInfo) => {
    swal({
      title: '確認內容',
      text:
        '價格：' +
        clickInfo.event.title +
        '開始時間：' +
        clickInfo.event.start.toLocaleString() +
        '結束時間：' +
        clickInfo.event.end.toLocaleString(),
      icon: 'success',
      button: '好!',
    })

    this.props.setObj({
      start: clickInfo.event.start,
      end: clickInfo.event.end,
      title: clickInfo.event.title,
    })
    clickInfo.el.style.backgroundColor = '#51535b'
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
export default withRouter(ViewApp)
