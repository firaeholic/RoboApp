import React from "react";

function SearchBox({searchfield, searchChange}){
    return(
        <div>
            <input 
            className="pa3 ba b--green bg-lightest-blue br3"
            type='search' 
            placeholder="search a robot"
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;