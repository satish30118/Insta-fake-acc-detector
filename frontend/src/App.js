import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import SignUp from "./Component/SignUp";
import PredictAccount from "./Component/PredictAccount";
import SignIn from "./Component/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/sign-in" Component={SignIn} />
        <Route exact path="/sign-up" Component={SignUp} />
        <Route exact path="/predict-account" Component={PredictAccount} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
