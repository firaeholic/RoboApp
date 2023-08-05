import React from "react";
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { addRobot } from "../actions";
import { connect } from 'react-redux';

function App(props) {
  const [robot, setRobot] = React.useState('');
  const [searchfield, setSearchfield] = React.useState('');

  function robotChange(e) {
    setRobot(e.target.value);
  }

  function generateEmail(length) {
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomString = '';
    
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * letters.length);
      randomString += letters.charAt(randomIndex);
    }
    
    return randomString;
  }

  let randomEmail = generateEmail(robot.length)

  function robotSubmit(e) {
    if (robot !== '') {
      const newRobot = {
        id: props.robots.length + 1,
        name: robot,
        email: `${robot}@${randomEmail}.biz`
      };
      props.addRobot(newRobot);
      setRobot('');
    }
    e.preventDefault();
  }

  function onSearchChange(e) {
    setSearchfield(e.target.value);
  }

  const filteredRobots = props.robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox
        robotSubmit={robotSubmit}
        robotVal={robot}
        onRobotChange={robotChange}
        searchChange={onSearchChange}
      />
      <Scroll>
        <CardList robotss={filteredRobots} />
      </Scroll>
    </div>
  );
}

const mapDispatchToProps = {
  addRobot
};

function mapStateToProps(state) {
  return {
    robots: state.robots
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);