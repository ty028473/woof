import styled from "@emotion/styled";
const StyleWrapper = styled.div`
  .fc th {
    border-style: none !important;
  }
  .fc td {
    border-color: #dcecee;
  }
  /*Removing the scrollbar from the header*/
  .fc-scrollgrid-section-header .fc-scroller {
    overflow: hidden hidden !important;
  }
  .fc-button.fc-agendaButton-button,
  .fc-button.fc-weekButton-button {
    background: #69a1ac;
    border-style: none !important;
    border-radius: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }

  /*Style buttons*/
  .fc-button.fc-prev-button,
  .fc-button.fc-next-button {
    background: #69a1ac;
    width: 40px;
    height: 40px;
    border-style: none !important;
    background-image: none;
    border-radius: 50%;
    margin-left: 8px;
    /*align title to the right beside the buttons*/
    float: left;
    clear: none;
  }
  /*center align date title*/
  .fc-toolbar-chunk {
    display: flex;
    align-items: center;
  }
  /*align title to the right beside the buttons*/
  .fc-toolbar-title {
    float: left;
    clear: none;
  }
  .fc .fc-timegrid-col.fc-day-today {
    background-color: rgba(244, 244, 250, 0.6);
  }
`;
export default StyleWrapper;
