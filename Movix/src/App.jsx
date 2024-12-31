//import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import requests from "./Requests";
import Popular from "./pages/Popular";
import UpComing from "./pages/UpComing";
import TopRated from "./pages/TopRated";
import Trending from "./pages/Trending";
import Horror from "./pages/Horror";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoutes from "./ProtectedRoutes";
import Profile from "./pages/Profile";
function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route
            path="/popular"
            element={
              <ProtectedRoutes>
                <Popular requests={requests} />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/up_coming"
            element={
              <ProtectedRoutes>
                <UpComing requests={requests} />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/top_rated"
            element={
              <ProtectedRoutes>
                <TopRated requests={requests} />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/trending"
            element={
              <ProtectedRoutes>
                <Trending requests={requests} />{" "}
              </ProtectedRoutes>
            }
          />
          <Route
            path="/horror"
            element={
              <ProtectedRoutes>
                <Horror requests={requests} />
              </ProtectedRoutes>
            }
          />
          /*
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />
          */
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
