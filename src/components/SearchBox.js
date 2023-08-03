import React from "react";

function SearchBox({robotSubmit, onRobotChange, searchChange, robotVal, searchfield}){
    return(
        <div>
            <input 
            className="pa3 ba b--green bg-lightest-blue br3"
            type='search' 
            placeholder="search a robot"
            onChange={searchChange}
            
            />
            <form onSubmit={robotSubmit} style={{transform: 'translateX(31px)'}}>
                <input type='text'
                   className="pa3 ba b--green bg-lightest-blue br3 ma3"
                    placeholder="Add a new robot"
                    onChange={onRobotChange}
                    value={robotVal}
                 />
                 <button 
                 type="submit"
                 className="pa3 ba b--green bg-lightest-blue br3"
                 >Add</button>
            </form>
        </div>
    )
}

export default SearchBox;