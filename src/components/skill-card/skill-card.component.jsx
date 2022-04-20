import React from "react";
import './skill-card.styles.css';

const SkillCard = ({ datapercent, title }) => {
    return (
        <div className="skill-card">
            <div className="circular">
                <div class="inner"></div>
                <div class="number">30%</div>
                <div class="circle">
                    <div class="bar left">
                        <div class="progress"></div>
                    </div>
                    <div class="bar right">
                        <div class="progress"></div>
                    </div>
                </div>
            </div>
            <p className="skill-title">{title}</p>
        </div>
    )
}

export default SkillCard;