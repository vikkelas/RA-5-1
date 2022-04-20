import React from 'react';
import './Cards.css'
import img1 from '../assets/pexels-albin-berlin-919073.jpg';
import img2 from '../assets/pexels-kelson-downes-1149137.jpg'
import Card from "../Card/Card";
import {nanoid} from "nanoid";


function Cards() {
    const data = [
        {
            title: 'Investing in Open Text',
            text: 'pellentesque diam volutpat commodo sed egestas egestas fringilla ' +
                'phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec ' +
                'sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed ' +
                'velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum',
            img: img1,
            id: nanoid()
        },
        {
            title: 'Investing Text',
            text: 'pellentesque diam volutpat commodo sed egestas egestas fringilla ' +
                'phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec ' +
                'sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed ' +
                'velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum',
            img: img2,
            id: nanoid()
        },
        {
            title: 'Investing Text',
            text: 'pellentesque diam volutpat commodo sed egestas egestas fringilla ' +
                'phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec ' +
                'sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed ' +
                'velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum',
            id: nanoid()
        }
    ]
    return (
        <div className='cards'>
            {data.map(item=>
                <Card key={item.id} {...item}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                </Card>
            )}
        </div>
    );
}


export default Cards;