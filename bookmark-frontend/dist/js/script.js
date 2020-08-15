function menu() {
  const menuMobile = document.querySelector(".header__menu-mobile");
  const logo = document.querySelector(".header__logo");
  const overlay = document.querySelector(".header__menu-overlay");

  function callback() {
    if (menuMobile.classList.contains("open")) {
      logo.classList.remove("open");
      overlay.classList.remove("open");
      menuMobile.classList.remove("open");
    } else {
      menuMobile.classList.add("open");
      logo.classList.add("open");
      overlay.classList.add("open");
    }
  }

  menuMobile.addEventListener("click", callback);
}
menu();

function tab() {
  const tabLinks = document.querySelectorAll(".js-tabmenu a");
  const tabContent = document.querySelectorAll(
    ".js-tabcontent .features__content",
  );
  tabContent[0].classList.add("active");
  tabLinks[0].classList.add("active");

  function activeTab(index) {
    event.preventDefault();
    tabContent.forEach((content) => {
      content.classList.remove("active");
    });
    tabLinks.forEach((content) => {
      content.classList.remove("active");
    });
    tabContent[index].classList.add("active");
    tabLinks[index].classList.add("active");
  }

  tabLinks.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
tab();

const allHash = document.querySelectorAll("a");

allHash.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const accordion = document.querySelectorAll(".js-accordion div");

function callback() {
  this.classList.toggle("active");
}

accordion.forEach((element) => {
  element.addEventListener("click", callback);
});

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(document.querySelectorAll("*"), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el);
//   }
// });
