window.Comic = (window.Comic || {});
window.Comic.retrieve = function(options, success) {
  $.ajax("/comics.json", {
    data: options,
    success: success,
  });
}
