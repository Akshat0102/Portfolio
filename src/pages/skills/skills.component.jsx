import React from "react";
import './skills.styles.css';
import { default as skill } from '../../components/util/skill.json';
import SkillCard from "../../components/skill-card/skill-card.component";

const Skills = () => {
    let skillArr = skill.skills;
    return (
        <div className="skill-wrap">
            {
                skillArr.map(item => (
                    <SkillCard key={item.id} title={item.title} />
                ))
            }
        </div>
    )
}

export default Skills;