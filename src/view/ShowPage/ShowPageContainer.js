import React from "react";
import fetchSingleShow from "../../services/fetchSingleShow";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ShowPage from "./ShowPage";

class ShowPageContainer extends React.Component {
  constructor(props) {
    super();
    this.id = props.match.params.id;
    this.state = {
      loading: true
    };
  }
  async getShow() {
    const show = await fetchSingleShow(this.id);
    this.setState({ show, loading: false });
  }
  componentDidMount(){
      this.getShow();
  }
  render(){
      if(this.state.loading){
          return <LoadingScreen />
      }
      return <ShowPage show={this.state.show}/>
  }
}
export default ShowPageContainer;
