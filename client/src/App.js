import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import AppContainer from "./containers/AppContainer"

function App() {

  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    console.log("fetching courses..")
    const coursesUrl = 'http://localhost:8080/courses'

    fetch(coursesUrl)
    .then(res => res.json())
    .then(data => setCourses(data))
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  
  return (
    <div className="App">
      <p>Front-end</p>
      <AppContainer courses={courses} />
    </div>
  );
}

export default App;
