function sayHello() {
    alert("Hello! Thanks for visiting my website 😊");
}

function changeColor() {
    const colors = ["#f4f4f9", "#ffe4e1", "#e0ffe0", "#fffacd", "#d1c4e9"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
