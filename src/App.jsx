import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import "./App.css";
// import logo from "./assets/logo.png"
function App() {
  const [user, setUser] = useState();

  async function getUser() {
    setUser(null);
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUser(data.results[0]);
    console.log(data.results[0]);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <div className="card">
            {!user && (
              <ClipLoader
                color="red"
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
            {user && (
              <div>
                <h1>Random User Generator</h1>
                <img src={user.picture.large} alt="" />
                <h4>
                  {user.name.title} {user.name.first} {user.name.last}
                </h4>
                <p>{user.email}</p>
                <h4>
                  {user.location.city}, {user.location.country}
                </h4>
              </div>
            )}
            <button onClick={getUser}>Next User</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;