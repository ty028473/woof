import React from "react";
import Button from "./Button";

function InfoBoard(props) {
  return (
    <div class="info_board">
      <div class="flex_container_upper">
        <h3>Beschikbaarheid</h3>
        <hr />
        <p>
          Geef aan wanneer je beschikbaar bent voor consultaties met je clienten
          of om gematcht te worden met nieuwe clienten.
        </p>
        <p>
          Klik op ergens in de agenda om een beschikbaarheidsslot toe te voegen
          en sleep de onderste rand om aan te geven hoe lang.
        </p>
        <img alt="example" src={require("../assets/example.PNG")} />
      </div>
      <div class="flex_container_lower">
        <Button
          onClicked={props.deleteAllEvents}
          text="Verwijder"
          buttonType="remove"
        />
        {/* <Button
          onClicked={props.deleteWeekEvents}
          text="Verwijder Alle"
          buttonType="remove"
        /> */}
      </div>
    </div>
  );
}

export default InfoBoard;
