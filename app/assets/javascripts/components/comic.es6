window.Comic = (window.Comic || {});
window.Comic.retrieve = function(options) {
  $.ajax(`${Marvel.gateway}/v1/public/comics`, {
    data: _.merge(options, { apikey: Marvel.apikey }),
    success: (comics) => {
      this.setState(React.addons.update(this.state, { comics: { $set: comics.data.results } }))
    },
  });
}
