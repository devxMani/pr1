import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  // username and password are the state variables for the login form
  const [password, setPassword] = useState("");

  const [storedUsername, setStoredUsername] = useState("");
  // state variables that hold the username and passowrd retrieved from localStorage
  const [storedPassword, setStoredPassword] = useState("");
  // a boolean state that tracks whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // to hold the status messages such as login success login successful or login failed
  const [message, setMessage] = useState("");

// this hook runs when the component mounts(loads for the first time) it retrives any stored username and password from the browsers localstorage
  
  useEffect(() => {
    // Retrieve stored credentials from localStorage if available
    const savedUsername = localStorage.getItem("username"); // retrives any stored username
    const savedPassword = localStorage.getItem("password"); // retrives any stored password

    if (savedUsername && savedPassword) { // if credentials exist than they saved in the state variables
      setStoredUsername(savedUsername);
      setStoredPassword(savedPassword);
    }
  }, []);

  const handleLogin = (e) => { // this function handles the login process when the user submits the form
    // this form takes an event object as an argument(the form submission event)
    // functionality ..........

    e.preventDefault(); // prevents the form from submitting and refreshing the page
    if (username === storedUsername && password === storedPassword) {
      // it compares the entered username and password with the stored username and password
      setIsLoggedIn(true); // if the credintials match the user is logged in (setLoggedIn(true)) and a succses message is displayed
      setMessage("Login successful!"); 
    } else {
      setMessage("Invalid credentials. Please try again or register.");
    }
  };

  const handleRegister = () => {
    // Save username and password to localStorage
    localStorage.setItem("username", username); // saves the entered username in the local storage
    localStorage.setItem("password", password); // saves the entered password in the local storage
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
