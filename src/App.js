import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import FeedPage from './pages/FeedPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<FeedPage/>}>
        </Route>
        <Route exact path="/admin" element={<AdminPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
