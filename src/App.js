import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Action from './components/Action';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import CalendarEvents from './components/pages/CalendarEvents'
import ClassicEvents from './components/pages/ClassicEvents'
import ClassicNews from './components/pages/ClassicNews'
import Contact from './components/pages/Contact'
import CoursesGrids from './components/pages/CoursesGrids'
import CoursesList from './components/pages/CoursesList'
import Gallery3Col from './components/pages/Gallery3Col'
import Gallery4Col from './components/pages/Gallery4Col'
import GridNews from './components/pages/GridNews'
import OurTeachers from './components/pages/OurTeachers'
import SingleCourse from './components/pages/SingleCourse'
import SingleEvent from './components/pages/SingleEvent'
import SinglePost from './components/pages/SinglePost'
import SingleTeacher from './components/pages/SingleTeacher'


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home />}></Route>
      <Route path='/about-us' element={ <AboutUs />}></Route>
      <Route path='/calendar-events' element={ <CalendarEvents />}></Route>
      <Route path='/classic-events' element={ <ClassicEvents />}></Route>
      <Route path='/classic-news' element={ <ClassicNews />}></Route>
      <Route path='/contact' element={ <Contact />}></Route>
      <Route path='/courses-grids' element={ <CoursesGrids />}></Route>
      <Route path='/courses-list' element={ <CoursesList />}></Route>
      <Route path='/gallery-3-col' element={ <Gallery3Col />}></Route>
      <Route path='/gallery-4-col' element={ <Gallery4Col />}></Route>
      <Route path='/grid-news' element={ <GridNews />}></Route>
      <Route path='/our-teachers' element={ <OurTeachers />}></Route>
      <Route path='/single-course' element={ <SingleCourse />}></Route>
      <Route path='/single-event' element={ <SingleEvent />}></Route>
      <Route path='/single-post' element={ <SinglePost />}></Route>
      <Route path='/single-teacher' element={ <SingleTeacher />}></Route>
    </Routes>
    <Action/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
