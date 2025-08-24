function displayPoem(response) {
  new Typewriter("#poem-content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let poemContent = document.getElementById("poem-content");
  let userInput = document.querySelector("#prompt").value;

  const apiKey = "bab7d62a3b8o5fe03ce481f0a26t86db";
  let context = `You are an AI assistant and a running coach. Please generate a running plan based on the instructions provided. The user can choose from plans for 5k, 10k, half-marathon and marathon, and time they have during the week for excercise (eg. 3x, 4x or 5x week). It should be a finished running plan in a short version, each day should be in a separate line, and the title (for example "Plan for 5km, training 3x week,) should be <h1>, then description for weeks should be <h2>, for example <h2>Week 1</h2>. Generate max 4 weeks at once. for example: <h1>Plan for 5km, training 3x week</h1><h2>Week 1</h2><ul><li>monday: 2km warm-up, 10x100m uphill, 1km cool-down</li><li>Tuesday>...</li> etc.). After finished plan use <br /><br /> and sign with <p>Stay consistent, trust the process, and watch your progress build with every run. 💪✨</p><em> -Your personal coach</em> 🏃‍♀️`;
  let prompt = `Generate a running plan based on these instructions: ${userInput}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poemContent.classList.toggle("hidden");
  poemContent.innerHTML = `<span class="blink">⏳ Generating a running plan for: <strong>${userInput}</strong>...</span>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
