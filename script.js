let previousResultContainer = null;

function convertVideo() {
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
    
    resultContainer.innerHTML = `<div class="result-title">Video ${hosting}</div>`;
    resultContainer.innerHTML += `<img src="${thumb}" style="width: 250px; height: auto;"/>`;
resultContainer.innerHTML += `<div class="result-title">${title}</div>`;
    resultContainer.innerHTML += `<div>Durasi ${duration}</div>`;


    const downloadButton = document.createElement("button");
    downloadButton.textContent ="Download";
    downloadButton.addEventListener("click", () => {
      window.open(videoUrl, "_blank");
    });
    resultContainer.appendChild(downloadButton);
    

    if (previousResultContainer !== null) {
      previousResultContainer.remove();
    }

    document.body.appendChild(resultContainer);
    previousResultContainer = resultContainer;
  })
  .catch(error => console.error(error));
}
