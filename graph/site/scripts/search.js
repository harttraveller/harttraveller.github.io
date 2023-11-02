function hasFocusVisible() {
    // if nothing related to the search is selected, close it
    // this addresses issue wherein if you search for a heading on the page, and go to it
    // the search does not actually close because the page does not reload
    return document.querySelector('.focus-visible') !== null;
}

function openSearch() {
    console.log("open search")
    search_input.focus()
    search_input.select()
    header.style["z-index"] = "10000";
    search.style["z-index"] = "1000";
    search.style["opacity"] = "1";
    quick_search_open = true;
}

function closeSearch() {
    console.log("close search")
    header.style["z-index"] = "999";
    search["z-index"] = "0";
    search.style["opacity"] = "0";
    search_input.blur()
    quick_search_open = false;

}

function checkShortcuts(event) {
    if (((event.metaKey || event.ctrlKey) && event.key === 'k') && (!quick_search_open)) {
        // quick_search_open = true;
        openSearch()
    } else if ((((event.metaKey || event.ctrlKey) && event.key === 'k') || (event.keyCode == 27)) && (quick_search_open)) {
        // quick_search_open = false;
        closeSearch();
    }
}

// replace - use slash key
// fixme: autofills slash
// function checkShortcuts(event) {
//     if ((event.key === '/') && (!quick_search_open)) {
//         openSearch()
//     } else if (((event.key === '/') || (event.keyCode == 27)) && (quick_search_open)) {
//         closeSearch();
//     }
// }

var search = document.querySelector('.md-search')
var search_input = document.querySelector('.md-search__input')
var search_overlay = document.querySelector(".md-search__overlay")
var header = document.querySelector('.md-header')

var quick_search_open = false;

document.onkeydown = checkShortcuts

search_overlay.onclick = function () {
    closeSearch()
}


// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
    if (!hasFocusVisible()) {
        closeSearch();
    }
});

// Start observing the entire document and its descendants for modifications
observer.observe(document, {
    attributes: true,
    childList: true,
    subtree: true,
    attributeFilter: ['class'] // Only observe changes in class attribute
});