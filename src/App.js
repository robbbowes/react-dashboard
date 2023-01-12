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
              <Route path="all" element={<DataTableList />}/>
              <Route path="high" element={<DataTableList />}/>
              <Route path="medium" element={<DataTableList />}/>
              <Route path="low" element={<DataTableList />}/>
              <Route path="smoke" element={<DataTableList />}/>
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
