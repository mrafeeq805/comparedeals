
import { Home } from "./pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import BookingCompanies from "./pages/BookingCompanies";
import Booking from "./pages/Booking";
import { Outlet } from "react-router-dom";
// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
