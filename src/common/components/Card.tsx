import * as React from 'react';
import { CardHeader, CardBody, CardFooter } from '../models/Card';

interface CardProps {
    cardHeader: CardHeader;
    cardBody: CardBody;
    cardFooter: CardFooter;
}

export const Card = ({ cardHeader, cardBody, cardFooter }: CardProps) => {
    const { image } = cardBody;

    return (<div className="card card-with-border">
        <figure className="card-image">
            <div>
                <img src={image.src} alt={image.alt} >
                </img>
            </div>
        </figure>
        <p>This is a card</p>
        <div>
            <span>{cardHeader.title}</span>
        </div>
    </div>);
}