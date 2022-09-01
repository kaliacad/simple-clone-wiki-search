const btnSearch = document.getElementById("btn-search");
const svgSearch = document.getElementById("svg-search");
const langues = ["sw", "fr", "ln", "en"];
const blockSearch = document.getElementById("block-search");
const valueContainer = document.getElementById("search-input");

const fetchData = async (value) => {
  const url = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${value}&limit=15`;
  const response = await fetch(url);
  const responseData = await response.json();
  if (response.ok) {
    loading = false;
    console.log(responseData);
    const [contentSearch, titles, contents, Urls] = responseData;
    const sectionHTML = document.createElement("section");
    if (titles.length > 0) {
      titles.forEach((title, index) => {
        const card = `
            <div class="card mt-5">
                <a href="${Urls[index]}" class="text-gray-800">${Urls[index]}</a>
                <h3 class="text-blue-800 mt-3">
                    <a href="${Urls[index]}">${title}</a></h3>
                <p class="text-gray-500">f you'd like to receive messages about upcoming talks, please subscribe to the
                    list by
                    sending an email to dsdsd-list-subscribe@cwi.nl.
                </p>
            </div>`;
        sectionHTML.innerHTML += card;
      });
    } else {
      sectionHTML.innerHTML = `
            <div class="card mt-5">
                <p class="text-gray-500">
                Aucune donnée trouver pour votre recherche
                </p>
            </div>`;
    }
    blockSearch.innerHTML = "";
    blockSearch.append(sectionHTML);
  }
};

function loadDataSearch() {
  let loading = true;
  if (loading) {
    const loader = `
      <div class="loadingContainer">
        <div class="loading">
          <span class="loadWords">Loading...</span>
          <span class="loading__anim"></span>
        </div>
      </div>`;

    blockSearch.innerHTML = loader;
  }
  const search = valueContainer.value;
  if (search.length > 0 && (search !== "" || search !== null)) {
    fetchData(search);
  }
}
btnSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(evt.code);
  loadDataSearch();
});
svgSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(evt.code);
  loadDataSearch();
})

valueContainer.addEventListener("keyup", function (evt) {
  evt.preventDefault();

  if (evt.code == "Enter") {
    loadDataSearch();
  }
});
