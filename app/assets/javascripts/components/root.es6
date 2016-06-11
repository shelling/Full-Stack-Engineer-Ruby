window.Root = class Root extends React.Component {
  render() {
    return <div id="root">
      <header>
        <img src="/images/marvel_logo.png" />
        <input type="search" placeholder="Search for marvel characters or teams..." />
      </header>
      <Comic.List />
    </div>;
  }
};
