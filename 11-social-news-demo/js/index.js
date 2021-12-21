class Link {
    constructor(id, title, url, author) {
        this.id = id;
        if (!(url.startsWith("http://") || url.startsWith("https://"))) {
            this.url = "http://" + url;
        } else {
            this.url = url;
        }
        this.title = title;
        this.author = author;
    }

    show() {
        return `${this.id}. ${this.title} (${this.url}). Author: ${this.author}`;
    }
}

// Credit: function by T.J. Crowder
// https://stackoverflow.com/a/6833299
function getLineBreakSequence() {
    var div, ta, text;

    div = document.createElement("div");
    div.innerHTML = "<textarea>one\ntwo</textarea>";
    ta = div.firstChild;
    text = ta.value;
    return text.indexOf("\r") >= 0 ? "\r\n" : "\n";
}

const lineSeparator = getLineBreakSequence();

const links = [];

function addLink(link) {
    links.push(link);
}

function showLinks(links) {
    links.map(x => console.log(x.show()));
}

const menuItems = [
    "1: Show links",
    "2: Add a link",
    "3: Remove a link",
    "0: Quit"
];

let promptText = "Choose an option";

menuItems.map(x => promptText = promptText + lineSeparator + x);

const item = prompt(promptText);

if(item == 2) {
    addLink(new Link(1, "my first link", "google.com", "San K"));
    showLinks(links);
}

