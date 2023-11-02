// document.addEventListener('DOMContentLoaded', function () {
//     setInterval(manage_tabs, 200);
// })

// function manage_tabs() {
//     var tabs = document.querySelectorAll(".md-tabs__item")
//     var logo = document.querySelector('.md-header__button.md-logo')
//     var header = document.querySelector('.md-header')
//     window.addEventListener('scroll', function () {
//         if (window.scrollY > 50) {
//             collapse_tabs(tabs)
//         } else {
//             expand_tabs(tabs)
//         };
//     })
//     logo.addEventListener('mouseenter', function() {
//         if (window.scrollY > 50) {
//             expand_tabs(tabs, true)
//         }
//     });
//     header.addEventListener('mouseleave', function () {
//         if (window.scrollY > 50) {
//             collapse_tabs(tabs)
//         }
//     });
// }

// function collapse_tabs(tabs) {
//       tabs.forEach(function (tab, i) {
//         tab.style.opacity = '0';
//     })
//     var content = document.querySelector(".md-content__inner");
//     content.style.opacity = "1";
// };

// function expand_tabs(tabs, darken) {
//     tabs.forEach(function (tab, i) {
//         tab.style.opacity = '1'
//     });
//     if (darken==true) {
//         var content = document.querySelector(".md-content__inner");
//         content.style.opacity = "0.3";
//     }
// };