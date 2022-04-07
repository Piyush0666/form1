import './App.css';
import Style from './Components/Style';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <BrowserRouter>
            <Routes>
              <Route path="/" element={<Style />}>
              </Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}
export default App