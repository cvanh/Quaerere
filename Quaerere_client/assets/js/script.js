import * as React from "react";
var $ = require("jquery");
export const MenuToggle = () => {
  var x = document.getElementById("menu_knop");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};


async function json_parse(url = '', data = {}) {
  // // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// async function json_parse(guid) { // not intended for direct calls, this fetches the object and calls the json_fill with the object 
//   result = await $.getJSON(
//     "http://localhost/Quaerere/Quaerere_server/?guid=" + guid
//   );
//   // console.info("dit is uit de funtie: " + result);
//   // json_fill();
// }

// async function json_parse(guid) { // not intended for direct calls, this fetches the object and calls the json_fill with the object 
httpClient(`${apiUrl}/Location`, {
  method: 'GET',
  body: JSON.stringify(params.data),
})
// }
export const JsonParse = (guid) => {
  let UserIdUrl = 'http://localhost/Quaerere/Quaerere_server/?guid=' + guid
  json_parse(UserIdUrl);
}