import React from 'react';

import st from './Options.module.css';

const Options = ({ onLeaveFeed, total }) => {
    return (
        <div className={st.Options}>
            <button className={st.button} type="button" onClick={() => onLeaveFeed('good')}>
                Good
            </button>
            <button className={st.button} type="button" onClick={() => onLeaveFeed('neutral')}>
                Neutral
            </button>
            <button className={st.button} type="button" onClick={() => onLeaveFeed('bad')}>
                Bad
            </button>

            {total > 0 && (
                <button className={st.button} type="button" onClick={() => onLeaveFeed('reset')}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default Options;
