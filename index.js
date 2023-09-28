
const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory"
const yourName = "Davis"
newHeader.textContent = `${yourName} is the champion`;
