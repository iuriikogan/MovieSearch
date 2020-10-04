import React from "react";
import "./App.css";
import SearchMovie from "./components/SearchMovie";
import Profile from "./components/Profile";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0;
  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <SearchMovie />
      <Profile />
    </div>
  );
}

export default App;
