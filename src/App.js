import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './Component/Login/Login';
import SearchResult from './Component/SearchResult/SearchResult';
import Search from './Component/Search/Search';
import NotFound from './Component/NotFound/NotFound';
import Home from './Component/Home/Home/Home';
import HomeDetails from './Component/Home/HomeDetails/HomeDetails';
import About from './Component/About/About';
import NavberPractice from './Component/Header/NavberPractice/NavberPractice';
import SignUp from './Component/SignUp/SignUp';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import { createContext } from 'react';

export const UserContext=createContext()
function App() {
  return (
    <div className="App">
      
      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="about" element={
            <RequireAuth>
              <About />
            </RequireAuth>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signUn" element={<SignUp />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/home/:id" element={
            <RequireAuth>
              <Search></Search>
            </RequireAuth>
          } />
          
          
          

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NotFound />} />
      </Routes>
      




      {/* <Router>
        <Switch>
        <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/signIn">
            <SignIn/>
          </Route>
          <PrivateRoute path="/searchResult">
            <SearchResult/>
          </PrivateRoute>
          <PrivateRoute path="/:id">
            <Search/>
          </PrivateRoute>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="*">
          <NotFound/>
          </Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
