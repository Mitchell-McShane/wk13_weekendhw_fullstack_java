import CourseDisplay from "../components/CourseDisplay"

const AppContainer = ({courses}) => {

    return(
        <div>
            <h1>App Container</h1>
            <div className="app-list">
                <div className="courses">
                    <CourseDisplay courses={courses}/>
                </div>
            </div>
        </div>
    )
}

export default AppContainer;