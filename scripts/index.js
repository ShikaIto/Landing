const checkbox = document.querySelectorAll(".checkbox__input");
let theme = "light";

const bikesHighway = [
  {
    name: "Cervelo Caledonia 5",
    link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
    image: "./images/Caledonia-5.png",
  },
  {
    name: "Cannondale Systemsix Himod",
    link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
    image: "./images/Himod.png",
  },
  {
    name: "Trek Domane SL-7",
    link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
    image: "./images/SL-7.png",
  },
];

const bikesOffRoad = [
  {
    name: "Cervelo Aspero GRX 810",
    link: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE",
    image: "./images/GRX810.png",
  },
  {
    name: "Specialized S-Works Diverge",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9",
    image: "./images/Diverge.png",
  },
  {
    name: "Cannondale Topstone Lefty 3",
    link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",
    image: "./images/Lefty3.png",
  },
];

const bikesPlain = [
  {
    name: "Specialized S-Works Shiv",
    link: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9",
    image: "./images/Shiv.png",
  },
  {
    name: "BMC Timemachine 01 ONE",
    link: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835",
    image: "./images/ONE.png",
  },
  {
    name: "Cervelo P-Series",
    link: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q",
    image: "./images/P-Series.png",
  },
];

const btnHighway = document.querySelector("#highway");
const btnOffRoad = document.querySelector("#offRoad");
const btnPlain = document.querySelector("#plain");
const cardsContainer = document.querySelector("#cards-container");
const select = document.querySelector(".bicycles__select");
const option = document.querySelectorAll(".bicycles__option");
const popup = document.querySelector(".popup");

function openClosePopup(popup) {
  popup.classList.toggle("popup_active");
}

function createCard(name, link, image) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".bicycles__image-container").cloneNode(true);
  cardElement.querySelector(".bicycles__image").setAttribute("alt", name);
  cardElement.querySelector(".bicycles__image").setAttribute("src", image);
  cardElement.querySelector(".bicycles__caption").textContent = name;
  cardElement.querySelector(".bicycles__image").addEventListener("click", () => {
    window.location.href = link;
  });
  return cardElement;
}

function addCard(container, element) {
  container.append(element);
}

document.querySelector(".header__menu").addEventListener("click", () => {
  openClosePopup(popup);
});

document.querySelector(".popup__close").addEventListener("click", () => {
  openClosePopup(popup);
});

bikesHighway.forEach((elem) => {
  addCard(cardsContainer, createCard(elem.name, elem.link, elem.image));
});

select.addEventListener("change", (evt) => {
  switch(evt.target.value) {
    case "highway": btnHighway.click(); break;
    case "offRoad": btnOffRoad.click(); break;
    case "plain": btnPlain.click(); break;
  }
});

btnHighway.addEventListener("click", () => {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  bikesHighway.forEach((elem) => {
    addCard(cardsContainer, createCard(elem.name, elem.link, elem.image));
  });
  btnHighway.classList.add("bicycles__surface_active");
  btnOffRoad.classList.remove("bicycles__surface_active");
  btnPlain.classList.remove("bicycles__surface_active");
  option.forEach((elem) => {
    elem.removeAttribute("selected");
    if (elem.value === "highway") {
      elem.setAttribute("selected", true);
    }
  });
});

btnOffRoad.addEventListener("click", () => {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  bikesOffRoad.forEach((elem) => {
    addCard(cardsContainer, createCard(elem.name, elem.link, elem.image));
  });
  btnHighway.classList.remove("bicycles__surface_active");
  btnOffRoad.classList.add("bicycles__surface_active");
  btnPlain.classList.remove("bicycles__surface_active");
  option.forEach((elem) => {
    elem.removeAttribute("selected");
    if (elem.value === "offRoad") {
      elem.setAttribute("selected", true);
    }
  });
});

btnPlain.addEventListener("click", () => {
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }
  bikesPlain.forEach((elem) => {
    addCard(cardsContainer, createCard(elem.name, elem.link, elem.image));
  });
  btnHighway.classList.remove("bicycles__surface_active");
  btnOffRoad.classList.remove("bicycles__surface_active");
  btnPlain.classList.add("bicycles__surface_active");
  option.forEach((elem) => {
    elem.removeAttribute("selected");
    if (elem.value === "plain") {
      elem.setAttribute("selected", true);
    }
  });
});

checkbox.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (theme === "light") {
      document.documentElement.style.setProperty("--color-bg-base", "#333");
      document.documentElement.style.setProperty("--color-dark", "#fff");
      document.documentElement.style.setProperty("--color-light", "#e5e5e5");
      document.documentElement.style.setProperty("--color-line", "#707070");
      document.documentElement.style.setProperty("--color-bg-checkbox","#545454");
      document.documentElement.style.setProperty("--color-bg-footer", "#2f2f2f");
      document.documentElement.style.setProperty("--color-copyright", "#565656");
      document.querySelector("#back").style.backgroundImage = "url('./images/back-dark.svg')";
      document.querySelector("#next").style.backgroundImage = "url('./images/next-dark.svg')";
      document.querySelectorAll(".checkbox__ball").forEach((elem) => {
        elem.style.left = "23px";
      });
      theme = "dark";
    } else {
      document.documentElement.style.setProperty("--color-bg-base", "#f4f4f4");
      document.documentElement.style.setProperty("--color-dark", "#151515");
      document.documentElement.style.setProperty("--color-light", "#222222");
      document.documentElement.style.setProperty("--color-line", "#d7d4d4");
      document.documentElement.style.setProperty("--color-bg-checkbox", "#fff");
      document.documentElement.style.setProperty("--color-bg-footer", "#efefef");
      document.documentElement.style.setProperty("--color-copyright", "#cfcfcf");
      document.querySelector("#back").style.backgroundImage = "url('./images/back.svg')";
      document.querySelector("#next").style.backgroundImage = "url('./images/next.svg')";
      document.querySelectorAll(".checkbox__ball").forEach((elem) => {
        elem.style.left = "0";
      });
      theme = "light";
    }
  });
});

