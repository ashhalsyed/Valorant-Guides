import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/allStyles.scss";
import { allData } from './allData'

function SearchPopup(props) {

    // let searchVisible = props.searchOpen ? { opacity: '1.0' } : { opacity: '0.2' }

    let searchVisible = props.searchOpen ? { visibility: 'visible' } : { visibility: 'hidden' }

    let searchVisibleBoxBefore = { opacity: '1.0', transform: 'scale(0.95)' }
    let searchVisibleBoxAfter = { opacity: '1.0', transform: 'scale(1)' }

    let searchVisibleBox = props.searchOpen ? searchVisibleBoxAfter : searchVisibleBoxBefore

    function closeSearchPopup(event) {
        if (event.target === event.currentTarget) {
            props.closeSearchPopup()
            //Prevents bubbling to div inside for onclick event
            //Useful if user wants to click outside of searchbox
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

        //DOESNT WORK WITH 'CLASSIC' IF YOU TYPE IN 'LASSI'

        var termFormatted = term[1].toLowerCase().replace(searchInput.toLowerCase(), '[CustomPlaceholder]')
        termFormatted = termFormatted.split('[CustomPlaceholder]')

        console.log('termformatted', termFormatted)

        if (termFormatted.length >= 2) {
            var termFormattedJSX = []
            termFormatted.forEach(((item) => {
                termFormattedJSX.push(<pre className='termContent'>{item}</pre>)
                if (item !== termFormatted[termFormatted.length - 1]) {
                    termFormattedJSX.push(<strong className='termContent bold'>{searchInput.toLowerCase()}</strong>)

                }
            }))
            if (termFormatted[0] === '' && termFormatted[1] === '') {
                console.log('doing this')
                termFormattedJSX = <strong className='termContent bold'>{term[1].toLowerCase()}</strong>
            }
            termFormatted = termFormattedJSX
        }

        console.log('dingus', termFormattedJSX)
        formattedResults.push(
            <Link key={term} onClick={closeSearchPopup} to={"/" + term[0] + '/' + term[1]} className='term'>{termFormatted}
            </Link >
        )
    })


    if (formattedResults.length === allData.length) {
        formattedResults = <p className='emptyDataText' >Start Typing to see results</p>
        //Handles before the user starts typing. Adds a p tag that tells them to start typing.
    } else if (formattedResults.length === 0) {
        formattedResults = <p className='emptyDataText'>No Results</p>
        //Handles if there are no results. Adds a p tag that tells them there are no results.
        if (searchInput.length >= 40) {
            formattedResults = <p className='emptyDataText'>Still No Results</p>
            //Handles if the user is spamming. Adds a p tag that tells them there are no results.
        }
    }

    console.log(searchInput.length)

    return (
        <div onClick={closeSearchPopup} className='SearchPopup' style={searchVisible}>
            <i onClick={closeSearchPopup} className="fas fa-times"></i>
            <div className='SearchPopupContent' style={searchVisibleBox}>
                <input className='searchBox' type="text" placeholder="Search" onChange={updateSearchInputHandler}></input>
                <div className='allDataFiltered'>
                    {formattedResults}
                </div>
            </div>
        </div>
    );
}

export default SearchPopup;
