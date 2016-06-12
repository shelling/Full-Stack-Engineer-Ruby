window.Root = class Root extends React.Component {
  constructor(props) {
    super(props);
    _.merge(this, Mixin.Form);
    this.state = {
      keyword: "",
    };
  }

  render() {
    return <div id="root">
      <header>
        <img src="/images/marvel_logo.png" />
        <input type="search" name="keyword" value={this.state.keyword} onChange={this.change.bind(this)} placeholder="Search for marvel characters or teams..." />
      </header>
      <Comic.List keyword={this.state.keyword} />
    </div>;
  }
};
