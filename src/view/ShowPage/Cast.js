import React from "react";
import ActorCardGrid from "./ActorCardGrid";
import ActorCardList from "./ActorCardList";

class Cast extends React.Component {
  constructor({ cast }) {
    super();
    this.cast = cast;
    this.state = {
      layoutIsGrid: true
    };
  }

  toggleLayout() {
    this.setState({ layoutIsGrid: !this.state.layoutIsGrid });
  }

  render() {
    if (this.state.layoutIsGrid) {
      return (
        <div className="col s12">
          <div id="cast">
            <span>Cast:</span>
            <div onClick={() => this.toggleLayout()}> <i class="fas fa-list-ul"></i></div>
          </div>

          <div className="row">
            {this.cast.map((actor, key) => (
              <ActorCardGrid ket={key} actor={actor} />
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="col s12">
        <div id="cast">
          <span>Cast:</span>
          <div onClick={() => this.toggleLayout()}> <i class="fas fa-grip-horizontal"></i></div>
        </div>
        <ul className="collection list">
          {this.cast.map((actor, key) => (
            <ActorCardList ket={key} actor={actor} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Cast;
