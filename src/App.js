import './App.css';
import FeedPage from './pages/FeedPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <FeedPage />
        </Route>
        <Route path="/admin" exact>
        <AdminPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
