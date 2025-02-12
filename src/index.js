function generatePoem(event) {
    event.preventDefault();

 new Typewriter('#poem-content', {
        strings: `Gentle alpacas on hills so high,<br />
        Soft as clouds against the sky.<br />
        With curious eyes and steps so light,<br />
        They roam the fields from dawn to night.<br />`,
        autoStart: true,
      });




}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);