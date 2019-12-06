import React from "react";
import ShowsContainer from "./ShowsContainer/ShowsConatiner";
import Pagination from "./Pagination/Pagination";
import SearchBar from "./SearchBar/SearchBar";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { page: 0, numberOfPages: 1};
  }

  setPage(page) {
    this.setState({ page });
  }

  setSearchValue(event) {
    const searchValue = event.target.value;
    this.setState({ searchValue });
  }

  setNumberOfPages(numberOfPages) {    
    if(this.state.numberOfPages !== numberOfPages){
      this.setState({ numberOfPages });
    }    
  }

  render() {
    console.log(this.state);

    return (
      <div id="mainPage">
        <SearchBar setSearchValue={event => this.setSearchValue(event)} />
        <ShowsContainer
          page={this.state.page}
          searchValue={this.state.searchValue}
          setNumberOfPages={numberOfPages =>
            this.setNumberOfPages(numberOfPages)
          }
        />
        <Pagination setPage={page => this.setPage(page)} numberOfPages={this.state.numberOfPages} />
      </div>
    );
  }
}

export default MainPage;
