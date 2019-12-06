import React from "react";

class Pagination extends React.Component {
  constructor({ numberOfPages, setPage }) {
    super();
    this.state = { numberOfPages };
    this.setPage = setPage;
  }
  componentWillReceiveProps({ numberOfPages }) {
    if(numberOfPages > 5){
      numberOfPages = 5;
    }
    this.setState({ numberOfPages });
  }

  render() {
    return (
      <ul className="pageNumbers">
        {[...Array(this.state.numberOfPages).keys()].map(i => (
          <li
            onClick={() => this.setPage(i)}
            className="btn-floating btn-large waves-effect waves-light pagi"
            key={i}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    );
  }
}
export default Pagination;
