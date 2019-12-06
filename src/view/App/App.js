import React, { Component } from "react";
import MainPage from "../MainPage/MainPage";
import { Switch, Route } from "react-router-dom";
import ShowPageContainer from "../ShowPage/ShowPageContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/show/:id" component={ShowPageContainer} />
          <Route path="/" component={MainPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
