import React,{useState} from 'react'

import './index.css'


function GoogleSuggestions({suggestionsList}) {

    const [searchInput,setSearchInput] = useState('');

    const onClickInput = event => {
        setSearchInput(event.target.value)
    }


    const clickArrow = (value) => {
        setSearchInput(value)
    }


    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container-1">
        <div className="google-suggestions-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="search-list-input-container">
            <div className="search-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                className="search-input"
                value={searchInput}
                placeholder="Search Google"
                onChange={onClickInput}
              />
            </div>
            <ul className="suggestion-list">
              {filteredSuggestionList.map((each) => (
                <li key={each.id} className="suggestion-item">
                 <p className="suggestion-name">{each.suggestion}</p>
                 <button className="arrow-button" type="button" onClick={()=>clickArrow(each.suggestion)}>
                   <img
                     src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
                     alt="arrow"
                     className="arrow-image"
                   />
                 </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default GoogleSuggestions;                                                                   