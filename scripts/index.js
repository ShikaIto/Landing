const checkbox = document.querySelector(".checkbox__input");
let theme = "light";

checkbox.addEventListener("click", () =>{
    if (theme === "light") {
        document.documentElement.style.setProperty("--color-bg-base", "#333");
        document.documentElement.style.setProperty("--color-dark", "#fff");
        document.documentElement.style.setProperty("--color-light", "#e5e5e5");
        document.documentElement.style.setProperty("--color-line", "707070");
        document.documentElement.style.setProperty("--color-bg-checkbox", "#545454");
        document.documentElement.style.setProperty("--color-bg-footer", "#2f2f2f");
        document.documentElement.style.setProperty("--color-copyright", "#565656");
        document.querySelector("#back-image").src = "./images/back-dark.svg";
        document.querySelector("#next-image").src = "./images/next-dark.svg";
        document.querySelector(".checkbox__ball").style.left = "23px";
        theme = "dark";
    } else {
        document.documentElement.style.setProperty("--color-bg-base", "f4f4f4");
        document.documentElement.style.setProperty("--color-dark", "#151515");
        document.documentElement.style.setProperty("--color-light", "#222222");
        document.documentElement.style.setProperty("--color-line", "d7d4d4");
        document.documentElement.style.setProperty("--color-bg-checkbox", "#fff");
        document.documentElement.style.setProperty("--color-bg-footer", "#efefef");
        document.documentElement.style.setProperty("--color-copyright", "#cfcfcf");
        document.querySelector("#back-image").src = "./images/back.svg";
        document.querySelector("#next-image").src = "./images/next.svg";
        document.querySelector(".checkbox__ball").style.left = "0";
        theme = "light";
    }
})