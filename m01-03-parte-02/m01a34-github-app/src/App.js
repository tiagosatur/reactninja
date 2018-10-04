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
      starred: [],

    }
	}


	getGitHubApiUrl(username, type) {
		const treatedlUser = username ? `/${username}` : ''
		const treatedType = type ? `/${type}` : ''

		return `https://api.github.com/users${treatedlUser}${treatedType}`
	}

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if(keyCode === ENTER) {
      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              image: result.avatar_url,
              name: result.name,
              username: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
						repos: [],
						starred: []
          })
        })
    }
    console.log(keyCode)
  }

	getRepos(type) {
		// This function will return other function to the prop
		// We'll user arrow function so that we can use this.setState()
		return (e) => {
			const username = this.state.userinfo.username

			ajax().get(this.getGitHubApiUrl(username, type))
				.then((result) => {
					this.setState({
						[type]: result.map((repo) => ({
								name: repo.name,
								link: repo.html_url
						}))
					})
				})

				console.log('state -- ', this.state.userinfo.username)
        console.log('repos -- ', this.state.repos)
        console.log('starred -- ', this.state.starred)

		}
	}



  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
				getRepos={this.getRepos('repos')}
				getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
