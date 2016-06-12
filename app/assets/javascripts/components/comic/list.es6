window.Comic = (window.Comic || {});
window.Comic.List = class List extends React.Component {
  constructor(props) {
    super(props);
    _.merge(this, Mixin.Form);
    this.state = {
      page: 0,
      comics: [],
      typingcounter: 0,
    }
  }

  componentWillMount() {
    Comic.retrieve({ orderBy: "-modified" }, this.set.bind(this, "comics"));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.keyword != nextProps.keyword) {
      this.detectStop(500, this.search.bind(this), { target: { name: "keyword", value: nextProps.keyword } });
    }
  }

  search() {
    Character.retrieve({ nameStartsWith: this.state.keyword }, (data) => {
      let characters = _.slice(data.data.results.map((character) => { return character.id }), 0, 5).join(",");
      this.set("characters", characters);
      this.set("page", 0);
      Comic.retrieve({ orderBy: "-modified", offset: 0, characters: characters }, this.set.bind(this, "comics"));
    });
  }

  increment() {
    let page = this.get("page") + 1;
    this.set("page", page);
    let options = { orderBy: "-modified", offset: page * 20 };
    if (this.state.characters) { options.characters = this.state.characters }
    Comic.retrieve(options, this.set.bind(this, "comics"));
  }

  decrement() {
    let page = this.get("page") - 1;
    if (page >= 0) {
      this.set("page", page);
      let options = { orderBy: "-modified", offset: page * 20 };
      if (this.state.characters) { options.characters = this.state.characters }
      Comic.retrieve(options, this.set.bind(this, "comics"));
    }
  }

  markFavorite(comic, favorite) {
    this.replace("comics", comic, React.addons.update(comic, { favorited: { $set: true } }));
  }

  render() {
    return <div id="comics">
      {
        this.state.comics.map((comic) => {
          return <div key={comic.id} className="comic">
            { comic.favorited ? <img src="/images/heart_on.png" className="heart" /> : <img src="/images/heart_off.png" className="heart off" onClick={Favorite.create.bind(this, { favorite: { comic_id: comic.id } }, this.markFavorite.bind(this, comic))} /> }
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className={classNames("thumbnail", { favorited: comic.favorited })} />
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
