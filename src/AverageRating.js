import React from "react";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from 'react-icons/md';
import Rating from "./Rating";
import Days from "./Days";

const AverageRating = () => {
    return (
        <div className='average-rating'>
            <p>Average Rating</p>
            <p>4.6 <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarHalf />
            </p>
            <div className="avg-rating-points">
                <p className="avg-rating-point" >-0.3</p><p>&nbsp; points from last week</p>
            </div>
            <Rating chartValues={['grey', 'grey', 'grey', 'grey', 'grey', 'grey', 'grey']} />
            <Rating chartValues={['grey', 'grey', 'grey', 'grey', 'grey', 'white', 'grey']} />
            <Rating chartValues={['grey', 'grey', 'grey', 'grey', 'grey', 'white', 'grey']} />
            <Rating chartValues={['grey', 'grey', 'grey', 'grey', 'grey', 'white', 'grey']} />
            <Rating chartValues={['grey', 'grey', 'grey', 'grey', 'grey', 'white', 'grey']} />
            <Days />
        </div>

    );
}

export default AverageRating;