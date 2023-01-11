import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Upload from "./pages/upload/Upload";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const { darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="login" element={<Login />} />

            <Route path="all">
              <Route index element={<List />}/>
              <Route path=":id" element={<Single />}/>
            </Route>
            
            <Route path="upload" element={<Upload />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
