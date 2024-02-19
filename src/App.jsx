import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home";
import ShoppingCart from "./components/shoppingCart";
import Login from "./components/login";
import useToken from "./components/auth";
// import Search from "./components/search";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
