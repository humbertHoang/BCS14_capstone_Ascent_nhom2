"use strict";
//  small device menu hide and show start
const offcanvaes = document.querySelectorAll(".offcanva");
const offcanvaTriggers = document.querySelectorAll(".offcanvaTrigger");
const offcanvaCloses = document.querySelectorAll(".offcanvaClose");
const offcanvaOverlays = document.querySelectorAll(".offcanva-overlay");

if (
  offcanvaes.length === 0 ||
  offcanvaTriggers.length === 0 ||
  offcanvaCloses.length === 0 ||
  offcanvaOverlays.length === 0
) {
  console.error("One or more required elements not found.");
} else {
  offcanvaTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      offcanvaes.forEach((offcanva) => {
        offcanva.classList.toggle("right-0", true);
        offcanva.classList.toggle("-right-full", false);
      });
      offcanvaOverlays.forEach((overlay) => {
        overlay.classList.toggle("visible", true);
        overlay.classList.toggle("invisible", false);
      });
    });
  });

  offcanvaCloses.forEach((close) => {
    close.addEventListener("click", () => {
      offcanvaes.forEach((offcanva) => {
        offcanva.classList.toggle("right-0", false);
        offcanva.classList.toggle("-right-full", true);
      });
      offcanvaOverlays.forEach((overlay) => {
        overlay.classList.toggle("visible", false);
        overlay.classList.toggle("invisible", true);
      });
    });
  });
}
//  small device menu hide and show end

//  DropDown menu start
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownItems = document.querySelectorAll(".dropdown-item");

if (dropdowns.length === 0 || dropdownItems.length === 0) {
  console.error("One or more required elements not found.");
} else {
  dropdowns.forEach((dropdownElement, dropdownIndex) => {
    dropdownElement.addEventListener("click", () => {
      dropdownItems.forEach((dropdownItemElement, itemIndex) => {
        const isActive = dropdownIndex === itemIndex;
        const isVisible = dropdownItemElement.classList.contains("opacity-100");

        dropdownItemElement.classList.toggle(
          "opacity-100",
          isActive && !isVisible,
        );
        dropdownItemElement.classList.toggle("visible", isActive && !isVisible);
        dropdownItemElement.classList.toggle(
          "max-h-[450px]",
          isActive && !isVisible,
        );

        dropdownItemElement.classList.toggle(
          "opacity-0",
          !isActive || isVisible,
        );
        dropdownItemElement.classList.toggle(
          "invisible",
          !isActive || isVisible,
        );
        dropdownItemElement.classList.toggle("max-h-0", !isActive || isVisible);
      });
    });
  });
}
//  dropdown menu end

// --------- sticky header on scroll start
const header = document.getElementById("header");
const headerContainer = document.getElementById("header-container");
const topHeader = document.getElementById("top-header");

if (!header || !headerContainer) {
  console.error("Header or header container not found.");
} else {
  let prevScrollPos = window.scrollY;
  let isHeaderPinned = false;
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerHeight = headerContainer.clientHeight;
    const topHeaderHeight = topHeader ? topHeader.clientHeight : 0;

    if (prevScrollPos > currentScrollPos && currentScrollPos > headerHeight) {
      header.style.top = `-${topHeaderHeight}px`;
      if (!isHeaderPinned) {
        header.classList.add("header-pinned");
        isHeaderPinned = true;
      }
    } else {
      header.style.top = `-${headerHeight}px`;
      if (isHeaderPinned) {
        header.classList.remove("header-pinned");
        isHeaderPinned = false;
      }
    }

    prevScrollPos = currentScrollPos;
  };

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const debouncedScroll = debounce(handleScroll, 10);

  window.addEventListener("scroll", debouncedScroll);
}

// --------- search filed toggle start
const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");
const searchClose = document.querySelector(".search-close");

if (searchBtn && searchForm && searchClose) {
  const showSearchForm = () => {
    searchForm.classList.remove("opacity-0", "invisible");
    searchForm.classList.add("opacity-100", "visible", "z-20");
  };

  const hideSearchForm = () => {
    searchForm.classList.remove("opacity-100", "visible", "z-20");
    searchForm.classList.add("opacity-0", "invisible");
  };

  searchBtn.addEventListener("click", showSearchForm);
  searchClose.addEventListener("click", hideSearchForm);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      hideSearchForm();
    }
  });
} else {
  console.error("One or more required elements not found.");
}
// --------- search filed toggle end

// scroll top top on button click start
const scroll_up = document.getElementById("scroll-up");
scroll_up.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
// scroll top top on button click end

// swiper js
const testimonial = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 30,
  breakpoints: {
    1280: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
  },
});

// wow js
new WOW().init();
