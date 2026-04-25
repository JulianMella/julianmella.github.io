// This file populates the foundations.html with .txt files stored
// in textfiles. Those .txt files are produced with my personal app
// called Writer.

// "Initial test to see if the web browser supports templates"
if ("content" in document.createElement("template")) {
    const template = document.getElementById("article-template");
    const articles_container = document.querySelector(".articles-container");

    const manifest = await fetch("textfiles/index.json").then(r => r.json());

    const articles = await Promise.all(
        manifest.map(async (entry) => ({
            title: entry.file.replace(/\.txt$/, ""),
            body: await fetch(`textfiles/${entry.file}`).then(r => r.text())
        }))
    );

    for (const article of articles) {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".article-title").textContent = formatDate(article.title);
        clone.querySelector(".article-content").textContent = article.body;
        articles_container.appendChild(clone);
    }
} else {
    // testmuai.com gives a 92% security score in regard to
    // how many browsers support it

    // I will most likely never add a significant edge case handler
    // here, I have enough to do!
}


function formatDate(input) {
    const [day, month, year] = input.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}