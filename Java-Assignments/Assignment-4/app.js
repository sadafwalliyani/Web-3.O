// IIFE Immediately invoked function Expressions
(async function () {
  const response = await fetch("./data.json");
  const data = await response.json();

  const inputElem = document.getElementById("searchInput");
  const btnElem = document.getElementById("searchBtn");
  const listElem = document.getElementById("data-list");
  const detailsElem = document.getElementById("dataDetailsContainer");

  function loaddataDetails(data) {
    detailsElem.innerHTML = `
        <h2 class="title">${data.title}</h2>
        <h3>Ingredients:</h3>
        <ul>${genres.map(function (genres) {
          return "<li>" + genres + "</li>"
        }).join("")}</ul>
        <h3>Instruction:</h3>
        <div>${id.instructions}</div>
    `;
  }

  function displaySearchResults (results) {
    listElem.innerHTML = "";
    results.forEach(function (data) {
      const li = document.createElement("li");
      const listItem = `
          <h2 class="title">${data.vote_average}</h2>
          <div class="description">${data.description}</div>
      `;
      li.innerHTML = listItem;
      li.addEventListener("click", function () {
        loaddataDetails(data);
      });
      listElem.appendChild(li);
    })
  }

  function search() {
    const query = inputElem.value.toLowerCase();
    const results = data.filter(function (data) {
      return (data.title.toLowerCase().includes(query) ||
      data.id.join(" ").toLowerCase().includes(query))
    });

    displaySearchResults(results);
  }

  btnElem.addEventListener("click", search);
})();