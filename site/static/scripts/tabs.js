// var scrollPixels = 16
var dim = "0";

document.addEventListener('DOMContentLoaded', function () {
  setInterval(manage_tabs, 100)
})

function manage_tabs () {
  var tabs = document.querySelectorAll('.md-tabs__item')
  var sidebars = document.querySelectorAll('.md-sidebar__scrollwrap')
  var logo = document.querySelector('.md-header__button.md-logo')
  var header = document.querySelector('.md-header')
  var quicklinks = document.querySelector('.md-quick')
  // window.addEventListener('scroll', function () {
  //     if (window.scrollY > scrollPixels) {
  //         hide_navigation(tabs, quicklinks);
  //     } else {
  //         show_navigation(tabs, quicklinks, false);
  //     };
  // })
  // logo.addEventListener('mouseenter', function() {
  //     if (window.scrollY > scrollPixels) {
  //         show_navigation(tabs, quicklinks, true)
  //         header.style["z-index"] = "1000000";
  //     }
  // });
  // header.addEventListener('mouseleave', function () {
  //     if (window.scrollY > scrollPixels) {
  //         hide_navigation(tabs, quicklinks)
  //         header.style["z-index"] = "0";
  //     }
  // });
  logo.addEventListener('mouseenter', function () {
    show_navigation(tabs, sidebars, quicklinks, true);
    header.style['z-index'] = '1000000';
  })
  header.addEventListener('mouseleave', function () {
    hide_navigation(tabs, sidebars, quicklinks);
    header.style['z-index'] = '0';
  })
}

function hide_navigation (tabs, sidebars, quicklinks) {
  tabs.forEach(async function (tab, _) {
    tab.style.opacity = '0'
  })
  sidebars.forEach(async function (sb, _) {
    sb.style.opacity = '1'
  })
  // quicklinks.style.filter = "brightness(0.5)";
  var content = document.querySelector('.md-content__inner')
  var sidebar = document.querySelector('.md-sidebar--primary')
  content.style.opacity = '1'
  sidebar.style.opacity = '1'
}

function show_navigation (tabs, sidebars, quicklinks, darken) {
  tabs.forEach(async function (tab, _) {
    tab.style.opacity = '1'
  })
  sidebars.forEach(async function (sb, _) {
    sb.style.opacity = '0'
  })
  // quicklinks.style.filter = "brightness(1)"
  if (darken == true) {
    var content = document.querySelector('.md-content__inner')
    var sidebar = document.querySelector('.md-sidebar--primary')
    content.style.opacity = dim;
    sidebar.style.opacity = dim;
  }
}
