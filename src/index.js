import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

$.ajax({
  url: "./resumeData.json",
  dataType: "json",
  cache: false,
  success: function (data) {
    ReactDOM.render(
      <BrowserRouter>
        <App data={data} />
      </BrowserRouter>,
      document.getElementById("root")
    );
  },
  error: function (xhr, status, err) {
    console.log(err);
    alert(err);
  },
});
registerServiceWorker();
