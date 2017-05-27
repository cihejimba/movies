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
    return (
      <div id="home">
        {this.props.upcoming.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  upcoming: store.home.upcoming,
});

export default connect(mapStateToProps, actions)(Home);
