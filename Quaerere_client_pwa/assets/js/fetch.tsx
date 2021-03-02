let guid = "7fbfb383-b9e2-4431-a080-bbffbd73a2a3";
let json = "";
let result = null;
let json_data_globale = null;
let socials = document.getElementsByClassName('option');

// function json_fill() {
//   // console.log(result.id);
//   switch (result != null) { // okay listen up im gonna explain this once
//     case result.whatsapp != null:
//       let whatsapp = document.getElementById('whatsapp_child') // this makes a child to give the social media tag to 
//       console.log("user has whatsapp: "+ result.whatsapp); // debugging line
//       whatsapp.innerHTML = result.whatsapp; // this will insert the social media in de page
//       document.getElementById('whatsapp_parent').style.display = 'block' // this makes it visible becuase the defualt is display: none; this is in case the user didnt sumbit this spefic social media
//     case result.snapchat != null:
//       console.log("user has snapchat: " + result.snapchat);
//       let snapchat = document.getElementById('snapchat') 
//       snapchat.innerHTML = result.snapchat; 
//       document.getElementById('snapchat_parent').style.display = 'block' 
//     case result.instagram != null:
//       console.log("user has instagram: " + result.instagram);
//       let instagram = document.getElementById('instagram_child') 
//       instagram.innerHTML = result.instagram; 
//       document.getElementById('instagram_parent').style.display = 'block' 
//     case result.name != null:
//       console.log("user has a name: " + result.name);
//       let name = document.getElementById('name_child') 
//       name.innerHTML = result.name; 
//       document.getElementById('whatsapp_parent').style.display = 'block' 
//     default:
//       console.warn("there is nothing found if you believe this is a error please contact the system admin.") 
//       // ^^^^ this will be displayed the moment there is no json response
//   }
// }

function json_fill(){
  console.log('shite');
//  for (let index = 0; index < socials.length; index++) {
  const option = <h1>hello {result.name}</h1>
//}
}

async function json_parse() {
  result = await jQuery.getJSON(
    "http://localhost/Quaerere/Quaerere_server/?guid=" + guid
  );
  // console.info("dit is uit de funtie: " + result);
  json_fill();
}
json_parse();
