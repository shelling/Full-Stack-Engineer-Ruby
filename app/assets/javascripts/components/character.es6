window.Character = (window.Character || {});
window.Character.retrieve = function(options, success) {
  $.ajax(`${Marvel.gateway}/v1/public/characters`, {
    data: _.merge(options, { apikey: Marvel.apikey }),
    success: success,
  });
};
