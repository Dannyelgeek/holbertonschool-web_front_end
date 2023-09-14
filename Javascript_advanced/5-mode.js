function changeMode(size, weight, transform, background, color) {
  return function () {
    const body = document.body;

    body.style.fontSize = size;
    body.style.weight = weight;
    body.style.transform = transform;
    body.style.background = background;
    body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const body = document.body;

  const p = document.createElement("p");
  p.textContent = "Welcome Holberton!";
  body.appendChild(p);

  const spookyButton = document.createElement("button");
  spookyButton.textContent = "Spooky";
  spookyButton.onclick = spooky;
  body.appendChild(spookyButton);

  const darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Dark mode";
  darkModeButton.onclick = darkMode;
  body.appendChild(darkModeButton);

  const screamModeButton = document.createElement("button");
  screamModeButton.textContent = "Scream mode";
  screamModeButton.onclick = screamMode;
  body.appendChild(screamModeButton);
}

main();
