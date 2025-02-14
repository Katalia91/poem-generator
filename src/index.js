function displayPoem(response) {
  new Typewriter('#poem-content', {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: ""
  });
}


function generatePoem(event) {
    event.preventDefault();
    let poemContent = document.getElementById("poem-content");
    let userInput = document.querySelector("#prompt").value;

    const apiKey = "bab7d62a3b8o5fe03ce481f0a26t86db";
    let context = `You are an AI assistant and poet. Please generate a poem about the chosen topic. It should have not more than 5 lines by default. It should be in the following format, so that each line is a separate <p></p> like this: <p>First line</p></p>Second line</p> and so on. After finished poem use <br /><br /> and sign with <em> -Your personal poet</em>🖋️`
    let prompt = `Generate a poem about ${userInput}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    poemContent.classList.toggle("hidden");
    poemContent.innerHTML = `<span class="blink">⏳ Generating a poem about: ${userInput}...</span>`;

    axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);