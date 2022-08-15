const btnSearch = document.getElementById("btn-search");
const langues = ["sw", "fr", "ln", "en"];
const blockSearch = document.getElementById("block-search");
const valueContainer = document.getElementById("search-input");

let loading = true;
const fetchData = async (value) => {
  const url = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${value}&limit=15`;
  const response = await fetch(url);
  const responseData = await response.json();
  if (response.ok) {
    loading = false;
    console.log(responseData);
    const [contentSearch, titles, contents, Urls] = responseData;
    const sectionHTML = document.createElement("section");
    titles.forEach((title, index) => {
      const card = `
            <div class="card mt-5">
                <a href="#" class="text-gray-800">${Urls[index]}</a>
                <h3 class="text-blue-800 mt-3">
                    <a href="${Urls[index]}">${title}</a></h3>
                <p class="text-gray-500">f you'd like to receive messages about upcoming talks, please subscribe to the
                    list by
                    sending an email to dsdsd-list-subscribe@cwi.nl.
                </p>
            </div>`;
      sectionHTML.innerHTML += card;
    });
    blockSearch.innerHTML = "";
    blockSearch.append(sectionHTML);
  }
};
btnSearch.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (loading) {
    const loader = `
      <div className="loadingContainer">
        <div className="loading">
          <span className="loadWords">Loading...</span>
          <span className="loading__anim"></span>
        </div>
      </div>`;

    blockSearch.innerHTML = loader;
    loading = false;
  }
  const search = valueContainer.value;
  fetchData(search);
});
