import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../FireBase";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  console.log(user);
  console.log(setUser);
  const auth = getAuth();

  /*onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in");
      console.log(user?.email);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      console.log("User is signed out");
      // User is signed out
      // ...
    }
  });*/
  /*const logOut = () =>
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("An error happened.");
        // An error happened.
      });*/
  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      console.log("User Signed Out Successfully!");
      //setUser.email("");
    } catch (error) {
      console.log(error.code);
    }
    /*await firebase
      .auth()
      .signOut()
      .then(
        function () {
          console.log("Signed Out");
          navigate("/");
        },
        function (error) {
          console.error("Sign Out Error", error);
        }
      );*/
  };
  return (
    <div className="flex items-center justify-between p-4">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          MOVIX2
        </h1>
      </Link>
      <div>
        <Link to="/popular">
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Popular
          </button>
        </Link>
        <Link to="/up_coming">
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            UpComing
          </button>
        </Link>
        <Link to="/top_rated">
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            TopRated
          </button>
        </Link>
        <Link to="/trending">
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Trending
          </button>
        </Link>
        <Link to="/horror">
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Horror
          </button>
        </Link>
        {/*<Link to="/profile">
          <button
            type="button"
            class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Profile
          </button>
        </Link>*/}
      </div>

      {user?.email ? (
        <div>
          <button className="text-white pr-4">
            {user?.email.split("@")[0]}
          </button>
          <Link to="signin">
            <button className="bg-red-600 text-white px-6 py-1 rounded cursor-pointer">
              Sign Out
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="signin">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="signup">
            <button className="bg-red-600 text-white px-6 py-1 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
          <button
            onClick={handleSignout}
            className="bg-red-600 text-white px-6 mx-2 py-1 rounded cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
