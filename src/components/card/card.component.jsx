import React from "react";
import './card.styles.css';

const Card = ({ designItem }) => {

    return (
        <div className="card-container">

            {/*adding video*/}
            <iframe src={designItem.video}
                title={designItem.name}
                className="v-frame"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen />

            {/* adding title and description and link*/}
            <div className="content">
                <p className="title">{designItem.name}</p>
                <p className="desc">{designItem.description}</p>
                <a href={designItem.link} className="link">{designItem.link}</a>
            </div>
        </div>
    );
}

export default Card;

