const Booking = ({date, course, customer}) => {

    return (
        <div id="list">
            <h3>{date}</h3>
            <p>{course}</p>
            <p>{customer}</p>
        </div>
    )
}

export default Booking;