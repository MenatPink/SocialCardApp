import React from 'react';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardControl from './CardControl';

function SocialCard(){
    return(
        <div className = "social-card">
            <CardHeader/>
            <CardImage/>
            <CardControl/>
        </div>
    )
}

export default SocialCard;