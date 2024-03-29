import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./templatemo-lava.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Preloader from "./components/preloader";
// import Blog from "./container/Blog";

//dynamic import for lazy loading
const Blog = lazy(() => import("./container/blog"));
const Career = lazy(() => import("./container/career"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route
          path="/blog"
          render={() => (
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Blog />
            </Suspense>
          )}
        />
        <Route
          path="/career"
          render={() => (
            <Suspense
              fallback={
                <div>
                  <Preloader />
                </div>
              }
            >
              <Career />
            </Suspense>
          )}
        />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
