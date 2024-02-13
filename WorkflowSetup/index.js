const open = (...args) => import('open').then(({default: open}) => open(...args));
open("/usr/bin/gnome-calculator") //.exe
open("/home/viktor/Downloads/")
open("/usr/lib/firefox/firefox")
const urls = [
    "https://www.reddit.com/",
    "https://www.nytimes.com/",
    "https://www.youtube.com",
    "https://www.facebook.com",
];
for (const url of urls) {
    open(url, { app: { name: "firefox" } });
    console.log(`${url} deu certo`)
}