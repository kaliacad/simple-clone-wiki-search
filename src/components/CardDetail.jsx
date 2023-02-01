import React from "react";

const CardDetail = ({ Urls, index, title }) => {
  return (
    <div class="card mt-5">
      <a href="${Urls[index]}" class="text-gray-800">
        ${Urls[index]}
      </a>
      <h3 class="text-blue-800 mt-3">
        <a href="${Urls[index]}">${title}</a>
      </h3>
      <p class="text-gray-500">
        f you'd like to receive messages about upcoming talks, please subscribe
        to the list by sending an email to dsdsd-list-subscribe@cwi.nl.
      </p>
    </div>
  );
};

export default CardDetail;
