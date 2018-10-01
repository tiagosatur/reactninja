import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax'
import AppContent from './components/AppContent';
import './App.css';

/*
** Presentational/Dumb components
Componentes que apenas apresentam as informações,
 não possuem e nem modificam estados, não sabem o que devem fazer.
 A única coisa que sabem é que devem renderizar propriedades

Smart Components
  Possuem e manipulam estado

*/


class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      stared: [],

    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if(keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              image: result.avatar_url,
              name: result.name,
              username: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            }
          })
        })
    }
    console.log(keyCode)
  }

	getRepos(type) {
		// This function will return other function to the prop
		// We'll user arrow function so that we can use this.setState()
		return (e) => {

			console.log(type)

			ajax().get(`https://api.github.com/users/${this.state.userinfo.username}/${type}`)
				.then((result) => {
					this.setState({
						[type]: [{
							id: result[0].id,
							name: result[0].name,
							link: result[0].html_url
						}]
					})
				})
		}
	}



  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.stared}
        handleSearch={(e) => this.handleSearch(e)}
				getRepos={this.getRepos('repos')}
				getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
