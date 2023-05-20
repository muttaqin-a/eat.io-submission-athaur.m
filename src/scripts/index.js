import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";

import("../DATA.json").then(({ default: jsonData }) => {
  console.log(jsonData);
  let datas = jsonData["restaurants"];
  let dataList = "";
  datas.forEach(function (data) {
    dataList += `
            <article class="resto-item">
              <img class="resto-item-thumbnail" src="${data["pictureId"]}" alt="Gambar Kafe ${data["name"]}" title="${data["name"]}" />
              <div class="city">${data["city"]}</div>
              <div class="resto-item-content">
                <p class="rating">
                <i class="fa fa-star fa-lg"></i>
                <span href="#" class="rating">${data["rating"]}</span>
                </p>
                <h1 class="resto-item-title"><a href="#">${data["name"]}</a></h1>
                <p class="resto-item-description">${data["description"].slice(0, 170)}...</p>
              </div>
            </article>
          `;
  });
  document.querySelector("#list").innerHTML = dataList;
});

const menutoggleElement = document.querySelector(".menu_toggle");
const headernavElement = document.querySelector(".header-nav");
const bodyElement = document.querySelector("body");

menutoggleElement.addEventListener("click", (event) => {
  headernavElement.classList.toggle("open");
  event.stopPropagation();
});

bodyElement.addEventListener("click", (event) => {
  headernavElement.classList.remove("open");
  event.stopPropagation();
});
