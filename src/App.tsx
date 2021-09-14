import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from './common';
import { PlayerProfile, PlayerSearch } from './components/Player';
import { Header } from './layout';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <PlayerSearch />
        </Route>
        <Route path="/:profileId/:status">
          <PlayerSearch />
          <PlayerProfile />
        </Route>
        <Route path="*">
            <PageNotFound />
          </Route>
      </Switch>
    </>
  );
}
export default App
