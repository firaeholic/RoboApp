import React from "react";
import Card from './Card';


function CardList({robots}){
    const cardComponent = robots.map(robot => {
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

export default CardList; 