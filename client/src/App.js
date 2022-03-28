
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Loginpage from './components/LoginPage/index';
import RegisterPage from './components/RegisterPage/index';
import OrderCreate from './components/createorder/index';
import Orders from './components/Orders/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/orders' component={Orders } />
        <Route exact path='/' component={Loginpage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/createorder' component={OrderCreate} />
      </Switch>
    </Router>

  );
}

export default App;

