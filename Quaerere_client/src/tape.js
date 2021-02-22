console.log("%cStop!", "color: red; font-family: sans-serif; font-size: 4.5em; font-weight: bolder; text-shadow: #000 1px 1px;");

async function load() {
    let url = 'http://localhost/skrot_server/';
    let obj = await (await fetch(url)).json();
    console.log(obj);
}
load();


