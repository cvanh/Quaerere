import * as React from "react";
var $ = require( "jquery" );
export const MenuToggle = () =>{
    var x = document.getElementById("menu_knop");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 
;

async function json_parse(guid) { // not intended for direct calls, this fetches the object and calls the json_fill with the object 
  result = await $.getJSON(
    "http://localhost/Quaerere/Quaerere_server/?guid=" + guid
  );
  // console.info("dit is uit de funtie: " + result);
  // json_fill();
}
export const JsonParse = (guid) => {
  json_parse(guid);
}