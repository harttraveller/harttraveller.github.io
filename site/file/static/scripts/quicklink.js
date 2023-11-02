// javascript script such that when the user hovers on the class: '.md-quick__link'
// the opacity of '.md-content' changes to 0.1, and back to 1 when the user is no longer hovering

var dim = "0.2";

document.addEventListener('DOMContentLoaded', function () {
  // get all the elements with the class '.md-quick__link'
  let quickLinks = document.querySelectorAll('.md-quick__link')

  // check if any '.md-quick__link' elements are present
  if (quickLinks.length > 0) {
    // get the element with the class '.md-content'
    let mdContent = document.querySelector('.md-content')
    let sidebars = document.querySelectorAll('.md-sidebar__scrollwrap')

    // loop through each '.md-quick__link' element
    quickLinks.forEach(function (link) {
      // add event listener for mouseover (hover) event
      link.addEventListener('mouseover', function () {
        mdContent.style.opacity = dim;
        sidebars.forEach(function (sidebar) {
            sidebar.style.opacity = dim;
        })
      })

      // add event listener for mouseout (no longer hovering) event
      link.addEventListener('mouseout', function () {
        mdContent.style.opacity = '1';
        sidebars.forEach(function (sidebar) {
          sidebar.style.opacity = "1";
      })
      })
    })
  }
})
