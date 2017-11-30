jQuery(document).ready(function(){
  anchors.add();

  // Search
  if(window.SimpleJekyllSearch !== undefined){
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/docs/search.json',
    });
  }

  // Fix bottom edit link
  var editLink = jQuery("a[href*='edit/master']");
  var bottomEdit = jQuery("a[href*='blob/gh-pages']");
  if(editLink.length && bottomEdit.length){
    bottomEdit.attr('href', editLink.attr('href'));
    editLink.hide();
  }

});
