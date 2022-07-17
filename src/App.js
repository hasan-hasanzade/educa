import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Action from './components/Action';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ClassicEvents from './components/pages/ClassicEvents'
import ClassicNews from './components/pages/ClassicNews'
import Contact from './components/pages/Contact'
import CoursesGrids from './components/pages/CoursesGrids'
import CoursesList from './components/pages/CoursesList'
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
      <Route path='/' element={ <Home />}/>
      <Route path='/about-us' element={ <AboutUs />}/>
      <Route path='/classic-events' element={ <ClassicEvents />}/>
      <Route path='/classic-news' element={ <ClassicNews />}/>
      <Route path='/contact' element={ <Contact />}></Route>
      <Route path='/courses-grids' element={ <CoursesGrids />}/>
      <Route path='/courses-list' element={ <CoursesList />}/>
      <Route path='/our-teachers' element={ <OurTeachers />}/>
      <Route path='/single-course' element={ <SingleCourse />}/>
      <Route path='/single-event' element={ <SingleEvent />}/>
      <Route path='/single-post' element={ <SinglePost />}/>
      <Route path='/single-teacher' element={ <SingleTeacher />}/>
    </Routes>
    <Action/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
