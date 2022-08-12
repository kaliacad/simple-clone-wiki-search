const btnSearch = document.getElementById("btn-search");
const langues = ["sw", "fr", "ln", "en"];
btnSearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  const valueContainer = document.getElementById("search-input");
  console.log(valueContainer);
  const search = valueContainer.value;
  const url = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${search}&limit=15`;
  fetch(url)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      const [contentSearch, titles, contents, Urls] = data;
      titles.forEach((title, index) => {
        const blockSearch = document.getElementById("block-search");
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
        blockSearch.innerHTML += card;
      });
    });
});
