import React, { forwardRef } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './TrendItem.css';

function TrendItem({ classify, nameTrend, numberFollowers }) {
    // rut gon numberFollowers
    const compactFollowers = (numberFollowers) => {
        let res;
        if (numberFollowers >= 1000000) {
            res = Math.round(numberFollowers / 1000000 * 100) / 100 + 'M';
        } else if (numberFollowers >= 10000) {
            res = Math.round((numberFollowers / 1000) * 100) / 100 + 'K';
        } else if (numberFollowers < 10000) {
            let stringFollowers = numberFollowers.toString();
            res =
                stringFollowers.substring(0, 1) +
                ',' +
                stringFollowers.substring(1);
        }

        return res;
    };

    let nF = compactFollowers(numberFollowers);
    return (
        <div className="trendItem">
            <div className="trendItem__classify">
                <p>{!classify ? 'Entertainmant' : classify}</p>
                {!classify.includes('Trending in') && (
                    <>
                        <FiberManualRecordIcon className="dot" />
                        <p>Trending</p>
                    </>
                )}
            </div>
            <h2 className="trendItem__nameTrend">
                {!nameTrend ? 'Deadpool' : nameTrend}
            </h2>
            <p className="trendItem__numberFollowers">
                {`${!numberFollowers ? '15.9K' : nF} Tweets`}
            </p>
        </div>
    );
};

export default TrendItem;
