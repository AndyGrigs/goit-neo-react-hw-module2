import st from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, percets }) => {
    return (
        <div className={st.Feedback}>
            <h2>Feedback Statistics</h2>
            <ul className={st.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive Feedback: {percets()}</li>
            </ul>
        </div>
    );
};

export default Feedback;
