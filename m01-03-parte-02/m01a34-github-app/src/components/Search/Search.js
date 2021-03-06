import React from 'react'
import propTypes from 'prop-types'
import './search.css'
// import ajax from '@fdaciuk/ajax'

const Search = ({ handleSearch, isDisabled }) => (
  <div className='search p-05 mb-02'>
    <input
      type="text"
      placeholder='Which GitHub user are you looking for?'
      onKeyUp={handleSearch}
      disabled={isDisabled}
      /*
        Quem gerencia nossa aplicação é o App.js, logo, o componente Search deve
        só receber tudo via props

        onKeyUp={(e) => {
          const value = e.target.value
          const keyCode = e.which || e.keyCode
          const ENTER = 13
          if(keyCode === ENTER) {
            ajax().get(`https://api.github.com/users/${value}`)
              .then((result) => {
                console.log(result)
              })
          }
          console.log(keyCode)

        }}*/
    />
  </div>
)

Search.propTypes = {
  handleSearch: propTypes.func.isRequired,
  isDisabled: propTypes.bool.isRequired
}

export default Search
