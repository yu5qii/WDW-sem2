let heading = document.getElementById("mainheading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userinput");

let fontsize = 16;

document.getElementById("changetext").addEventListener("click", function() {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

document.getElementById("bgcolor").onclick = function() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
};

document.getElementById("fontsize").addEventListener("click", function() {
    fontsize += 2;
    paragraph.style.fontSize = fontsize + "px";
});

document.getElementById("toggle").addEventListener("click", function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    }
    else {
        paragraph.style.display = "none";
    }
});

document.getElementById("reset").addEventListener("click", function() {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#fff";
    input.value = "";
    fontsize = 16;
});