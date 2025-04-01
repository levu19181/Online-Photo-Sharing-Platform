// Create and style the header
const header = document.createElement("header");
header.style.backgroundColor = "#007bff";
header.style.color = "#fff";
header.style.padding = "1rem";
header.style.textAlign = "center";

// Add the title to the header
const title = document.createElement("h1");
title.textContent = "Online Photo-Sharing Platform";
header.appendChild(title);

// Add the header to the body
document.body.appendChild(header);

// Create and style the main container
const container = document.createElement("div");
container.style.padding = "2rem";
container.style.textAlign = "center";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#f4f4f9";
document.body.style.color = "#333";

// Add content to the container
const welcomeMessage = document.createElement("h2");
welcomeMessage.textContent = "Hello, World!";
container.appendChild(welcomeMessage);

const description = document.createElement("p");
description.textContent = "This is a simple homepage created entirely with JavaScript!";
container.appendChild(description);

// Create and style a button
const button = document.createElement("button");
button.textContent = "Start";
button.style.backgroundColor = "#007bff";
button.style.color = "#fff";
button.style.padding = "0.75rem 1.5rem";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";
button.style.fontSize = "1rem";
button.style.marginTop = "1rem";

// Add hover effect to the button
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#0056b3";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#007bff";
});

// Add a click event to the button
button.addEventListener("click", () => {
  alert("Button");
});
container.appendChild(button);

// Add the container to the body
document.body.appendChild(container);
