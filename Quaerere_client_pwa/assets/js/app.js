console.log("js loaded")
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function json_parse(guid){
  $.getJSON('http://localhost/skrot_server/?guid=a61f07a3-d13c-4df8-bc51-9950a181513d', function(data) {
    // JSON result in `data` variable
    console.log()
});
}
json_parse()