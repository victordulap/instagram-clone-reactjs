import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/bootstrap/bootstrap.min.css';

// import components
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';
import Error from './pages/Error';
import Post from './components/Post/index';
function App() {
  const { links } = useGlobalContext();
  return (
    <Router>
      <Navbar />
      <div className="bg-light">
        <Switch>
          {links.map((link) => {
            const { id, page, url } = link;
            if (url === '/') {
              return (
                <Route key={id} exact path={url}>
                  {page}
                </Route>
              );
            }
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            );
          })}
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
