window.Favorite = (window.Favorite || {});
window.Favorite.create = function(params, success) {
  $.ajax("/favorites.json", {
    method: "POST",
    data: JSON.stringify(params),
    success: success,
  });
};
