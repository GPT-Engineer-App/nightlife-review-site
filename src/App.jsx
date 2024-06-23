import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CabaretClub from "./pages/CabaretClub.jsx";
import Lounge from "./pages/Lounge.jsx";
import GirlsBar from "./pages/GirlsBar.jsx";
import DeliveryHealth from "./pages/DeliveryHealth.jsx";
import Soapland from "./pages/Soapland.jsx";
import MensEsthetic from "./pages/MensEsthetic.jsx";
import PinkSalon from "./pages/PinkSalon.jsx";
import NewPost from "./pages/NewPost.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Admin from "./pages/Admin.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/cabaret-club" element={<CabaretClub />} />
        <Route exact path="/lounge" element={<Lounge />} />
        <Route exact path="/girls-bar" element={<GirlsBar />} />
        <Route exact path="/delivery-health" element={<DeliveryHealth />} />
        <Route exact path="/soapland" element={<Soapland />} />
        <Route exact path="/mens-esthetic" element={<MensEsthetic />} />
        <Route exact path="/pink-salon" element={<PinkSalon />} />
        <Route exact path="/new-post" element={<NewPost />} />
        <Route exact path="/user-profile" element={<UserProfile />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;