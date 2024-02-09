const open = require('open');




//open('https://sindresorhus.com', {app: {name: 'firefox'}});
const urls = [
    "https://www.reddit.com/",
    "https://www.nytimes.com/",
];

for (const url of urls){
    open (url, { app: {name: "google chrome"} });
}

open("/home/viktor/Downloads/")
open("/usr/bin/gnome-calculator")