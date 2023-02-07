import "./App.css";
import SwingGallery from "./components/SwingGallery/SwingGallery";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [countLikes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);

  const onSwipe = (direction) => {
    console.log(direction)
    if (direction === "left" || direction === "down") {
      setCountDislikes(countDislikes + 1);
    } else {
      setCountLikes(countLikes + 1);
    }
  };

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <SwingGallery onSwipe={onSwipe} data={users}></SwingGallery>
        <p>Likes: {countLikes}</p>
        <p>Dislikes: {countDislikes}</p>
      </header>
    </div>
  );
}

export default App;
