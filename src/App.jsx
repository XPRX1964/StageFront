import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import ContactUs from "./Pages/ContactUS/ContactUs";
import ScrollToTop from "./Components/ScrollTop";
import MyAccount from "./Pages/MyAccount/MyAccount";
import NotFoud from "./Pages/NotFound/NotFoud";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import FavoritesList from "./Pages/Favourite/FavoritesList";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <div className="Content overflow-hidden mt-[89px]">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/myaccount" element={<MyAccount />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/favorites" element={<FavoritesList />} />
            <Route path="*" element={<NotFoud />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
