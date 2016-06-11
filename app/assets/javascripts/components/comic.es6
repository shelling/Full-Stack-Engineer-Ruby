window.Comic = (window.Comic || {});
window.Comic.retrieve = function(options) {
  $.ajax("/comics.json", {
    data: options,
    success: this.set.bind(this, "comics"),
  });
}
