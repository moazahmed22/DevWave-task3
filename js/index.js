import data from "./moives.js";
const { movies, comingSoon } = data;
const moviesContainer = document.querySelector("#moviesContainer");
const comingSoonContainer = document.querySelector("#comingSoonContainer");
const navBar = document.querySelector("header");
let content = ``;

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

const movieSectionFiller = () => {
  movies.map((movie) => {
    content += `<div class="inner d-flex flex-column">
            <div class="image-container mb-2">
              <img
                src=${movie.image}
                alt=""
                class="object-fit-cover w-100 h-100"
              />
            </div>
            <h3 class="fs-6 text-capitalize text-accent fw-medium mb-0">
              ${movie.title}
            </h3>
            <p class="mb-0">
              <span> <span class="">${movie.duration}</span><span>min</span> </span>
              <span> | </span><span class="text-capitalize">${movie.category}</span>
            </p>
          </div>`;
  });

  moviesContainer.innerHTML = content;
  content = ``;
};
const comingSoonSectionFiller = () => {
  comingSoon.map((movie) => {
    content += `<div class="inner d-flex flex-column">
            <div class="image-container mb-2">
              <img
                src=${movie.image}
                alt=""
                class="object-fit-cover w-100 h-100"
              />
            </div>
            <h3 class="fs-6 text-capitalize text-accent fw-medium mb-0">
              ${movie.title}
            </h3>
            <p class="mb-0">
              <span> <span class="">${movie.duration}</span><span>min</span> </span>
              <span> | </span><span class="text-capitalize">${movie.category}</span>
            </p>
          </div>`;
  });

  comingSoonContainer.innerHTML = content;
  content = ``;
};

movieSectionFiller();
comingSoonSectionFiller();
