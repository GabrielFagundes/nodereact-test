import React from "react";
import { Route, Switch } from "react-router-dom";
import PageContainer from "../components/admin/layout/page/PageContainer";
import Home from '../components/main/Home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <PageContainer>
      <Route exact path="/admin/views" render={() => <div>teste 2</div>} />
      <Route exact path="/admin/reports" render={() => <div>teste 3</div>} />
    </PageContainer>
    <Route component={NoMatch} />
  </Switch>
);

const NoMatch = () => <div>404 - Not Found</div>;

export default Routes;
