var elem = document.querySelector(".product-page-section__list");
var msnry = new Masonry(elem, {
  // options
  itemSelector: ".product-page-section__cards",
  columnWidth: ".product-page-section__cards",
  gutter: 15,
  horizontalOrder: true,
});

var elemSecond = document.querySelector(".second-masonry-list");
var msnrySecond = new Masonry(elemSecond, {
  itemSelector: ".second-masonry-cards",
  columnWidth: ".second-masonry-cards",
  gutter: 15,
  horizontalOrder: true,
});
