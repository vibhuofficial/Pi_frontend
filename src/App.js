import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import SignIn from "./components/Pages/SignIn/SignIn";
import SignUp from "./components/Pages/SignUp/SignUp";
import { useEffect, useState, createContext } from "react";

const MyContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState();
  useEffect(() => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login);
  });

  const signOut = () => {
    localStorage.removeItem("isLogin");
    setIsLogin(false);
  };

  const signIn = () => {
    const is_Login = localStorage.getItem("isLogin");
    setIsLogin(is_Login);
  };

  const value = {
    isLogin,
    signOut,
    signIn,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
          <Newsletter />
          <Footer />
        </AppContext>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
