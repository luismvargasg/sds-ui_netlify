import React, { useState } from "react";

/* Styles */
import "./App.css";

/* Utilities */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useLocation } from "react-router";
import ScrollToTop from "./utils/ScrollToTop";

/* Components */
import FilterDrawer from "./components/FilterDrawer";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

/* Modules */
import About from "./components/modules/About";
import Authors from "./components/modules/Authors";
import Groups from "./components/modules/Groups";
import Home from "./components/modules/Home";
import Institutions from "./components/modules/Institutions";
import Module1 from "./components/modules/Module1";
import Module2 from "./components/modules/Module2";
import Module3 from "./components/modules/Module3";
import Module4 from "./components/modules/Module4";
import Normatividad from "./components/modules/Normatividad";
import SearchResult from "./components/modules/SearchResult";

/* UI Library Components */
import { Layout, BackTop } from "antd";

function App() {
  const location = useLocation();
  const [URL, setURL] = useState(location.pathname + location.search);
  return (
    <Router>
      <ScrollToTop />
      <BackTop />
      <FilterDrawer />
      <Layout>
        <Header setURL={setURL} />
        <Layout.Content
          style={{
            minHeight: "70vh",
            position: "relative",
            margin: "15px",
          }}
        >
          <Switch>
            <Redirect exact from="/" to="/app" />
            <Route exact path="/app" component={Home} />
            <Route exact path="/app/about" component={About} />
            <Route exact path="/app/search">
              <SearchResult URL={URL} setURL={setURL} />
            </Route>
            <Route exact path="/app/authors" component={Authors} />
            <Route exact path="/app/groups" component={Groups} />
            <Route exact path="/app/institutions" component={Institutions} />
            <Route exact path="/app/module1" component={Module1} />
            <Route exact path="/app/module2" component={Module2} />
            <Route exact path="/app/module3" component={Module3} />
            <Route exact path="/app/module4" component={Module4} />
            <Route exact path="/app/normatividad" component={Normatividad} />
          </Switch>
        </Layout.Content>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
