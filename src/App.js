import Banner from './Components/Banner';
import SearchBar from './shared/Search';
import Tours from './Components/Tours';
import Newsletter from './Components/Newsletter';
// import TourCard from './shared/TourCard';
// import Login from './Components/login/Login';
// import Register from './Components/login/Register';
import { BrowserRouter } from 'react-router-dom';
// import Toursbooking from './Components/Toursbooking';
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Banner />
      <SearchBar />
      {/* <Login /> */}
      {/* <Register /> */}
      <Tours />
      {/* <TourCard /> */}
      
      {/* <Toursbooking /> */}
      <Newsletter />
       
    </div>
    </BrowserRouter>
  );
}

export default App;
