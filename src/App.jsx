import './App.css';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Feedback/Notification/Notification';
import { useEffect, useState } from 'react';

function App() {
    const [feedback, setFeedback] = useState(()=>{
        const localStorageFeeds = JSON.parse(localStorage.getItem('feedback'));
        return localStorageFeeds || {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    });

    const doFeedbackUpdate = (type) => {
        if (type === 'reset') {
            setFeedback({
                good: 0,
                neutral: 0,
                bad: 0,
            });
        } else {
            setFeedback((prev) => ({
                ...prev,
                [type]: prev[type] + 1,
            }));
        }
    };

    const feedbacksTotal = feedback.good + feedback.neutral + feedback.bad;

    const calcPercents = () => {
        return feedbacksTotal ? Math.round((feedback.good / feedbacksTotal) * 100) : 0;
    };

    
    

    useEffect(() => {
        const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
        if (savedFeedback) {
            setFeedback(savedFeedback);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    return (
        <>
            <section>
                <h1>Sip Happens Café</h1>
                <p>
                    Please leave your feedback about our service by selecting one of the options
                    below.
                </p>

                <Options onLeaveFeed={doFeedbackUpdate} total={feedbacksTotal} />

               <article>
                {feedbacksTotal > 0 ? (
                     <Feedback
                     good={feedback.good}
                     neutral={feedback.neutral}
                     bad={feedback.bad}
                     total={feedbacksTotal}
                     percets={calcPercents}
                 />
                ) : 
                <Notification message="No feedback given yet."  />
                }
               </article>

               
            </section>
        </>
    );
}

export default App;
