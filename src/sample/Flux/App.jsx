import React from "react";
import Header from "./comps/Header";
import List from "./comps/List";

class App extends React.PureComponent {
  render() {
    return (
        <div>
          <Header/>
          <List/>
        </div>
    );
  }
}

export default App;
