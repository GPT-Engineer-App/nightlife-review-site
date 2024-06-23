import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CabaretClub from "./pages/キャバクラ.jsx";
import Lounge from "./pages/ラウンジ.jsx";
import GirlsBar from "./pages/ガールズバー.jsx";
import DeliveryHealth from "./pages/デリヘル.jsx";
import Soapland from "./pages/ソープ.jsx";
import MensEsthetic from "./pages/メンズエステ.jsx";
import PinkSalon from "./pages/ピンサロ.jsx";
import NewPost from "./pages/新規投稿.jsx";
import UserProfile from "./pages/ユーザープロフィール.jsx";
import Admin from "./pages/管理者.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/キャバクラ" element={<CabaretClub />} />
        <Route exact path="/ラウンジ" element={<Lounge />} />
        <Route exact path="/ガールズバー" element={<GirlsBar />} />
        <Route exact path="/デリヘル" element={<DeliveryHealth />} />
        <Route exact path="/ソープ" element={<Soapland />} />
        <Route exact path="/メンズエステ" element={<MensEsthetic />} />
        <Route exact path="/ピンサロ" element={<PinkSalon />} />
        <Route exact path="/新規投稿" element={<NewPost />} />
        <Route exact path="/ユーザープロフィール" element={<UserProfile />} />
        <Route exact path="/管理者" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;