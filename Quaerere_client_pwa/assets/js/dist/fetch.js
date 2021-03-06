var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var guid = "7fbfb383-b9e2-4431-a080-bbffbd73a2a3";
var json = "";
var result = null;
var json_data_globale = null;
var socials = document.getElementsByClassName('option');
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
function json_fill() {
    console.log('shite');
    for (var index = 0; index < socials.length; index++) {
        console.log("sss");
    }
}
function json_parse() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, jQuery.getJSON("http://localhost/Quaerere/Quaerere_server/?guid=" + guid)];
                case 1:
                    result = _a.sent();
                    // console.info("dit is uit de funtie: " + result);
                    json_fill();
                    return [2 /*return*/];
            }
        });
    });
}
json_parse();
