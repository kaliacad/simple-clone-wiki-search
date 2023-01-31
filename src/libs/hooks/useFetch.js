import { useEffect, useState } from "react";

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
export function useFetch(url) {
  const [state, setState] = useState({
    items: [],
    loading: true,
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        if (response.ok) {
          setState((d) => ({ ...d, loading: false, items: responseData }));
        } else {
          setState((d) => ({ ...d, loading: false }));
        }
      } catch (error) {
        console.log(error);
        setState((d) => ({ ...d, loading: false }));
      }
    })();
  }, [state.loading]);
}
