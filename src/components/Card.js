function Card( {name, id, email} ){

    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2">
            <img alt="robot(no internet)" src={`https://robohash.org/${name}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;