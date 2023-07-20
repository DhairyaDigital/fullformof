document.getElementById("searchInput").addEventListener("input", searchAbbreviations);

async function searchAbbreviations() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  if (searchInput.trim() !== "") {
    const response = await fetch("data.json");
    const abbreviations = await response.json();
    const matchingAbbreviations = abbreviations.filter(abbr => abbr.abbreviation.toLowerCase().includes(searchInput));

    if (matchingAbbreviations.length > 0) {
      matchingAbbreviations.forEach(abbr => {
        const listItem = document.createElement("li");
        listItem.textContent = `${abbr.abbreviation}: ${abbr.fullForm}`;
        searchResults.appendChild(listItem);
      });
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = "No results found.";
      searchResults.appendChild(listItem);
    }
  }
}
