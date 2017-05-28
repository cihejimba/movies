import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Movie from '../movie/movie';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import './home.css';

export class Home extends Component {
  componentDidMount() {
    this.props.getUpcomingMovies();
  }

  render() {
    const movies = (
      <CSSTransitionGroup
          transitionName="movies-transition"
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          transitionAppear={true}>
        <div id="movies">
          {this.props.upcoming.map(movie => <Movie movie={movie} key={movie.id} />)}
        </div>
      </CSSTransitionGroup>
    );

    return (
      <div id="home">
        {this.props.upcoming.length ? movies : null}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  upcoming: store.home.upcoming,
});

export default connect(mapStateToProps, actions)(Home);
