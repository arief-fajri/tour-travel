async function getJSON(url) {
    var response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
        throw new Error(response.statusText);

    var data = await response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
}

function Headers(param) {
    var img = document.createElement("img");
    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var header = document.querySelector("#heading");
    var Caption = document.querySelector(".caption");

    header.prepend(img);
    Caption.prepend(h2);
    Caption.prepend(h1);

    header.style.backgroundImage = "url('"+param.banner+"')";
    img.setAttribute("src", param.logo);
    img.setAttribute("class", "logo");
    h2.setAttribute("class", "normal");
    h1.setAttribute("class", "bolder");
    h1.innerHTML = param.title;
    h2.innerHTML = param.subtitle;
}

function Destination(param) {
    var items = document.createElement("div"); 
    var caption = document.createElement("div"); 
    var img = document.createElement("img");

    items.append(img);
    items.append(caption);

    caption.innerHTML = param.title;
    img.setAttribute("src", param.pic);
    items.setAttribute("class", "grid-item");
    caption.setAttribute("class", "grid-caption");
}

getJSON("https://arief-fajri.github.io/tour-travel/data.json").then(function(data) {
 Headers(data);
 data.destination.forEach(params => Destination(params));

}).catch(error => {
  console.error(error);
});