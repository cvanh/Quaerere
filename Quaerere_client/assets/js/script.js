import * as React from "react";
export const MenuToggle = () =>{
    var x = document.getElementById("menu_knop");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 
;
