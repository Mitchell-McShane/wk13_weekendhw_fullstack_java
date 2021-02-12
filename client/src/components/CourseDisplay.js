import Course from './Course'

const CourseDisplay = ({courses}) => {

    const courseList = courses.map((course) => {

        return(
            <Course course={course} key={course.id} />
        )
    })

    return(
        <>
            <h2>Courses</h2>
            <ul id="list">
                {courseList}
            </ul>
        </>
    )
}
export default CourseDisplay;