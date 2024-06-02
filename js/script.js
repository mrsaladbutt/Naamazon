var elem = document.querySelector(".product-page-section__list");
var msnry = new Masonry(elem, {
  // options
  itemSelector: ".product-page-section__cards",
  columnWidth: ".product-page-section__cards",
  gutter: 15,
  horizontalOrder: true,
});
