import React from 'react'
import propTypes from 'prop-types'
import Search from './Search/Search';
import UserInfo from './UserInfo/UserInfo';
import Actions from './Actions/Actions';
import Repos from './Repos/Repos';
import Loading from './Loading/Loading';

const AppContent = ({
	userinfo,
	repos,
	starred,
	isFetching,
	handleSearch,
	getRepos,
	getStarred,
}) => (
  <div className="App">
      <div className='container'>

        <Search handleSearch={handleSearch} isDisabled={isFetching} />
				{isFetching && <Loading />}


        {/*
          Precisamos que esse valor seja transformado em booleano.
          Estamos passando null pelo state. Mas por acaso se for qualquer outro valor
          diferente de null (como um zero), esse valor será impresso na tela.
          Então é preciso, caso esse valor não seja booleano (true ou false),
          converter ele para booleano usando falsy, para depois fazer o teste de
          curto circuito
        */}
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {/* Repos será um array. Se não for passado será um array em branco (por isso o length) */}
				<div className='repos__container d-flex flex-column flex-row-sm justify-content-between'>
						{!!repos.length &&
								<Repos
			          className='repos p-01'
			          title='Repositories'
			          repos={repos}
			        />
						}

		        {!!starred.length &&
							<Repos
			          className='repos p-01'
			          title='Favorites'
			          repos={starred}
			        />
					}
				</div>

      </div>
  </div>
)

AppContent.propTypes = {
  userinfo: propTypes.object,
  repos: propTypes.array.isRequired,
  starred : propTypes.array.isRequired
}

export default AppContent
