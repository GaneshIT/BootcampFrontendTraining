import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import AddMovie from './addmovie';
import Events from './events';
import Home from './home';
import Location from './location';
function Menubar(props){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">{props.title}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/movies"}>Movies</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/events"}>Events</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to={"/location"}>Location</Link>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <label class="form-control mr-sm-2">{props.location}</label>
    </form>
  </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<AddMovie
                 />}></Route>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/location" element={<Location />}></Route>
            </Routes>
        </div>
    );
}
export default Menubar;