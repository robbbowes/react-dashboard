import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DataTableList from "./pages/list/DataTableList";
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

            <Route path="tests">
              <Route path="all" element={<DataTableList priority="all" />}/>
              <Route path="high" element={<DataTableList priority="high" />}/>
              <Route path="medium" element={<DataTableList priority="medium" />}/>
              <Route path="low" element={<DataTableList priority="low" />}/>
              <Route path="smoke" element={<DataTableList priority="smoke" />}/>
              <Route path="failures" element={<DataTableList priority="smoke" />}/>
              <Route path="bugs" element={<DataTableList priority="smoke" />}/>
              <Route path="ignored" element={<DataTableList priority="smoke" />}/>
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
