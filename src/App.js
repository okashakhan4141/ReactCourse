import AllMeetUpsPage from "./Pages/AllMeetUps";
import NewMeetUpPage from "./Pages/NewMeetUp";
import FavouritesPage from "./Pages/Favorites";
import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layouts/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetUpsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetUpPage />
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
