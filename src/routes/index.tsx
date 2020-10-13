import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { 
  Landing, 
  OrphanagesMap,  
} from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/app" exact component={OrphanagesMap} />
    </Switch>
  );
}

export default Routes;
