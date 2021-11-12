/* Styles */
import "./App.css";

/* Utilities */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/* Components */
import FilterDrawer from "./components/FilterDrawer";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

/* Modules */
import Authors from "./components/modules/Authors";
import Groups from "./components/modules/Groups";
import Institutions from "./components/modules/Institutions";
import Home from "./components/modules/Home";
import SearchResult from "./components/modules/SearchResult";

/* UI Library Components */
import { Layout, BackTop } from "antd";

function App() {
  return (
    <Router>
      <BackTop />
      <FilterDrawer />
      <Layout>
        <Header />

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
            <Route exact path="/app/search" component={SearchResult} />
            <Route exact path="/app/authors" component={Authors} />
            <Route exact path="/app/groups" component={Groups} />
            <Route exact path="/app/institutions" component={Institutions} />
          </Switch>
        </Layout.Content>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
