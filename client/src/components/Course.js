const Course = ({course}) => {

    return (
        <div id="list">
            <h2>{course.name}</h2>
            <p>location: {course.town}</p>
            <p>Star Rating: {course.starRating}</p>
        </div>
    )
}

export default Course;