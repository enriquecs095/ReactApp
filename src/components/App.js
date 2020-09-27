import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ClasesPageFunction from "./ClasesPageFunction";
import Header from "../common/header";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import EditClasePage from "./EditClasePage";
import Increment from "./Increment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmartApi from "./SmartApi";

export function App() {
  /*  function getRoute() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/clases") return <ClasesPageFunction />;

    return <HomePage></HomePage>;
  }*/

  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar={true}></ToastContainer>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/increment/:slug" component={Increment}></Route>
        <Route path="/clase/:slug" component={EditClasePage}></Route>
        <Route path="/clase" component={EditClasePage}></Route>
        <Route path="/clases" component={ClasesPageFunction}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/apis" component={SmartApi}></Route>
        <Redirect from="/about-page" to="/about"></Redirect>
        <Route component={NotFoundPage}></Route>
      </Switch>
    </div>
  );
}
