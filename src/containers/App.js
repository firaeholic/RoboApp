import React from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';


export default function App(){

    const[robots, setRobots] = React.useState([])
    const[searchfield, setSearchfield] = React.useState('')
    

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setRobots(users))
    })



    function onSearchChange (e) {
        setSearchfield(e.target.value)
    }


    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

        return !robots.length ? 
        (
            <h2>Loading</h2>
        )
        :
        (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        )
    
    }


