import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Loader from "./common/loader/loader";
import routes from "./routes";

const Header = React.lazy(() => import("./common/header/header"));
const initialState = { };
type State = Readonly<typeof initialState>;

class App extends Component {
  readonly state: State = initialState;
  render() {
    return (
        <React.Suspense fallback={<Loader />}>
        <Header/>
          <div className="main-container">
            <Switch>
              {routes.map((route:any,index:number) => (
                <Route
                  key={route.path}
                  path={route.path}
                  render={(props: any) => (
                    <route.component {...props} />
                  )}
                />
              ))}
            </Switch>
          </div>
        </React.Suspense>
    );
  }
}

export default App;