import CourseDisplay from "../components/Course/CourseDisplay"
import BookingDisplay from "../components/Bookings/BookingDisplay"

const AppContainer = ({bookings, courses}) => {

    return(
        <div>
            <h1>App Container</h1>
            <div className="app-list">
                <div className="courses">
                    <CourseDisplay courses={courses}/>
                </div>
                <div className="bookings">
                    <BookingDisplay bookings={bookings}/>
                </div>
            </div>
        </div>
    )
}

export default AppContainer;