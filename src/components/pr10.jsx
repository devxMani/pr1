
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [storedUsername, setStoredUsername] = useState("");
  const [storedPassword, setStoredPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Retrieve stored credentials from localStorage if available
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    
    if (savedUsername && savedPassword) {
      setStoredUsername(savedUsername);
      setStoredPassword(savedPassword);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      setMessage("Login successful!");
    } else {
      setMessage("Invalid credentials. Please try again or register.");
    }
  };

  const handleRegister = () => {
    // Save username and password to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setMessage("User registered successfully. Please log in.");
  };

  return (
    <div className="login-container">
      <h2>{isLoggedIn ? `Welcome, ${storedUsername}` : "Login"}</h2>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit">Login</button>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </form>
      ) : (
        <p>You are logged in!</p>
      )}
      <p>{message}</p>
    </div>
  );
}

export default App;
