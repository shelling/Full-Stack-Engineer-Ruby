window.Comic = (window.Comic || {});
window.Comic.List = class List extends React.Component {
  constructor(props) {
    super(props);
    _.merge(this, Mixin.Form);
    this.state = {
      page: 0,
      comics: [],
    }
  }

  componentWillMount() {
    Comic.retrieve.bind(this)({});
  }

  increment() {
    let page = this.get("page") + 1;
    this.set("page", page);
    Comic.retrieve.bind(this)({ offset: page * 20 });
  }

  decrement() {
    let page = this.get("page") - 1;
    if (page >= 0) {
      this.set("page", page);
      Comic.retrieve.bind(this)({ offset: page * 20 });
    }
  }

  render() {
    return <div id="comics">
      {
        this.state.comics.map((comic) => {
          return <div key={comic.id} className="comic">
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
          </div>
        })
      }
      <div id="pages">
        <a href="javascript:void(0)" className="previous page" onClick={this.decrement.bind(this)}>PREVIOUS PAGE</a>
        <a href="javascript:void(0)" className="next page" onClick={this.increment.bind(this)}>NEXT PAGE</a>
      </div>
    </div>;
  }
};
