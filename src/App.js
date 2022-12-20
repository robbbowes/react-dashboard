import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Upload from "./pages/upload/Upload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />}/>
              <Route path=":userId" element={<Single />}/>
            </Route>
            <Route path="products">
              <Route index element={<List />}/>
              <Route path=":productId" element={<Single />}/>
            </Route>
            <Route path="upload" element={<Upload />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
