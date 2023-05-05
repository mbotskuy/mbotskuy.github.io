let previousResultContainer = null;

function convertVideo() {

const loader = document.getElementById("img");

        loader.style.display = "block";

  const url = document.getElementById("url-input").value;

  fetch("https://ssyoutube.com/api/convert", {

    method: "POST",

    body: JSON.stringify({ "url": url }),

    headers: {

      "Content-Type": "application/json"

    }

  })

  .then(response => response.json())

  .then(data => {

    console.log(data);

    const resultContainer = document.createElement("div");

    const title = data.meta.title;

    const thumb = data.thumb;

    const hosting = data.hosting;

    const duration = data.meta.duration;

    const videoUrl = data.url[0].url;

    const musikUrl = data.url[1].url;

                             

    resultContainer.innerHTML = `<div class="result-title">Sumber video ${hosting}</div>`;

    resultContainer.innerHTML += `<img src="${thumb}" style="width: 250px; height: auto;"/>`;

resultContainer.innerHTML += `<div class="result-title">${title}</div>`;

    resultContainer.innerHTML += `<div class="result-title1">Durasi ${duration}</div>`;

    const downloadButton = document.createElement("button");

    downloadButton.textContent ="Download Video";

    downloadButton.addEventListener("click", () => {

      window.open(videoUrl, "_blank");

    });

    resultContainer.appendChild(downloadButton);

resultContainer.innerHTML += `<div  class="result-title2">-</div>`;

        const downloadButton1 = document.createElement("button");

    downloadButton1.textContent ="Download Musik";

    downloadButton1.addEventListener("click", () => {

      window.open(musikUrl, "_blank");

    });

    resultContainer.appendChild(downloadButton1);

    if (previousResultContainer !== null) {

      previousResultContainer.remove();

    }

    document.body.appendChild(resultContainer);

    previousResultContainer = resultContainer;

loader.style.display = "none";

          delete window.showLoader;

  })

  .catch(error => console.error(error));

}
