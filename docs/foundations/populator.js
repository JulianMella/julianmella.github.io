// This file populates the foundations.html with .txt files stored
// in textfiles. Those .txt files are produced with my personal app
// called Writer.

// "Initial test to see if the web browser supports templates"
if ("content" in document.createElement("template")) {
    const template = document.getElementById("article-template");
    const body = document.body;

    // For each article you want to render:

    const clone = template.content.cloneNode(true);
    clone.querySelector(".article-title").textContent = "May 22, 2025";
    clone.querySelector(".article-content").textContent = "hello world!";
    body.appendChild(clone);
} else {
    // testmuai.com gives a 92% security score in regard to
    // how many browsers support it

    // I will most likely never add a significant edge case handler
    // here, I have enough to do!
}