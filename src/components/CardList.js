import React from "react";
import Card from './Card';
import { connect } from "react-redux";


export function CardList({robotss}){

    const cardComponent = robotss.map(robot => {
        return(
        <Card 
        key={robot.id} 
        name={robot.name} 
        id={robot.id} 
        email={robot.email}/>
        )
    })
    
    return(
        cardComponent
    )
}

function mapStateToProps(state) {
    return{
        robots: state.robots
    }
}

export default connect(mapStateToProps)(CardList)

