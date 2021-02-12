import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import AppContainer from "./containers/AppContainer"

function App() {

  const [courses, setCourses] = useState([]);
  const [bookings, setBookings] = useState([]);

  const fetchCourses = () => {
    console.log("fetching courses..")
    const coursesUrl = 'http://localhost:8080/courses'

    fetch(coursesUrl)
    .then(res => res.json())
    .then(data => setCourses(data))
  }

  const fetchBookings = () => {
    console.log("fetching bookings..")
    const bookingsUrl = 'http://localhost:8080/bookings'

    fetch(bookingsUrl)
    .then(res => res.json())
    .then(data => setBookings(data))
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  useEffect(() => {
    fetchBookings()
  }, [])

  
  return (
    <div className="App">
      <p>Front-end</p>
      <AppContainer courses={courses} bookings={bookings}/>
    </div>
  );
}

export default App;
