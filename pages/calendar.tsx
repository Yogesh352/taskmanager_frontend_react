import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import * as React from "react";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <CalendarComponent id="calendar" />
        <link
          href="https://cdn.syncfusion.com/ej2/material.css"
          rel="stylesheet"
        />
      </>
    );
  }
}
