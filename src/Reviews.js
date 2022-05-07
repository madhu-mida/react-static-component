import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Reviews = () => {
    return (
        <div className='reviews'>
            <p >Reviews</p>
            <p className='reviews-number'>1,281</p>
            <div className="review-pt">
                <p>You got &nbsp;</p>
                <p className="review-percent">23.8%</p>
                <p>&nbsp; more reviews than last week</p>
            </div>
            <div className="reviews-pos-neg">
                <div className="reviews-pos">
                    <p>960</p>
                    <p><AiFillPlusCircle />&nbsp;POSITIVE</p>
                </div>
                <div className="reviews-neg">
                    <p>321</p>
                    <p><AiFillMinusCircle />&nbsp;NEGATIVE</p>
                </div>
            </div>
        </div>
    );
}

export default Reviews;