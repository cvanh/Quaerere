function json_parse(guid){
    let json_data =  $.getJSON("http://localhost/Quaerere/Quaerere_server/?guid="+guid, function(data) {
      // JSON result in `data` variable
      // console.log(json_data.responseJSON); // example to print all the json response data
      // console.log(json_data.responseJSON.snapchat); // example to print a specific json parse result
      document.getElementById('name').innerHTML = json_data.responseJSON.name;
      document.getElementById('whatsapp').innerHTML = json_data.responseJSON.whatsapp;
      document.getElementById('instagram').innerHTML = json_data.responseJSON.instagram;
      document.getElementById('snapchat').innerHTML = json_data.responseJSON.snapchat;
  })};
  json_parse('4347263d-c647-43c0-af24-9c12defbba54')