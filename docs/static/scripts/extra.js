// params

// var scrollPixels = 16;
var dim = "0.2";
var search_wait = 800;

// tracking vars

var search_is_open = false;
var tabs_are_open = false;
var just_clicked_icon = false;

// page elements

var h1 = document.querySelector("h1");
var logo = document.querySelector(".md-header__button.md-logo");
var header = document.querySelector(".md-header");
var nav_primary_sidebar = document.querySelector(".md-nav--primary");
var inner_content = document.querySelector(".md-content__inner");
var scrollwraps = document.querySelectorAll(".md-sidebar__scrollwrap");
var tabs = document.querySelectorAll(".md-tabs");
var tab_items = document.querySelectorAll(".md-tabs__item");
var tabs_list = document.querySelector(".md-tabs__list");
var header = document.querySelector(".md-header");
var header_inner = document.querySelector(".md-header__inner");
var quicklinks_container = document.querySelector(".md-quick");
var quicklinks = document.querySelectorAll(".md-quick__link");
var search = document.querySelector(".md-search");
var search_input = document.querySelector(".md-search__input");
var search_overlay = document.querySelector(".md-search__overlay ");
var content_container = document.querySelector(".md-container");

function default_layers() {
  console.log("set default layers");
  header.style["z-index"] = "0";
  inner_content.style["z-index"] = "1";
  content_container.style["z-index"] = "1";
}

function lift_header_layer() {
  header.style["z-index"] = "2";
}

function dim_content_container() {
  content_container.style.opacity = dim;
}

function brighten_content_container() {
  content_container.style.opacity = "1";
}

function dim_quicklinks() {
  quicklinks_container.style.filter = `brightness(${dim})`;
}

function bright_quicklinks() {
  quicklinks_container.style.filter = "brightness(1)";
}

function open_search() {
  lift_header_layer();
  search_input.focus();
  search_input.select();
  search.style["opacity"] = "1";
  dim_content_container();
  search.style["z-index"] = "1000";
  search_is_open = true;
}

function close_search() {
  search.style["z-index"] = "0";
  search.style["opacity"] = "0";
  search_input.blur();
  search.style["z-index"] = "0";
  brighten_content_container();
  default_layers();
  search_is_open = false;
}

function hasFocusVisible() {
  return document.querySelector(".focus-visible") !== null;
}

function checkShortcuts(event) {
  if (
    (event.metaKey || event.ctrlKey) &&
    event.key === "k" &&
    !search_is_open
  ) {
    open_search();
  } else if (
    (((event.metaKey || event.ctrlKey) && event.key === "k") ||
      event.keyCode == 27) &&
    search_is_open
  ) {
    close_search();
    just_clicked_icon = false;
  }
}

logo.addEventListener("mouseenter", function () {
  hoverTimer = setTimeout(function () {
    lift_header_layer();
    if (!search_is_open) {
      open_search();
      dim_content_container();
    }
  }, search_wait);
});

logo.addEventListener("mouseleave", function () {
  clearTimeout(hoverTimer);
});

header.addEventListener("mouseleave", function () {
  if (!search_is_open) {
    default_layers();
    hide_tabs();
    show_title();
    brighten_content_container();
  }
});

search_overlay.onclick = function () {
  if (just_clicked_icon || search_is_open || hasFocusVisible()) {
    close_search();
    hide_tabs();
    show_title();
    just_clicked_icon = false;
  }
};

if (quicklinks.length > 0) {
  quicklinks.forEach(function (link) {
    link.addEventListener("mouseover", function () {
      lift_header_layer();
      dim_content_container();
    });
    link.addEventListener("mouseout", function () {
      default_layers();
      brighten_content_container();
    });
  });
}

document.onkeydown = checkShortcuts;

document.addEventListener("DOMContentLoaded", function () {
  default_layers();
});
