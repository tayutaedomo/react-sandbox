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
import RouterLinks from '../components/router/RouterLinks';
import { routerRoutes } from './RouterRoutes';
import RouterPage1 from '../components/router/RouterPage1';
import RouterPage404 from '../components/router/RouterPage404';

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
              {routerRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {route.children}
                </Route>
              ))}
              <Route path={`${url}*`}>
                <RouterPage404 />
              </Route>
            </Switch>
          </>
        )}
      />
    </Switch>
  );
};

export default Router;
