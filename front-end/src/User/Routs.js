import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../core/Home';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import ForgetPass from './auth/ForgetPass';
import ResetPassword from './auth/ResetPassword';
import NotFound from './NotFound';
import Dashboard from './Client/Dashboard';
import PrivateRoute from '../helpers/PrivateRoute';
import AdminDashboard from './admin/AdminDashboard';
import PrivateAdminRoute from '../helpers/PrivateAdminRoute';
import LivreurDashboard from './livreur/LivreurDashboard';
import PrivateLivreurRoute from '../helpers/PrivateLivreurRoute';
import NotAcces from './NotAcces'
import DashboardAdmin from "../User/admin/Statistique/Dashboard.jsx";
import Repas from "../User/admin/Repas/Repas.jsx";



const Routs = () => {
  return (


    <Router>

      {/* <Navbar /> */}

      <Routes>
        <Route path={'/dash'} element={<DashboardAdmin/>}/>
        <Route path={'/repas'} element={<Repas/>}/>

        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />


          <Route element={<PrivateAdminRoute />}>
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
          </Route>

          <Route element={<PrivateLivreurRoute />}>
            <Route path='/livreur/dashboard' element={<LivreurDashboard />} />
          </Route>
        </Route>

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/forgetpassword' element={<ForgetPass />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/notacces' element={< NotAcces />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default Routs