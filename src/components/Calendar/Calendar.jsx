import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.css";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "./styles.scss";
import "../../ThemesStyles/light.scss";
import "../../ThemesStyles/super.scss";
import "../../ThemesStyles/gradient.scss";
import "../../ThemesStyles/dark.scss";
import "../../ThemesStyles/auto.scss";

function Calendar() {
  return (
    <div id="caleCont" className="outerCont">
      <Fullcalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          googleCalendarPlugin,
        ]}
        themeSystem={"bootstrap5"}
        googleCalendarApiKey={"AIzaSyCjAUHoSOP-7AToXdQ3JWZQw8u9FNB00cc"}
        events={{
          googleCalendarId:
            "a5886386cde220ec5d4603cac4a9afa7090e8efa6db467bc6c9363708f582fb7@group.calendar.google.com",
        }}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
      />
    </div>
  );
}

export default Calendar;

// AIzaSyCjAUHoSOP-7AToXdQ3JWZQw8u9FNB00cc

// a5886386cde220ec5d4603cac4a9afa7090e8efa6db467bc6c9363708f582fb7@group.calendar.google.com
