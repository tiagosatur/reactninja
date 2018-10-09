import React, { Component } from 'react';
import ajax from '@fdaciuk/ajax'
import AppContent from './components/AppContent';
import './style/App.css';

/*

  *** Presentational/Dumb components
  Componentes que apenas apresentam as informações,
  não possuem e nem modificam estados, não sabem o que devem fazer.
  A única coisa que sabem é que devem renderizar propriedades

  *** Smart Components
  Possuem e manipulam estado

------ // ------


  *** EcmaScript 5 Bind ***
  Quando vc utiliza a sintaxe React.createClass do ES5, não é preciso declarar explicitamente o bind.
  O react faz o autobind pra você. Exemplo:

  const App = React.createClass({
      handleClick: function (e) {
        this.setState({})
      }

      render () {
      return <button onClick={this.handleClick}>Clique aqui</button>
      }
  })


  *** EcmaScript 6 ***
    É preciso fazer o bind manualmente dentro do constructor. Exemplo:
    this.handleSearh = this.handleSearch.bind(this)
    Por isso também é que se usa uma arrow function na hora de passar o método via props,
    pois ele realiza o bind. Ex: handleSearch={(e) => this.handleSearch(e)}


  *** Spread Operator
    const obj = {
      prop1: 1,
      prop2: 2,
      prop3: 3
    }

    const obj2 = { ...obj }

    console.log(obj2 === obj) //false, pois cria uma nova referência em memória

    É possível usar o spread operator para passar props para os componentes em JSX,
    e também como rest parameters em funções.

    const arr = [1, 2, 3]

    function sum(x, y, z) {
      return x + y + z;
    }

    sum(...arr) // 6
*/

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false,

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
			this.setState({isFetching: true})

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
						starred: [],
						isFetching: false,
          })
        })
				.always(() => this.setState({isFetching: false}))
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
        { ...this.state }
        handleSearch={(e) => this.handleSearch(e)}
				getRepos={this.getRepos('repos')}
				getStarred={this.getRepos('starred')}

      />
    );
  }
}

export default App;
