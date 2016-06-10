window.Comic = (window.Comic || {});
window.Comic.List = class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
    }
  }

  componentWillMount() {
    Comic.retrieve.bind(this)({});
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
    </div>;
  }
};
