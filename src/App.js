import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>

          <Route
            path="/"
            element={
              <>
                <Header />

                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
