import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Users from "./Users";
import Header from "./Header";
import UserId from "./UserId";
import About from "./About";
import Main from "./Main";
import Error from "./Error";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} /> // Ctrl + click on "Main"
          to reach a code of this page
          <Route path="/about" element={<About />} />
          <Route exact path="/users" element={<Users />} />
          <Route path="/users/:userName" element={<UserId />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
