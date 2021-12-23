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

// Program state
const lineSeparator = getLineBreakSequence();
const links = [];

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

// Get the string for the main menu.
function getPromptText() {
    // Build prompt text
    const menuItems = [
        "1: Show links",
        "2: Add a link",
        "3: Remove a link",
        "0: Quit"
    ];

    let promptText = "Choose an option";

    menuItems.map(x => promptText = promptText + lineSeparator + x);

    return promptText;
}

// Add the new link to the links array.
function addLink(link) {
    links.push(link);
}

// Return a string representing the links array
function showLinks(links) {
    if (links.length == 0) {
        return "";
    } else if (links.length == 1) {
        return links[0].show();
    } else {
        return links.reduce((string, x) => string + lineSeparator + x.show(), "");
    }
}

// Take user input to create a new Link
function inputLinkData() {
    const id = prompt("Input link id:");
    const title = prompt("Input link title:");
    const url = prompt("Input link URL:");
    const author = prompt("Input link Auhor:");
    return new Link(id, title, url, author);
}

// Process user menu choices in the main app loop
function processMenu(promptText) {

    let wantsToQuit = false;

    do {
        const item = prompt(promptText);

        switch (item) {
            case "0":
                wantsToQuit = true;
                break;
            case "2":
                addLink(inputLinkData());
                console.log(showLinks(links));
                break;
            default:
                break;
        }
    } while (!wantsToQuit);
}


// Run the main loop
processMenu(getPromptText());

