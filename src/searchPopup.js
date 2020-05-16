import React, { useState } from "react";
import { Route, Link, useLocation, Redirect } from "react-router-dom";
import "./styles/allStyles.scss";
import { allData } from './allData'

function SearchPopup(props) {

    let searchVisible = props.searchOpen ? { visibility: 'visible' } : { visibility: 'hidden' }

    function closeSearchPopup(event) {
        if (event.target === event.currentTarget) {
            props.closeSearchPopup()
            //Prevents bubbling to div inside for onclick event
        }
    }

    const [searchInput, updateSearchInput] = useState('');

    function updateSearchInputHandler(newText) {
        updateSearchInput(newText.target.value.toLowerCase())
    }



    let allDataFiltered = allData.filter((term) => {
        const termlowerCased = term[1].toLowerCase()
        const searchInputLowercased = searchInput.toLowerCase()
        return termlowerCased.includes(searchInputLowercased);
    })

    let formattedResults = []
    allDataFiltered.forEach((term) => {
        formattedResults.push(<Link key={term} onClick={closeSearchPopup} to={"/" + term[0] + '/' + term[1]} className='term'>{term[1]}</Link >)
    })

    if (formattedResults.length === allData.length) {
        formattedResults = <p style={{ textAlign: 'center' }}>Start Typing to see some results</p>
        //Handles before the user starts typing. Adds a p tag that tells them to start typing.
    } else if (formattedResults.length === 0)
        formattedResults = <p style={{ textAlign: 'center' }}>No Results</p>
    //Handles if there are no results. Adds a p tag that tells them there are no results.


    return (
        <div className='SearchPopup' onClick={closeSearchPopup} style={searchVisible}>
            <div className='SearchPopupContent'>
                <input className='searchBox' type="search" placeholder="Search" onChange={updateSearchInputHandler}></input>
                <div className='allDataFiltered'>
                    {formattedResults}
                </div>
            </div>
        </div>
    );
}

export default SearchPopup;
