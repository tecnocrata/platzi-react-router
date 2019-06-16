import React from "react";
//import { render } from "react-dom";
import Home from "../pages/components/home";
import Videos from "../pages/containers/videos";
import Contact from "../pages/components/contact";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "../pages/components/header";
import NotFound from "../pages/components/NotFound";
// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar está acción', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

const logger_ = ({ getState, dispatch }) => next => action => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

//Removido del codigo copiado
//const homeContainer = document.getElementById("home-container");

//Este archivo, es casi casi una copia del entries/app.js
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            {/* <Route
          exact
          path="/videos"
        >
          <div>Videos</div>
        </Route> */}
            <Route exact path="/contacto" component={Contact} />
            <Redirect from="/v" to="/videos" />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
