import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page404 from '../components/Page404';
import DefaultLayout from '../components/templates/DefaultLayout';
import Home from '../components/home/Home';
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
import RouterPage404 from '../components/router/RouterPage404';
import AtomicDesignDefaultLayout from '../components/atomic_design/templates/DefaultLayout';
import AtomicDesignHeaderOnly from '../components/atomic_design/templates/HeaderOnly';
import AtomicDesignTop from '../components/atomic_design/pages/Top';
import AtomicDesignUsers from '../components/atomic_design/pages/Users';
import JsonPlaceholder from '../components/json_placeholder/JsonPlaceholder';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route path="/clock">
          <DefaultLayout>
            <ClockScreen />
          </DefaultLayout>
        </Route>
        <Route path="/temperature_before">
          <DefaultLayout>
            <TempBeforeScreen />
          </DefaultLayout>
        </Route>
        <Route path="/temperature_after">
          <DefaultLayout>
            <TempAfterScreen />
          </DefaultLayout>
        </Route>
        <Route path="/form">
          <DefaultLayout>
            <FormScreen />
          </DefaultLayout>
        </Route>
        <Route path="/form_materialui">
          <DefaultLayout>
            <FormMaterialUIScreen />
          </DefaultLayout>
        </Route>
        <Route path="/context">
          <DefaultLayout>
            <ContextScreen />
          </DefaultLayout>
        </Route>
        <Route path="/composition">
          <DefaultLayout>
            <CompositionScreen />
          </DefaultLayout>
        </Route>
        <Route path="/hoc">
          <DefaultLayout>
            <HocScreen />
          </DefaultLayout>
        </Route>
        <Route path="/re-rendering">
          <Rerendering />
        </Route>
        <Route path="/styles">
          <DefaultLayout>
            <Styles />
          </DefaultLayout>
        </Route>
        <Route
          path="/router"
          render={({ match: { url } }) => (
            <DefaultLayout>
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
            </DefaultLayout>
          )}
        />
        <Route
          path="/atomic_design"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={`${url}/`}>
                <AtomicDesignDefaultLayout>
                  <AtomicDesignTop />
                </AtomicDesignDefaultLayout>
              </Route>
              <Route exact path={`${url}/users`}>
                <AtomicDesignHeaderOnly>
                  <AtomicDesignUsers />
                </AtomicDesignHeaderOnly>
              </Route>
            </Switch>
          )}
        />
        <Route path="/jsonplaceholder">
          <DefaultLayout>
            <JsonPlaceholder />
          </DefaultLayout>
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
