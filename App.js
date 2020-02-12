import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Home from "./src/screens/containers/home";
import Header from "./src/sections/components/header";
import SuggestionList from "./src/videos/containers/suggestion-list";
import API from "./utils/api";
import CategoryList from "./src/videos/containers/category-list";
import Player from "./src/player/containers/player";

export default class App extends Component {

  state = {
    suggestionList: [],
    categoryList: [],
  }

  async componentDidMount() {
    const movies = await API.getSuggestion(8);
    const categories = await API.getMovies();
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }

  render(){
    return (
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <CategoryList
          list={this.state.categoryList}
        />
        <SuggestionList
          list={this.state.suggestionList}
        />
      </Home>
    );
  }
};