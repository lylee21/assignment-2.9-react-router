import React from "react";
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div>
          <div>
            <h3>Lyn's profile page</h3>
          </div>
          <div>
            <Link to = "/Lyn/about">About</Link>
          </div>
          <div>
            <Link to = "/Lyn/posts">Posts</Link>
          </div>
          <div>
            <Link to = "/Lyn/likes">Likes</Link>
          </div>
            <Switch>
                <Route path ="/:name/about/">
                    <About/>
                </Route>
            </Switch>
            <Switch>
                <Route path ="/:name/posts/">
                    <Posts/>
                </Route>
            </Switch>
            <Switch>
                <Route path ="/:name/likes/">
                    <Likes/>
                </Route>
            </Switch>    
        </div>
    </Router>
);
}
function About(){
  let {name} = useParams();
  
  return (
      <div>
          <h3> About {name}</h3>
          <p>{name} is a content creator. </p>
      </div>
  );
}

function Posts(){
  let {name,posts} = useParams();
  
  return ( 
      <div>
        <h3> Posts by {name}</h3>
        <ul>
          <li>
            <p>A cool drawing made by {name}.</p>
          </li>
          <li>
            <p>A funny video made by {name}.</p>
          </li>
          <li>
            <p>A personal text post by {name}.</p>
          </li>
        </ul>
      </div>
  );
}

function Likes(){
  let {name} = useParams();
  
  return (
      <div>
        <h3> Liked by {name}</h3>
        <ul>
          <li>
            <p>This is a post {name} likes.</p>
          </li>
          <li>
            <p>This is another post {name} likes.</p>
          </li>
        </ul>
  </div>
  );  
}

export default App;
