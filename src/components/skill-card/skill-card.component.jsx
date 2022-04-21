import React from "react";
import './skill-card.styles.css';
import { Progress } from 'antd';

const SkillCard = ({ datapercent, title }) => {

    return (
        <div className="skill-card">
            <Progress type="circle" percent={datapercent} />
            <br />
            <p className="skill-title">{title}</p>
        </div>
    )
}

export default SkillCard;