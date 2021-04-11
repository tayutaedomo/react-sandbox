import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeScreen from '../components/home/HomeScreen';
import ClockScreen from '../components/clock/ClockScreen';
import TempBeforeScreen from '../components/temperature/TempBeforeScreen';
import TempAfterScreen from '../components/temperature/TempAfterScreen';
import FormScreen from '../components/form/FormScreen';
import FormMaterialUIScreen from '../components/form_materialui/FormMaterialUIScreen';
import ContextScreen from '../components/context/ContextScreen';
import CompositionScreen from '../components/composition/CompositionScreen';
import HocScreen from '../components/hoc/HocScreen';
import Rerendering from '../components/re-rendering/Rerendering';
import Styles from '../components/styles/Styles';
import RouterHome from '../components/router/RouterHome';
import RouterPage1 from '../components/router/RouterPage1';
import RouterPage2 from '../components/router/RouterPage2';
import RouterLinks from '../components/router/RouterLinks';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/clock">
        <ClockScreen />
      </Route>
      <Route path="/temperature_before">
        <TempBeforeScreen />
      </Route>
      <Route path="/temperature_after">
        <TempAfterScreen />
      </Route>
      <Route path="/form">
        <FormScreen />
      </Route>
      <Route path="/form_materialui">
        <FormMaterialUIScreen />
      </Route>
      <Route path="/context">
        <ContextScreen />
      </Route>
      <Route path="/composition">
        <CompositionScreen />
      </Route>
      <Route path="/hoc">
        <HocScreen />
      </Route>
      <Route path="/re-rendering">
        <Rerendering />
      </Route>
      <Route path="/styles">
        <Styles />
      </Route>
      <Route
        path="/router"
        render={({ match: { url } }) => (
          <>
            <RouterLinks />
            <Switch>
              <Route path={`${url}/page1`} render={() => <RouterPage1 />} />
              <Route path={`${url}/page2`} render={() => <RouterPage2 />} />
              <Route exact path={url} render={() => <RouterHome />} />
            </Switch>
          </>
        )}
      />
    </Switch>
  );
};

export default Router;
