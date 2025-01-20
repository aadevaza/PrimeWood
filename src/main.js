// src/main.js
import "./styles/main.scss";
import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

document.addEventListener("DOMContentLoaded", () => {
  const swiperContainers = document.querySelectorAll(".showroom__images");
  swiperContainers.forEach((swiperContainer) => {
    new Swiper(swiperContainer, {
      slidesPerView: "auto",
      spaceBetween: 32,
      pagination: false,
      navigation: false,
      scrollbar: {
        el: swiperContainer.querySelector(".swiper-scrollbar"),
        draggable: true,
      },
      modules: [Scrollbar],
    });
  });

  const burgerBtn = document.querySelector(".header__burger-btn--open");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const overlay = document.querySelector(".header__overlay");
  const navList = document.querySelector(".header__nav-list");
  const mobileNavList = document.querySelector(".header__mobile-nav-list");
  const phone = document.querySelector(".header__phone--desktop a");

  if (burgerBtn && mobileMenu && overlay && navList && mobileNavList && phone) {
    const navItems = navList.querySelectorAll(".header__nav-item");
    navItems.forEach((item) => {
      mobileNavList.appendChild(item.cloneNode(true));
    });

    const phoneItem = document.createElement("li");
    phoneItem.classList.add("header__mobile-nav-item", "header__mobile-phone");
    phoneItem.appendChild(phone.cloneNode(true));
    mobileNavList.appendChild(phoneItem);

    burgerBtn.addEventListener("click", () => {
      toggleMobileMenu(burgerBtn, mobileMenu, overlay);
    });

    overlay.addEventListener("click", () => {
      closeMobileMenu(burgerBtn, mobileMenu, overlay);
    });

    const closeBtn = document.querySelector(".header__burger-btn--close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        closeMobileMenu(burgerBtn, mobileMenu, overlay);
      });
    }

    document.addEventListener("click", (event) => {
      if (
        !event.target.closest(".header__mobile-menu") &&
        !event.target.closest(".header__burger-btn")
      ) {
        closeMobileMenu(burgerBtn, mobileMenu, overlay);
      }
    });
  }

  const accordionButtons = document.querySelectorAll(
    ".footer__accordion-button"
  );
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.classList.toggle("active");
    });
  });
});

function toggleMobileMenu(burgerBtn, mobileMenu, overlay) {
  burgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeMobileMenu(burgerBtn, mobileMenu, overlay) {
  burgerBtn.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}
