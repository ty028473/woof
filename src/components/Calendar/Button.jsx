import React from "react";
import EventBusyIcon from "@material-ui/icons/EventBusy";

function Button(props) {
  if (props.buttonType === "remove") {
    return (
      <div
        onClick={props.onClicked}
        style={{ background: "#f55347" }}
        class="button"
      >
        <EventBusyIcon /> {props.text}
      </div>
    );
  } else {
    return (
      <div
        onClick={props.onClicked}
        style={{ background: "#69a1ac" }}
        class="button"
      >
        {props.text}
      </div>
    );
  }
}

export default Button;
