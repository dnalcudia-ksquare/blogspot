import { Switch } from 'react-router-dom';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import PostView from './views/PostView';
import NotFoundScreen from './views/NotFoundScreen';
import ProtectedRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/dashboard' exact>
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path='/dashboard/:id' exact>
          <PostView />
        </ProtectedRoute>
        <Route component={NotFoundScreen} />
      </Switch>
    </Router>
  );
}
export default App;
