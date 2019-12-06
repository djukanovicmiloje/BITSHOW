import React from "react";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";
import Shows from "./Shows/Shows";
import fetchShows from "../../../services/fetchShows";
import fetchShowsByQuery from "../../../services/fetchShowsByQuery";

const showPerPage = 8;

class ShowsContainer extends React.Component {
  constructor({ page, setNumberOfPages }) {
    super();
    this.page = page;
    this.setNumberOfPages = setNumberOfPages;
    this.state = {
      loading: true
    };
  }

  async getShows() {
    const shows = await fetchShows();
    this.allShows = shows;
    this.setNumberOfPages(parseInt(this.allShows.length / showPerPage) + 1);    
    this.setShowPage();
  }

  async getSearchedShows(searchValue) {
    const shows = await fetchShowsByQuery(searchValue);
    this.allShows = shows;
    this.setNumberOfPages(parseInt(this.allShows.length / showPerPage) + 1);
    this.setShowPage();
  }

  setShowPage() {
    const showsPage = this.allShows.filter(
      (show, index) =>
        this.page * showPerPage <= index &&
        index < (this.page + 1) * showPerPage
    );
    this.setState({ loading: false, showsPage });
  }

  componentDidMount() {
    this.getShows();
  }

  componentWillReceiveProps({ page, searchValue }) {
    this.page = page;

    if (searchValue) {
      this.getSearchedShows(searchValue);
    } else {
      this.getShows();
    }
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    }

    return <Shows shows={this.state.showsPage} />;
  }
}
export default ShowsContainer;
