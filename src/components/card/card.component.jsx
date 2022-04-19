import React from "react";
import './card.styles.css';

const Card = ({ designItem }) => {

    return (
        <div className="card-container">

            {/*adding video*/}
            <video src={designItem.video}
                title={designItem.name}
                className="v-frame"
                autoPlay muted playsInline loop>
                <source src={designItem.video} type="video/mp4" />
            </video>

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

