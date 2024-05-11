import "./App.css";
import { Header } from "./header/Header";

import { Route, Routes } from "react-router-dom";
import { Nav } from "./nav/Nav";
import Register from "./admin/register/Register";

import { useLocation } from "react-router-dom";
import { Home } from "./home/Home";
import CotegoryPage from "./home/components/cotegoryPage/CotegoryPage";
import { CotegoryView } from "./home/components/cotegoryPage/CotegoryView";
import SmartPhone from "./home/components/smartPhone/SmartPhone";
import Login from "./admin/login/Login";
import Like from "./like/Like";
function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/login" || pathname === "/register" ? null : (
        <>
          <Header />
          <Nav />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login
            // onLogin={() => {
            //   handleLogin;
            // }}
            />
          }
        />
        <Route path="/smartPhone" element={<SmartPhone />} />
        <Route path="cotegory" element={<CotegoryPage />} />
        <Route path="/like" element={<Like />} />
        <Route path="cotegory/:id" element={<CotegoryView />} />
      </Routes>
      {/* <Header />
      <Nav /> */}
    </>
  );
}

export default App;
