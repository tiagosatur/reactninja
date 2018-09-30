import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
  <div className='search p-05 mb-02'>
    <input
      type="text"
      placeholder='Which GitHub user are you looking for?'
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

      }}
    />
  </div>
)


export default Search
