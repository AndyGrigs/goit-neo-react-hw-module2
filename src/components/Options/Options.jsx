import React from 'react';

import st from './Options.module.css';

const Options = ({ onLeaveFeedback, total }) => {
    return (
        <div className={st.Options}>
            <button className={st.button} type="button" onClick={() => onLeaveFeedback('good')}>
                Good
            </button>
            <button className={st.button} type="button" onClick={() => onLeaveFeedback('neutral')}>
                Neutral
            </button>
            <button className={st.button} type="button" onClick={() => onLeaveFeedback('bad')}>
                Bad
            </button>

            {total > 0 && (
                <button className={st.button} type="button" onClick={() => onLeaveFeedback('reset')}>
                    Reset
                </button>
            )}
        </div>
    );
};

export default Options;
