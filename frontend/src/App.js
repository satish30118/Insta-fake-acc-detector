import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";
import PredictAccount from "./Component/PredictAccount";
import SignIn from "./Component/SignIn";
import TweetStatus from "./Component/TweetStatus";
import InstaAccountChk from "./Component/InstaAccountChk";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/sign-in" Component={SignIn} />
        <Route exact path="/sign-up" Component={SignUp} />
        <Route exact path="/dashboard" Component={PredictAccount} />
        <Route exact path="/predict/tweet-status" Component={TweetStatus} />
        <Route exact path="/predict/insta-fake-account" Component={InstaAccountChk} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
