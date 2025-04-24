import st from './Notification.module.css'

const Notification = ({ message }) => {
    return (
        <div className={st.notification}>
            <p>{message}</p>
        </div>
    );
};

export default Notification;

