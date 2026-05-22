import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Notes from '../pages/Notes';
import Reports from '../pages/Reports';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path='/'
          element={<Login />}
        />

        <Route
          path='/dashboard'
          element={<Dashboard />}
        />

        <Route
          path='/notes'
          element={<Notes />}
        />

        <Route
          path='/reports'
          element={<Reports />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;