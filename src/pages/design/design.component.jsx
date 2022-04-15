import React from "react";
import './design.styles.css';
import Card from "../../components/card/card.component";
import { default as design } from '../../components/util/design.json';

const Design = () => {
    let designArr = design.design;
    return (
        <div className="design-wrap">
            <div className="scroll">
                {
                    designArr.map(item => (
                        <Card key={item.id} designItem={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Design;