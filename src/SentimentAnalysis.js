import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SentimentAnalysis = () => {


    return (
        <div className='sentiment-analysis'>
            <p>Sentiment Analysis</p>
            <div className="each-progress">
                <div className="circular-progress"><CircularProgressbar value={70}
                    styles={buildStyles({
                        pathColor: '#00FFFF',
                    })}
                />
                </div>
                <div className="sentiment-analysis-list">
                    <p>960</p>
                    <p>Positive Reviews</p>
                </div>
            </div>
            <div className="each-progress">
                <div className="circular-progress"><CircularProgressbar value={60}
                    styles={buildStyles({
                        pathColor: '#FFFF00',
                    })}
                />
                </div>
                <div className="sentiment-analysis-list">
                    <p>122</p>
                    <p>Neutral Reviews</p>
                </div>
            </div>
            <div className="each-progress">
                <div className="circular-progress"><CircularProgressbar value={30}
                    styles={buildStyles({
                        pathColor: '#FF0000',
                    })}
                />
                </div>
                <div className="sentiment-analysis-list">
                    <p>321</p>
                    <p>Negative Reviews</p>
                </div>
            </div>



        </div>
    );
}

export default SentimentAnalysis;